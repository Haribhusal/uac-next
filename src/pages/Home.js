import React from 'react'
import CategorySlider from '../components/CategorySlider'
import Featured from '../components/Featured'
import ImageSlider from '../components/ImageSlider'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div>
      <ImageSlider/>  
      <SearchBar/>
      <div className="spacer md:h-24 sm:h-0"></div>
     <div className="px-5 py-5">
     <CategorySlider/>
     <Featured type="business" title="Featured Businesses"/>
     <Featured type="product" title="Featured Products"/>
     <Featured type="post" title="Recent Posts"/>
     </div>
      
    </div>
  )
}

export default Home