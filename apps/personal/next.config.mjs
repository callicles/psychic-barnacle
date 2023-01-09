/** @type {import('next').NextConfig} */

import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'


const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts','tsx','mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypePrism, rehypeKatex],
  },
})

export default withMDX(nextConfig)
