// eslint-disable-next-line no-unused-vars
import React from 'react'
import Category from './category/Category';
import Products from './products/Products';
import Slider from './slider/Slider';

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