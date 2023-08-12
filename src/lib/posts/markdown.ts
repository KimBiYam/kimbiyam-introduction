import fs from 'fs';
import path from 'path';

import rehypePrism from '@mapbox/rehype-prism';
import matter from 'gray-matter';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

export const getMarkdownData = async (directory: string, id: string) => {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const { content } = matterResult;
  const contentHtml = await parseMarkdown(content);

  return {
    matterResult,
    contentHtml,
  };
};

export const parseMarkdown = async (content: string) => {
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  return processedContent.toString();
};
