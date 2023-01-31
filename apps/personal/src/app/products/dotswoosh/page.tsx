import Image from 'next/image'
import image_1 from './section-4-large.webp'
import swoosh_id from './swoosh_id.png'

export default function Swoosh() {
    return (<>

<div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <div className="flex flex-wrap">
                <div className="w-full block">
                    <Image src={image_1}  alt="Nike Swoosh" className="block object-cover object-center w-full h-full "/>
                </div>
                <div className="w-1/2">
                    <Image src={swoosh_id}  alt="Nike Swoosh" className="block object-cover object-center w-full h-full "/>
                </div>
                <div className="w-1/2">
                    <video autoPlay={true} controls={false} loop={true} src={"/videos/section-1-large.mp4"} className="block object-cover object-center w-full h-full "/>
                </div>
            </div>
        </div>
      </div>
      <div className="relative px-6 pt-12 pb-16 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-indigo-600">Products</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"><a href='https://www.swoosh.nike'>.Swoosh</a></h3>
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
          </div>
        </div>
      </div>
    </div>

    </>)
}