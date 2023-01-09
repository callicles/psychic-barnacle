import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from 'src/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from 'src/components/SocialIcons'
import portraitImage from 'src/images/portrait.jpg'
import { github, instragram, linkedin, twitter } from '../lib/socialLinks'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Nicolas Joseph</title>
        <meta
          name="description"
          content="I’m Nicolas Joseph. I have lived accross the Europe and North America. I build teams and products from the ground up"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Nicolas Joseph, I build teams and products from the ground up
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I've always loved building things. When I was 6, I was building
                safes, clothes with tape, papers and cisors. At home, we got our
                first computer when I was 12 and started learning and building
                websites.
              </p>

              <p>
                I started with HTML and CSS and then got into PhP and
                JavaScript. Then, I moved to C in high school and diversified
                with Java, Scala and Haskell in College.
              </p>

              <p>
                At Cornell, I learned Python and Rust, the latter being on the
                rise in 2016 and a much better ergonomic alternative to C/C++.
              </p>

              <p>
                I started a first company, GitLinks - failed at making it a
                success, joined Datalogue, my dear friend and flatmate's at the
                time company. As VP of Engineering there, I grew the team untill
                we sold the company to Nike in 2020.
              </p>

              <p>
                At Nike, I am currently building and leading a team of backend
                engineers working on Nike's virtual good platform.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href={instragram}
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink href={github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:nicolas@nicolasjoseph.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                nicolas@nicolasjoseph.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
