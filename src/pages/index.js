import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

function sayJY() {
  alert("Jeremy Yoder")
}

const IndexPage = () => (
  <Layout>
    <div className="flex flex-col justify-between bg-yellow-300 sm:bg-green-400 border rounded py-2 px-2">
      {/* Think of first one (default) as the mobile, which can be override with larger ones */}
      <div className="dataFormat">
        <div className="w-24">
          <label className="labelChangeColor" htmlFor="firstName">
            First Name:
          </label>
        </div>
        <div className="left-5">
          <input type="text" id="firstName" className="inputFormat" />
        </div>
      </div>
      <div className="dataFormat">
        <div className="w-24">
          <label className="labelChangeColor" htmlFor="lastName">
            Last Name:
          </label>
        </div>
        <div>
          <input type="text" id="lastName" className="inputFormat" />
        </div>
      </div>
      <div className="dataFormat">
        <div className="w-24">
          <label className="labelChangeColor" htmlFor="age">
            Age:
          </label>
        </div>
        <div>
          <input type="number" id="age" className="inputFormat w-20" />
        </div>
      </div>
      <div className="dataFormat">
        <div className="w-24">
          <label className="labelChangeColor" htmlFor="years">
            Years:
          </label>
        </div>
        <div>
          <input type="number" id="years" className="inputFormat w-20" />
        </div>
      </div>
      <div className="flex h-4"></div>
      <div>
        <div className="flex content-center">
          {/* Don't really use this type anymore */}
          {/* <input
            type="button"
            value="Submit 1"
            className="flex rounded-full btn-blue"
            onClick={sayJY}
          /> */}
          <button className="flex rounded-full btn-blue" onClick={sayJY}>
            Submit 2
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={sayJY}
          >
            Submit 3
          </button>
        </div>
      </div>
    </div>
    <h1></h1>
    <div className="grid grid-cols-4 gap-5 bg-green-300 sm:bg-purple-400 border rounded py-2 px-2">
      <div className="gridCell">AAA</div>
      <div className="gridCell">BBB</div>
      <div className="gridCell">CCC</div>
      <div className="gridCell">DDD</div>
      <div className="gridCell col-span-2">EEE</div>
      <div className="gridCell">FFF</div>
      <div className="gridCell">GGG</div>
      <div className="gridCell">HHH</div>
      <div className="gridCell col-span-2 sm:col-span-1">III</div>
      <div className="gridCell sm:col-span-2">JJJ</div>
    </div>
    <h1></h1>
    <Link to="/page-2">Go to 2nd page</Link>
  </Layout>
)

export default IndexPage
