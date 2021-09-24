import LogoSVG from "./logo-svg";

export default function Footer() {
   return (

<footer className="text-gray-600 body-font bg-yellow-400 bottom-0 w-full">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <LogoSVG />
      <span className="ml-3 text-l">Alpha Games</span>
    </div>
    <p className="text-sm text-gray-800 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 
      <a href="https://ghouse.dev" className="text-gray-800 ml-1" rel="noopener noreferrer" target="_blank">GHouse Developments</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-800" href="https://facebook.com/alphagamesuk" rel="nofollow">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 m-auto" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
        Facebook
      </a>
    </span>
  </div>
</footer>
    )
}