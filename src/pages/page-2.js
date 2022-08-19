import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import imgLogo from "../images/Luma.png"
import imgCart from "../images/Cart.png"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Link to="/">Go back to the homepage</Link>
    <h1></h1>
    <div className="flex flex-row justify-between">
      <div>
        {/* Reminder note: Had used divHeaderCell in className of these 3 cells, but was throwing off flex */}
        <img className="mb-0" src={imgLogo} />
      </div>
      <div className="flex flex-row">
        <div>
          <input type="text" placeholder="Search entire store here..." />
        </div>
        <div>
          <img className="mb-0" src={imgCart} />
        </div>
      </div>
    </div>
    <h1 className="flex text-sm font-bold bg-gray-200 invisible md:px-2 md:visible md:py-2">
      Category
    </h1>

    <label className="text-2xl sm:text-3xl">Request For Quote</label>
    <div className="py-4"></div>

    <div className="flex flex-col lg:flex-row lg:space-x-4">
      <div className="flex flex-col lg:w-1/3 lg:flex-col">
        <div>
          {/* Would normally remove this but example of how did it before Aaron said to use headings */}
          {/* <label className="sectionHeader">Contact Information</label> */}
          <h1 className="sectionHeader">Contact Information</h1>
          <hr className="sectionLine"></hr>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col">
          <div className="divCell">
            <input type="text" id="firstName" placeholder="First name*" />
          </div>
          <div className="divCell">
            <input type="text" id="lastName" placeholder="Last name*" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col">
          <div className="divCell">
            <input type="text" id="email" placeholder="Email*" />
          </div>
          <div className="divCell">
            <input type="text" id="phone" placeholder="Phone" />
          </div>
        </div>
      </div>
      <div className="sectionSecondBlock flex flex-col lg:w-2/3 lg:flex-col">
        <div>
          <h1 className="sectionHeader">Address</h1>
          <hr className="sectionLine"></hr>
        </div>
        <div className="divCell">
          <input type="text" id="streetLine1" placeholder="Street line 1*" />
        </div>
        <div className="divCell">
          <input type="text" id="streetLine2" placeholder="Street line 2" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="divCell">
            <input type="text" id="city" placeholder="City*" />
          </div>
          <div className="divCell">
            <input type="text" id="state" placeholder="State/Province*" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="divCell">
            <input type="number" id="zip" placeholder="Postal / Zip code*" />
          </div>
          <div className="divCell">
            <select defaultValue={"--Please Select--"}>
              <option value="--Please Select--">--Please Select--</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
            <label className="text-gray-400">Country*</label>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row lg:space-x-4">
      <div className="flex flex-col lg:w-1/2 lg:flex-col">
        <div>
          <h1 className="sectionHeader">Products</h1>
          <hr className="sectionLine"></hr>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="divCell">
            <input type="text" id="item1name" placeholder="Item #1 name" />
          </div>
          <div className="divCell">
            <input type="text" id="item1qty" placeholder="Item #1 quantity" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="divCell">
            <input type="text" id="item2name" placeholder="Item #2 name" />
          </div>
          <div className="divCell">
            <input type="text" id="item2qty" placeholder="Item #2 quantity" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="divCell">
            <input type="text" id="item3name" placeholder="Item #3 name" />
          </div>
          <div className="divCell">
            <input type="text" id="item3qty" placeholder="Item #3 quantity" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="divCell">
            <label className="flex mb-2">Large Quote Upload</label>
            <input type="file" />
          </div>
        </div>
      </div>
      <div className="sectionSecondBlock flex flex-col lg:w-1/2 lg:flex-col">
        <div>
          <h1 className="sectionHeader">Notes</h1>
          <hr className="sectionLine"></hr>
        </div>
        <div className="divCell">
          <label>Additional comments or questions</label>
        </div>
        <div className="divCell">
          <textarea rows={6}></textarea>
        </div>
      </div>
    </div>
    <div>
      <button className="bg-blue-500 uppercase text-xs rounded w-32 ml-2 mt-4">
        Request Quote
      </button>
    </div>
  </Layout>
)

export default SecondPage
