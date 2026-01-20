"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  CodeBracketSquareIcon,
  MagnifyingGlassCircleIcon,
  PlayCircleIcon as PlayCircleIconOutline,
  CurrencyDollarIcon,
  UserCircleIcon,
  BuildingStorefrontIcon,
  BookOpenIcon,
  BookmarkSquareIcon,
  AcademicCapIcon,
  MicrophoneIcon,
  CubeTransparentIcon,
  UserPlusIcon,
  BriefcaseIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  CubeIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";

const aboutUs = [
  {
    name: "Partner with Us",
    description:
      "Explore partnership opportunities with Right Rudder Marketing",
    href: "/about/partnerships",
    icon: UserPlusIcon,
  },
  {
    name: "Career Opportunities",
    description:
      "Join the Right Rudder Marketing team and help shape the future of aviation marketing",
    href: "/about/careers",
    icon: BriefcaseIcon,
  },
  {
    name: "Investor Relations",
    description:
      "Learn more about investment opportunities with Right Rudder Marketing",
    href: "/about/investors",
    icon: PresentationChartBarIcon,
  },
];
const resources = [
  {
    name: "Flight School Marketing Handbook",
    description: "Comprehensive guide to marketing for flight schools",
    href: "/resources/flight-school-marketing-handbook",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Flight Deck Magazine",
    description: "Insights and trends in the aviation industry",
    href: "/resources/flight-deck-magazine",
    icon: BookOpenIcon,
  },
  {
    name: "Webinars",
    description: "Learn from industry experts through our webinars",
    href: "/webinars",
    icon: AcademicCapIcon,
  },
  {
    name: "The Aviation Business Podcast",
    description: "Interviews and discussions on aviation business topics",
    href: "https://theaviationbusinesspodcast.com/",
    icon: MicrophoneIcon,
  },
];
const callsToActionAboutUs = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all services", href: "#", icon: RectangleGroupIcon },
];
const callsToActionResources = [
  { name: "Our Marketing System", href: "/marketing-system", icon: CubeIcon },
  { name: "View all resources", href: "#", icon: RectangleGroupIcon },
];

export default function NavbarFlyout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 isolate z-50">
      <nav
        aria-label="Global"
        className="mx-auto font-inter flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Right Rudder Marketing</span>
            <img
              alt="Right Rudder Marketing Logo"
              src="/RRM-hor-textWhite-bgTrans-150.webp"
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="/marketing-system"
            className="flex flex-col gap-0 text-center group"
          >
            <span className="text-xs/6 p-0 m-0 font-light text-gray-300 group-hover:text-amber-300">
              Our Marketing
            </span>
            <span className="font-extrabold -mt-2 p-0 text-2xl uppercase text-gray-200">
              System
            </span>
          </a>
          <Popover>
            <PopoverButton className="flex flex-col text-center gap-0 items-center group hover:cursor-pointer">
              <span className="text-xs/6 p-0 m-0 font-light text-gray-300 group-hover:text-amber-300">
                Webinars, Magazine, Podcast
              </span>
              <span className="font-extrabold -mt-2 p-0 text-2xl uppercase text-gray-200">
                Resources
              </span>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-24 bg-slate-800 transition data-closed:-translate-y-2 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 top-1/2 bg-slate-100 ring-1 ring-white/15"
              />
              <div className="relative bg-slate-400">
                <div className="mx-auto flex flex-wrap justify-center max-w-7xl gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {resources.map((item) => (
                    <div
                      key={item.name}
                      className="group w-1/5 relative rounded-lg p-6 text-sm/5 hover:bg-slate-900/5"
                    >
                      <div className="flex size-11 items-center justify-center rounded-lg bg-slate-400/50 group-hover:bg-slate-700">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-slate-600 group-hover:text-white"
                        />
                      </div>
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        className="mt-6 block font-semibold text-slate-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-slate-500 group-hover:text-slate-700">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-800/50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex justify-center divide-x divide-white/5 border-x border-white/10">
                      {callsToActionResources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center w-1/3 justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-slate-100 hover:bg-slate-800"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-slate-700"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/blog" className="flex flex-col gap-0 text-center group">
            <span className="text-xs/6 p-0 m-0 font-light text-gray-300 group-hover:text-amber-300">
              News & Tips
            </span>
            <span className="font-extrabold -mt-2 p-0 text-2xl uppercase text-gray-200">
              Blog
            </span>
          </a>
          <Popover>
            <PopoverButton className="flex flex-col text-center gap-0 items-center hover:cursor-pointer group">
              <span className="text-xs/6 p-0 m-0 font-light text-gray-300 group-hover:text-amber-300">
                Proven Results
              </span>
              <span className="font-extrabold -mt-2 p-0 text-2xl uppercase text-gray-200">
                About
              </span>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-24 bg-slate-800 transition data-closed:-translate-y-2 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 top-1/2 bg-slate-100 ring-1 ring-white/15"
              />
              <div className="relative bg-mariner-200">
                <div className="mx-auto flex flex-wrap justify-center max-w-7xl gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {aboutUs.map((item) => (
                    <div
                      key={item.name}
                      className="group w-1/5 relative rounded-lg p-6 text-sm/5 hover:bg-mariner-900/5"
                    >
                      <div className="flex size-11 items-center justify-center rounded-lg bg-mariner-200/50 group-hover:bg-mariner-700">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-mariner-600 group-hover:text-white"
                        />
                      </div>
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        className="mt-6 block font-semibold text-gray-700"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400 group-hover:text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-mariner-800/50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex justify-center divide-x divide-white/5 border-x border-white/10">
                      {callsToActionAboutUs.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center w-1/3 justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-mariner-100 hover:bg-mariner-800"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-mariner-700"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Right Rudder Marketing Logo"
                src="/RRM-R-symbol-474.webp"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <a
                  href="/marketing-system"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-white hover:bg-white/5"
                >
                  Our System
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...resources, ...callsToActionResources].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-white hover:bg-white/5"
                >
                  Blog
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-white hover:bg-white/5"
                >
                  About Us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/contact"
                  className="btn-primary -mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-light text-white hover:bg-white/5"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
