import { findProductBySlug } from "../products";
import { Error404 } from "@/components/404";
import Image from "next/image";

export default function ProductPage({
  params,
}: {
  params: { productSlug: string };
}) {
  const product = findProductBySlug(params.productSlug);
  if (product) {
    return (
      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-lg font-semibold text-indigo-600">Product</h2>
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                {product.images.map((image, index) => (
                  <figure key={index}>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <Image
                        className="rounded-lg object-cover object-center shadow-lg"
                        src={product.images[0]}
                        alt={product.name}
                      />
                    </div>
                    {/* <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption> */}
                  </figure>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0">{product.pageContent()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return Error404();
  }
}
