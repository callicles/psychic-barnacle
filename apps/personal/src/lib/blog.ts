import glob from "fast-glob";
import { join } from "path";
import { lstatSync } from "fs";

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export interface Article extends ArticleMeta {
  component: () => JSX.Element;
}

async function importArticle(articleFilename: string) {
  let { meta, default: component } = await import(
    "../articles/" + articleFilename
  );
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  let article;
  try {
    lstatSync(join(process.cwd(), "src/articles", slug));
    article = await importArticle(`${slug}/index.mdx`);
  } catch {
    article = await importArticle(`${slug}.mdx`);
  }

  return article;
}

export async function getAllArticles(): Promise<Article[]> {
  let articleFilenames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: join(process.cwd(), "src/articles"),
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort(
    (a, z) => new Date(z.date).getTime() - new Date(a.date).getTime(),
  );
}
