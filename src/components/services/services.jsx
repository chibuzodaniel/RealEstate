import React from 'react';
import Back from '../common/Back';
import img from "../../components/images/services.jpg"
import FeaturedCard from "../../components/home/featured/FeaturedCard.jsx"

const Services = () => {
  return <>
  <section className="services mb">
  <Back name="services" title="Services -All Services" cover={img}/>
  <div className="featured container">
    <FeaturedCard />
  </div>
  </section>
  </>
}

export default Services