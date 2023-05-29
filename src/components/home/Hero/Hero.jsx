import React from 'react';
import "./hero.css"

export const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <form  className="flex">
                <div className="box">
                    <span>City/Street</span>
                    <input type="text" placeholder='Location' />
                </div>
                <div className="box">
                    <span>Property Type</span>
                    <input type="text" placeholder='Property Type' />
                </div>
                <div className="box">
                    <span>Price Range</span>
                    <input type="text" Placeholder='Price Range' />
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
