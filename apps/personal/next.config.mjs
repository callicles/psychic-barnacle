import addMdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypePrism from "@mapbox/rehype-prism";
import remarkImages from "remark-images";
import rehypeKatex from 'rehype-katex'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // mdxRs: true,
    // scrollRestoration: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default addMdx(nextConfig, {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, remarkGfm, remarkImages],
    rehypePlugins: [rehypeKatex, rehypePrism],

    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})(nextConfig);
