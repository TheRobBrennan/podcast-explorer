import { FC } from "react"

import { dependencies } from "../../../package.json"

const Footer: FC = () => {
  return (
    <footer className="footer bg-white relative pt-1">
      <div className="container mx-auto px-6">
        <div className="mt-16 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              Copyright © {new Date().getFullYear()} Robert J Brennan. All
              rights reserved.
              <br />
              Powered by @neo4j/graphql{dependencies["@neo4j/graphql"]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
