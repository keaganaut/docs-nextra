import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

export default async function handler(req, res) {
  const { sourceName } = req.query;
  const bodyHtml = await getHtmlString(sourceName);
  res.status(200).json({ bodyHtml });
}

export async function getHtmlString(sourceName) {
  const filePath = join(
    process.cwd(),
    `/pages/sources/connectors/${sourceName}/${sourceName}-setup-guide.mdx`
  );
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  console.log(content);
  const result = await remark().use(html).process(content);

  return result.toString();
}
