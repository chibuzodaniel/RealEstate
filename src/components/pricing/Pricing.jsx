import React from 'react'
import img from "../images/pricing.jpg";
import Back from '../common/Back';
import PriceCard from "../home/price/PriceCard"

const Pricing = () => {
  return (
    <>
      <section className="blog-out mb">
            <Back  name="30 days money back guarantee" title="No Extra Fees. Friendly Support" cover={img}/>
            
            <div className="price container">
                <PriceCard/>
            </div>
        </section>
    
    </>
  )
}

export default Pricing