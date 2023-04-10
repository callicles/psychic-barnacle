
import { getAllArticles, Article } from "../../lib/blog";
  
export default async function Blog() {
    const articles: Article[] = await getAllArticles();

    return <div className="bg-white py-12 sm:py-18">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          The views expressed here are my own
        </p>
        <div className="mt-16 space-y-10 lg:mt-10 lg:space-y-10">
          {articles.map((post) => (
            <article key={post.slug} className="relative isolate flex flex-col lg:flex-row">              
              <div>
                <div className="flex items-center text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={"./blog/" + post.slug}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
}