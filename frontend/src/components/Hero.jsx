import React from 'react'

function Hero({title, imageUrl}) {
  return (
    <div className='hero container'>
        <div className="banner">
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem excepturi blanditiis repellat dolorum deserunt 
                ratione corporis eius. Numquam sit ea, debitis ab atque similique 
                laboriosam tempore accusamus consequatur unde non?
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className='animated-image '/>
            <span>
                <img src="/Vector.png" alt="vector" />
            </span>
        </div>  
    </div>
  )
}

export default Hero