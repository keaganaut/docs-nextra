import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "s-maxage=3600",
    "stale-while-revalidate=86400"
  );
  const { sourceName } = req.query;
  const result = await parseMarkdown(sourceName);
  res.status(200).json(result);
}

export async function parseMarkdown(sourceName) {
  const filePath = join(
    process.cwd(),
    `/pages/sources/connectors/${sourceName}/${sourceName}-setup-guide.mdx`
  );
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);
  const result = await remark().use(html).process(content);

  return { data: data, content: result.toString() };
}
