import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res.setHeader(
    "Cache-Control",
    "public, max-age=86400, s-maxage=86400, stale-while-revalidate=2592000"
  );

  const { sourceName } = req.query;

  //parse markdown to html
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
  // console.log(htmlString);

  const startIndex: number = htmlString.indexOf("<h2>Authenticate</h2>");
  const endIndex: number = htmlString.lastIndexOf("<h2>Configure</h2>");

  const authHtml: String = htmlString.substring(startIndex, endIndex);
  const configHtml: String = htmlString.substring(endIndex);

  res.status(200).json({
    data: data,
    content: { authenticate: authHtml, configure: configHtml },
  });
}
