import { StaticImageData } from 'next/image';

import swooshId from './swoosh_id.png'
import gitlinks from './gitlinks.png'
interface Product {
    name: string;
    slug: string;
    icon: string;
    href: string;
    summary: string;
    images: StaticImageData[];
    pageContent: () => JSX.Element
    acquiredBy?: string;
}

export const products: Product[] = [{
        name: 'Nike .Swoosh',
        slug: 'dotswoosh',
        summary: "Nike's web 2.5 platform that celebrates commuities and creators.",
        href: '/products/dotswoosh',
        icon: '/swoosh.svg',
        images: [swooshId],
        pageContent: () => <>
        <p className="mt-8 text-lg text-gray-500">
                .SWOOSH is a web3-enabled platform that champions athletes and serves the future of sport 
                by creating a new, inclusive digital community and experience and a home for Nike virtual creations
            </p>
            <div className="prose prose-indigo mt-5 text-gray-500">
              <p>
              The digital community and experience is a home for Nike virtual creations and uses 
              blockchain-powered technology — or what many call “web3” — to offer an inclusive, equitable 
              place for athletes, creators, collectors and consumers to design and own the future of sport. 
              </p>
              <p>
              There, Nike Members will be able to learn about and collect virtual creations, which are typically 
              interactive digital objects, such as virtual shoes or jerseys, that community members will soon be 
              able to wear in digital games and immersive experiences. In some instances, community members will
               be able to unlock access to physical product or events like intimate conversations with athletes
                or designers.
              </p>
              <p>The point: to expand the definition of sport — and serve its future — by democratizing the web3 
                experience so that everyone can collect, create and own a piece of this new digital world.</p>
                <p>Reference: https://about.nike.com/en/newsroom/releases/nike-launches-swoosh-a-new-digital-community-and-experience</p>
            </div>
            </>

      },
      {
        name: 'Datalogue',
        slug: 'datalogue',
        summary: 'Enterprise Data Platform for new generation of cheap data meshes.',
        href: '/products/datalogue',
        acquiredBy: "Nike",
        icon: '/datalogue_logo.png',
        images: [],
        pageContent: () => <>
              <p className="mt-8 text-lg text-gray-500">
                Datalogue is a data exchange platform and company that was acquired by Nike in 2021.
            </p>
            <div className="prose prose-indigo mt-5 text-gray-500">
              <p>
              Datalogue was the start up journey where I experienced the most growth and learnings.
              It started as a data marketplace, pivoted to data automated data preparation with AI and finally moved to 
              the data movement space. Aiming to be a one stop shop for moving, reformating and cataloging data in the
              enterprise. 
              </p>
              <p>
                We built and architected a system on top of Akka Streams and a custom intermediate data structure to enabled
                near real time data pipelines. The system was interpreting pipeline manifests in Json, compiling to 
                an executable program, detecting user misconfigurations at compile time and then executing the pipeline in seconds.
              </p>
              <p>
                The pipeline system was structure to carry semantic information alongside the data point. Allowing 
                Machine learning models to be paired with the pipeline to automaticly tag and reformat the data.
              </p>
              <p>
              I was VP of Engineering at Datalogue before it got acquired. I was responsible for building the team,
              improving the team productivity as well as the reliability and archicture. At its peak, we had 10 engineers
              in the team.
              </p>
            </div>
        </>

      },
      { name: 'Gitlinks',
      slug: 'gitlinks',
      summary: "Secure your software supply chain by ensuring maintained, secure and licensable open source.",
       acquiredBy: "Infor",
       href: '/products/gitlinks', 
       icon: '/gitlinks.png',
       images: [],
       pageContent: () => <>
            <p className="mt-8 text-lg text-gray-500">
                Gitlinks was a startup I co-founded in 2018. We were building a platform to secure the software supply chain.
            </p>
            <div className="prose prose-indigo mt-5 text-gray-500">
              <p>
              GitLinks is a software company that offers a solution to help manage open source software dependencies 
              and ensure compliance with open source licenses.
              </p>
              <p>
              When developers use open source libraries or frameworks in their projects, 
              they need to comply with the terms of the licenses attached to those libraries. 
              This can be a complex and time-consuming task, especially as projects grow and dependencies multiply.
              </p>
              <p>
              Another aspect that is difficult to manage is the quality of the community around the open source.
              Open source projects can be abandoned, or they can be compromised by malicious actors.
              Documentation can grow stale and security vulnerabilities can go unpatched.
              </p>
              <p>
              GitLinks offered a platform that can automatically detect open source components in a software project, 
              track their licenses, and provide alerts when new vulnerabilities or license compliance issues arise. 
              It will also track the quality, liveliness and breadth of the community around the open source project.
              </p>
              <p>
              This can help development teams save time, reduce risk, and ensure that they
               are using open source software in a compliant and secure way.
              </p>
            </div>
       </>
    
    },
      {
        name: 'Linkurious',
        slug: 'linkurious',
        summary: "Enterprise Graph platform - Model and explore your data as a graph.",
        href: '/products/linkurious',
        icon: '/linkurious.png',
        images: [],
        pageContent: () => <></>
      },
]

export const findProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug.toLowerCase() === slug.toLowerCase())
}