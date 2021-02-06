import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import { dependencies } from "../../../package.json"

const Header: FC = () => {
  const APP_TITLE = `Podcast Explorer`
  const APP_DESCRIPTION = `A sample project featuring @neo4j/graphql ${dependencies["@neo4j/graphql"]} and TypeScript`
  const APP_URL = "https://podcast-explorer.vercel.app"
  const APP_TYPE = "website"
  const APP_LOGO = "img/grandstack.png"
  const APP_LOGO_URL = `${APP_URL}/${APP_LOGO}`
  const APP_TWITTER_ACCOUNT = "therobbrennan"
  const KEYWORDS = "nextjs, react, grandstack, neo4j, typescript, apollo"

  const router = useRouter()
  const launchGraphIQL = (e) => {
    e.preventDefault()
    router.push("/api/graphql")
  }

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta
          property="description"
          content={APP_DESCRIPTION}
          key="description"
        />
        <meta property="keywords" content={KEYWORDS} key="keywords" />
        <meta property="og:title" content={APP_TITLE} key="og:title" />

        {/* Open Graph */}
        <meta
          property="og:description"
          content={APP_DESCRIPTION}
          key="og:description"
        />
        <meta property="og:url" content={APP_URL} key="og:url" />
        <meta property="og:type" content={APP_TYPE} key="og:type" />
        <meta property="og:image" content={APP_LOGO_URL} key="og:image" />

        {/* Twitter */}
        <meta
          property="twitter:creator"
          content={APP_TWITTER_ACCOUNT}
          key="twitter:creator"
        />
        <meta
          property="twitter:title"
          content={APP_TITLE}
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content={APP_DESCRIPTION}
          key="twitter:description"
        />
        <meta
          property="twitter:image"
          content={APP_LOGO_URL}
          key="twitter:image"
        />
      </Head>
      <header>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3 ">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">
                  <a
                    href="#"
                    className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
                  >
                    {APP_TITLE}
                  </a>
                </div>

                <div className="flex md:hidden">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* <div className="hidden -mx-4 md:flex md:items-center">
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Web developers
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Web Designers
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  UI/UX Designers
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Contact
                </a>
              </div> */}
            </div>
          </div>
        </nav>

        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "32rem",
            backgroundImage: `url(${APP_LOGO})`,
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <button
                onClick={launchGraphIQL}
                className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Launch GraphIQL
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
