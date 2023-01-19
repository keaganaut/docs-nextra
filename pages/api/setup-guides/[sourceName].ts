import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ): Promise<void> {
//   res.setHeader(
//     "Cache-Control",
//     "max-age=86400, s-maxage=86400, stale-while-revalidate"
//   );
//   const { sourceName } = req.query;
//   const result = await parseMarkdown(sourceName as string);
//   res.status(200).json(result);
// }

// export async function parseMarkdown(sourceName: string) {
//   const filePath = join(
//     process.cwd(),
//     `/pages/sources/connectors/${sourceName}/${sourceName}-setup-guide.mdx`
//   );
//   const fileContents = fs.readFileSync(filePath, "utf-8");

//   const { data, content } = matter(fileContents);
//   const result = await remark().use(html).process(content);
//   console.log(String(result));

//   return { data: data, content: result.toString() };
// }
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res.setHeader(
    "Cache-Control",
    "public, max-age=86400, s-maxage=86400, stale-while-revalidate=2592000"
  );
  const { sourceName } = req.query;
  const result = await getSetupGuideContent(sourceName as string);
  res.status(200).json(result);
}

export async function getSetupGuideContent(sourceName: string) {
  const filePath = join(
    process.cwd(),
    `/pages/sources/connectors/${sourceName}/${sourceName}-setup-guide.mdx`
  );

  const fileContents = readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);

  const htmlString = String(
    await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(content)
  ).replace(/[\r\n]/gm, "");

  //TODO: fix remarkGfm stringified escaped chars
  console.log(htmlString);

  const startIndex: number = htmlString.indexOf("<h2>Authenticate</h2>");
  const endIndex: number = htmlString.lastIndexOf("<h2>Configure</h2>");

  const authHtml: String = htmlString.substring(startIndex, endIndex);
  const configHtml: String = htmlString.substring(endIndex);

  return {
    data: data,
    content: { authenticate: authHtml, configure: configHtml },
  };
}
