import React from 'react'
import CardBox from './CardBox'
import Products from './../config/products.json'
import Businesses from './../config/businesses.json'
import Posts from './../config/posts.json'


const Featured = ({ title, type }) => {
  return (
    <div className='container-sm md:container'>
      <h3 className="title my-5 flex justify-between">
        <div className="label text-2xl font-bold">
          {title}
        </div>
        <div className="action text-blue-700">
          Find all <i className="las la-arrow-right"></i>
        </div>
      </h3>
      <div className="items grid md:grid-cols-3 sm:grid-cols-1  gap-10">
      {type === 'business' &&
          Businesses.length > 0 ? Businesses.slice(0, 3).map((business) => (
            <CardBox key={business.id} type="business" data={business} />
          )) :
          // <NoProducts/>
          ""

        }
        {type === 'product' &&
          Products.length > 0 ? Products.slice(0,3).map((product) => (
            <CardBox key={product.id} type="product" data={product} />
          )) :
          // <NoProducts/>
          ""
        }
        {type === 'post' &&
          Posts.length > 0 ? Posts.slice(0,3).map((post) => (
            <CardBox key={post.id} type="post" data={post} />
          )) :
          // <NoProducts/>
          ""
        }

        
      </div>
    </div>
  )
}

export default Featured