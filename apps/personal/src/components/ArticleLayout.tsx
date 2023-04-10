import { ArticleMeta } from '@/lib/blog'

interface Props {
    children: React.ReactNode;
    meta: ArticleMeta,
}
export const ArticleLayout = ({  
    children,
    meta
}: Props) => {
    return <div className="bg-white py-18 px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p className="text-base font-semibold leading-7 text-indigo-600">Blog Post</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> {meta.title} </h1>

      <div className="mt-10 max-w-2xl">

        {children}
      </div>
    </div>
  </div>
}