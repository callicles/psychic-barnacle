"use client";

import { Fragment } from "react";
import { Popover, Menu, Disclosure, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CheckCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { products } from "../app/products/products";
import { usePathname } from "next/navigation";

const callsToAction = [
  { name: "View All Products", href: "/products", icon: CheckCircleIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="relative bg-white shadow">
      {({ open: openMenu }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto sm:h-10 rounded-md"
                    src="https://i.seadn.io/gcs/files/d28c2301eaed83fa0efbb4e364adcceb.png"
                    alt="Nicolas Joseph"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="/"
                    className={
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium " +
                      (pathname === "/"
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")
                    }
                  >
                    Home
                  </a>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Popover
                    className={classNames(
                      "flex items-center border-b-2",
                      pathname.startsWith("/products")
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    )}
                  >
                    {({ open: openProduct }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            openProduct ? "text-gray-900" : "text-gray-500",
                            "inline-flex  px-1 pt-1 text-sm font-medium",
                            pathname.startsWith("/products")
                              ? "border-indigo-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          )}
                        >
                          <span>Products</span>
                          <ChevronDownIcon
                            className={classNames(
                              openProduct ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500",
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                            <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                              {products.slice(0, 4).map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                                >
                                  <div className="flex md:h-full lg:flex-col">
                                    <div className="flex-shrink-0">
                                      <div className="inline-flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12 relative">
                                        <Image
                                          src={item.icon}
                                          fill={true}
                                          aria-hidden="true"
                                          className="p-1"
                                          alt={`${item.name} Product Logo`}
                                        />
                                      </div>
                                    </div>
                                    <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                      <div>
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.summary}
                                        </p>
                                      </div>
                                      <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                        Learn more
                                        <span aria-hidden="true"> &rarr;</span>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="bg-gray-50">
                              <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <item.icon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <a
                    href="/blog"
                    className={
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium " +
                      (pathname.startsWith("/blog")
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")
                    }
                  >
                    Blog
                  </a>
                  <a
                    href="/readings"
                    className={
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium " +
                      (pathname.startsWith("/readings")
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")
                    }
                  >
                    Readings
                  </a>
                  <a
                    href="#"
                    className={
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium " +
                      (pathname.startsWith("/about")
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")
                    }
                  >
                    About
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {openMenu ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium " +
                  (pathname === "/"
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700")
                }
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/products"
                className={
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium " +
                  (pathname.startsWith("/products")
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700")
                }
              >
                Products
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/blog"
                className={
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium " +
                  (pathname.startsWith("/blog")
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700")
                }
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/readings"
                className={
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium " +
                  (pathname.startsWith("/readings")
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700")
                }
              >
                Readings
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium " +
                  (pathname.startsWith("/about")
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700")
                }
              >
                About
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
