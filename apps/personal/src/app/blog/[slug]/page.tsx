import { getAllArticles, getArticleBySlug } from "@/lib/blog";
import { ParsedUrlQuery } from "querystring";
import "katex/dist/katex.min.css";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  params: Params;
};

const BlogPost = async ({ params }: Props) => {
  const blog = await getArticleBySlug(params.slug);

  return (
    <div className="w-2/3 m-auto">
      <article className="prose lg:prose-xl">{blog.component()}</article>
    </div>
  );
};

export const generateStaticParams = async () => {
  const blogs = await getAllArticles();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};

export default BlogPost;
