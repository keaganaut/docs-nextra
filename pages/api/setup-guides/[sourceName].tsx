import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

// export default async function handler(req, res) {
//   const { sourceName } = req.query;
//   const result = await parseMarkdown(sourceName);
//   res.status(200).json(result);
// }

// export async function parseMarkdown(sourceName) {
//   const filePath = join(
//     process.cwd(),
//     `/pages/sources/connectors/${sourceName}/${sourceName}-setup-guide.mdx`
//   );
//   const fileContents = fs.readFileSync(filePath, "utf-8");

//   const { data, content } = matter(fileContents);
//   const result = await remark().use(html).process(content);

//   return { data: data, content: result.toString() };
// }

export default async function handler(req, res) {
  const { sourceName } = req.query;
  const auth = await parseMarkdown(sourceName, "authenticate");
  const config = await parseMarkdown(sourceName, "configure");
  res.status(200).json({ ...auth, ...config });
}

export async function parseMarkdown(sourceName, suffix) {
  const filePath = join(
    process.cwd(),
    `/pages/sources/connectors/${sourceName}/${sourceName}-${suffix}.mdx`
  );
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);
  const result = await remark().use(html).process(content);

  return { [suffix]: result.toString() };
}
