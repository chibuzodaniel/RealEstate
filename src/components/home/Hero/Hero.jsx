import React from 'react';
import Heading from "../../common/Heading"
import "./hero.css"

export const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <Heading title='Search your Next' subtitle='find new & featured property located in your local city.'/>
            <form  className="flex">
                <div className="box">
                    <span>City/Street</span>
                    <input type="text" placeholder="City/Street"  />
                </div>
                <div className="box">
                    <span>Property Type</span>
                    <input type="text"  placeholder="Property Type" />
                </div>
                <div className="box">
                    <span>Price Range</span>
                    <input type="number" placeholder="Price Range" />
                </div>
                <div className="box">
                    <h4>Advanced Filter</h4>
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}
