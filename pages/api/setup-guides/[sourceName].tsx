import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res.setHeader(
    "Cache-Control",
    "s-maxage=86400, stale-while-revalidate=1296000"
  );
  const { sourceName } = req.query;
  const result = await parseMarkdown(sourceName as string);
  res.status(200).json(result);
}

export async function parseMarkdown(sourceName: string) {
  const filePath = join(
    process.cwd(),
    `/pages/sources/connectors/${sourceName}/${sourceName}-setup-guide.mdx`
  );
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);
  const result = await remark().use(html).process(content);

  return { data: data, content: result.toString() };
}
