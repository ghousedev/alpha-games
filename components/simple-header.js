import React, { useEffect } from 'react';
import Link from 'next/link'

export default function SimpleHeader() {

  return (
    <div className="w-full">
      <header className="text-gray-600 body-font bg-yellow-400">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-lg md:ml-auto font-semibold">
            <Link href="/">Home</Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 619.28 428.29"
              style={{ maxHeight: 50 }}
            >
              <defs>
                <linearGradient
                  id="prefix__a"
                  x1={2.5}
                  y1={510.38}
                  x2={616.78}
                  y2={510.38}
                  gradientTransform="matrix(1 0 0 -1 0 724.53)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#b85e42" />
                  <stop offset={0.5} stopColor="#9f2214" />
                  <stop offset={1} stopColor="#700101" />
                </linearGradient>
              </defs>
              <title>{"Asset 1"}</title>
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <g data-name="Layer 2">
                    <path
                      d="M394.42 420.22c1.58 1.46 3.21 2.91 4.82 4.36a.69.69 0 01-.72 1.16 82 82 0 01-16.06-9.18c-4.4-3.2-9.4-4.9-14.2-7.2-2.6-1.2-2.8-.1-2.7 2a24.6 24.6 0 002.22 8.17.69.69 0 01-.9.91c-5-2.35-11.06-8.31-15.12-15.18a38.11 38.11 0 00-7.1-8.9c-3.5-3.1-4.7-1.4-5.4 2.1-.91 4.65-.66 9.38-.23 14.41a.69.69 0 01-1.09.63c-13.63-10.16-14.48-27.3-22.32-41.57a.69.69 0 00-1.23.05c-3.24 7.18-3.43 13.75-3.5 20.38a.7.7 0 01-1.28.36c-4.76-7.46-9.26-15.07-9.35-24.46a46 46 0 00-6.76-23.67.7.7 0 00-1.07-.16c-5.22 4.85-6.35 11.12-7.18 18a.69.69 0 01-1.24.34c-5.55-7.16-7.19-15-7.85-23.22a33.91 33.91 0 01.9-11.9c1.15-3.84.37-7.22-1.12-10.59a.69.69 0 00-.7-.41c-1.27.13-1.67 1.4-2.38 2.2-19.2 19.6-39.6 37.8-63.4 51.6-40.6 23.5-84.2 32.2-130.3 20.9-32.3-7.9-56.8-26.6-69.5-58.3-9.6-24-8.7-48.6-2.3-73.1 10.8-40.5 34-73.1 63.7-101.7 27.3-26.3 58.5-45.4 96-53.3 17-3.6 34.3-5.3 51.6-2.1 24.2 4.5 42.9 17.4 56.7 37.6 2.8 4 4.5 5 9 2 11.23-7.41 22.93-14.17 35-21.46a.69.69 0 00.06-1.15c-5.79-4.11-12.38-4.55-19.53-4.83a.69.69 0 01-.48-1.17c6.95-7.08 14.89-10.91 23.64-13.39s17.51-3.22 27.52-2.95a.69.69 0 00.51-1.18c-7.65-7.69-16.72-8.61-26.62-9.24a.7.7 0 01-.33-1.28c7.46-4.82 15-5.88 23-5a61.83 61.83 0 0121.9 6.6c4.6 2.5 7.1-1.2 10.3-2.7 1.4-.7 0-2.1-.6-3-2.6-4-6.7-5.8-11.1-7.2a55.55 55.55 0 00-15.22-2.18.69.69 0 01-.44-1.22c3.28-2.68 6.95-3.72 10.46-4.6 12.8-2.9 25.1-1.7 36.7 5 2.1 1.2 4.9 3.6 6.7 1.3 2-2.6-.3-5.2-2.6-7.1-3.62-3.07-7.24-6.15-10.63-9.59a.7.7 0 01.46-1.19c23.76-1.09 45.45 7.52 68.63 14.46a.69.69 0 00.7-1.14c-4-4.29-7.59-8.1-11.08-11.82a.69.69 0 01.75-1.12c16.3 6.46 33.35 9.68 50.84 13.1a.69.69 0 00.81-.83c-1.91-8.4-6-15-11.18-21.07-6.9-8.1-15.4-14.7-22.8-22.4-4.2-4.3-7.8-9-9.7-14.9a12.21 12.21 0 01-.82-4.28.7.7 0 011.21-.43c8.15 9 16 17.76 24 26.41 12.2 13.2 24.1 26.7 38.1 38.2.4.3.7 1.2 1.3.7a.82.82 0 00-.33-1.29.8.8 0 01-.38-.37c-3.11-7.41-8.6-13.14-13.25-19.48-7.2-9.6-14.6-19-18.7-30.5a36.12 36.12 0 01-2.09-15 .69.69 0 011.36-.1c6.9 28.47 26.16 48.49 44.13 69.23 3.9 4.5 7.9 9 12 13.4 5.3 5.6 9.3 11.6 11.1 19.6 1.6 7 6.6 12.9 12.1 17.9a37.77 37.77 0 019.5 13.1c4.6 10.6 14 16.6 23.4 22.5 3.4 2.1 7.1 3.7 10.5 5.7 3.2 1.8 4.2 4.5 3.3 8-.4 1.5-1.1 2.4-2.8 2.2-8.6-1.2-14.9 3.4-21.3 8.1a42.85 42.85 0 01-6.8 4.2 10.61 10.61 0 01-6.93 1.25.7.7 0 01-.16-1.31c5.28-2.4 10-5.12 13.8-9.69a.7.7 0 00-.53-1.15h-16.41a.69.69 0 01-.46-1.21c3.82-3.3 8-4.94 11.59-7.75a.7.7 0 00-.21-1.22c-8.43-2.63-16.67-5.2-25.6-8a.7.7 0 010-1.34l6.27-1.51c3.5-.7 3.9-2.6 2.3-5.4a15.06 15.06 0 00-6.3-6.2c-7-3.7-14.3-6.3-22.4-5.8-4.3.3-8.7.3-13 .2s-6 2.1-6.5 5.9c-1.2 9.1 2.8 15.7 9.9 20.9a41.54 41.54 0 0019.67 7.68.7.7 0 01.23 1.3c-2.15 1.07-4.3 1.23-6.2 2s-4.1 1-4.4 3.5c-.3 2.7 2.1 3.1 3.7 4 3.75 2.2 8.25 2.72 12.35 5a.69.69 0 010 1.24 29.37 29.37 0 01-17 2.45c-7.29-1.23-14.66-3-22.38-2.53a.68.68 0 01-.38-1.28c1-.56 2-1.12 3-1.69 7.1-4.2 7.8-13.2.9-17.9-10.4-7.1-20.6-14.7-33-18.4-2.07-.62-4.29-1.33-5.81-3.36a.7.7 0 01.28-1.06l10-4.24a.68.68 0 00.07-1.22c-7.95-4.67-14.54-10.19-21.3-15.72-2.7-2.2-6.7-1.6-10.2-1.8-28.6-1.6-54.1 6.7-77.2 23.4-28.3 20.5-51.6 45.2-65.5 77.6-9.9 23.1-11.1 46.2-.5 69.6 15.4 34 33.7 66.2 60 93.1 12.9 13.3 27.3 24.7 46 28.5 12.2 2.5 24.7 3.7 37 5.6 1 .16 2.06.33 3.1.55a.69.69 0 010 1.35c-18.09 3.75-36.1 3.13-54.2-.4-4.53-.88-9-1.86-13.48-2.75a.76.76 0 01-.37-.21 1.32 1.32 0 00-1.85-.24c.29.48.66.87 1 1.33a.64.64 0 00-.03.16zm94-316.36c-.3 0-.5-.1-.8-.1a.35.35 0 00-.2.1 1.7 1.7 0 011 0c1.6 4.5 11.6 9.7 17.1 8.9 4.7-.6 10.1-5.5 10-9.8-.1-5.1-4.5-6-8.2-7.4a19.44 19.44 0 00-4.9-1.1c-6.9-.51-13.94-.14-20.75-2.14a.69.69 0 00-.65 1.18c3.59 3.08 7.4 5.58 12.3 6.46 1.4.2 3.9-.7 3.8 1.9-.1 2.3-2.3 2.6-4 3s-3.12-.3-4.66-1zM67.36 303.76a82.05 82.05 0 004.4 27.4c5.1 14.5 14.2 25.2 29.8 28.7 13.4 3 26.1.2 38.4-5.3 16.1-7.2 30-17.8 43-29.7 26.3-24 46.9-52.5 66.2-82.2 1.4-2.1 1.1-4.1.7-6.2a401 401 0 00-12.6-50.8c-4.5-13.6-9.7-27-19.1-38.1-9.7-11.5-22-16.6-37.2-14.8-14 1.7-26 7.8-36.8 16.6-17 13.9-29.9 31.2-41.3 49.7-19 30.8-33.6 63.1-35.5 104.7zm478.74-196a.69.69 0 00-1.12-.14c-3.37 3.65-3.63 7.1-.72 10.1 2.69 2.88 5.81 3.35 9.52 1.41a.7.7 0 00.14-1.14 36.21 36.21 0 01-7.82-10.19z"
                      stroke="#000"
                      strokeMiterlimit={10}
                      strokeWidth={5}
                      fill="url(#prefix__a)"
                      data-name="Layer 3"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span className="ml-3 text-xl">Alpha Games</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end sm:ml-2 lg:ml-0">
          <p>01359 250707</p>
          </div>
        </div>
      </header>
    </div>

  )
}