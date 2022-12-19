import React from 'react'

const CardBox = ({ type, data }) => {
    return (
        <article className='mb-5'>
            <figure>
                {type==='product' &&
                <img src={data.product_image} className='max-w-full h-auto rounded' alt="" />
                }
                {type==='business' &&
                <img src={data.business_cover_image} className='max-w-full h-auto rounded' alt="" />
                }
                {type==='post' &&
                <img src={data.post_image} className='max-w-full h-auto rounded' alt="" />
                }
                
                
            </figure>
            <div className="info mt-3">
                <h3 className="title font-bold text-[20px]">
                    {type === 'product' ? data.product_title : ''}
                    {type === 'business' ? data.business_name : ''}
                    {type === 'post' ? data.post_title : ''}
                </h3>
                <h6 className="subtitle text-slate-500 text-base">
                    {type === 'product' &&
                        <div className="items flex gap-3 mt-2">
                            <div className="item">
                                <i className="las la-wallet"></i> {data.product_price}
                            </div>
                            <div className="item">
                                <i className="las la-tag"></i> {data.product_category}
                            </div>
                        </div>
                    }
                    {type === 'business' &&
                        <div className="items flex flex-col gap-3 mt-2">
                            <div className="item">
                                <i className="las la-map"></i> {data.business_address}
                            </div>
                            <div className="item">
                                <i className="las la-tag"></i> {data.business_category}
                            </div>
                        </div>
                    }
                    {type === 'post' &&
                        <div className="items flex gap-3 mt-2">
                            <div className="item">
                                <i className="las la-calendar"></i> {data.post_date}
                            </div>
                            <div className="item">
                                <i className="las la-tag"></i> {data.post_category}
                            </div>
                        </div>
                    }
                </h6>

                {type === 'business' &&
                <>
                    <p className="text text-base text-slate-700 mt-3">
                        {data.business_detail}
                    </p>
                     <div className="buttons mt-5">
                     <button className='bg-blue-100 px-5 py-3 rounded font-bold text-blue-700'>  Read More <i className="las la-arrow-right ml-2"></i> </button>
                 </div>
                </>
                }
                {type === 'product' &&

                    <div className="buttons mt-5">
                        <button className='bg-blue-100 px-5 py-3 rounded font-bold text-blue-700'> <i className="las la-shopping-cart mr-2"></i> Add to Cart </button>
                    </div>
                }
                {type === 'post' &&
                <>
                    <p className="text text-base text-slate-700 mt-3">
                        {data.post_detail}
                    </p>
                     <div className="buttons mt-5">
                     <button className='bg-blue-100 px-5 py-3 rounded font-bold text-blue-700'>  Read More <i className="las la-arrow-right ml-2"></i> </button>
                 </div>
                </>
                }
            </div>
        </article>
    )
}

export default CardBox