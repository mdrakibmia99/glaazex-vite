// eslint-disable-next-line no-unused-vars
import React from 'react'
import Slider from '../components/slider/Slider';
import Category from '../components/category/Category';
import Products from '../components/products/Products';


function Home() {
  const decodedPath = decodeURIComponent("Baby%20Item")
  console.log(decodedPath,"decodedPath")
  return (
    <div>
      <Slider/>
      <Category/>
      <Products/>
    </div>
  )

}

export default Home;