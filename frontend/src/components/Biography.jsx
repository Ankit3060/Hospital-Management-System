import React from 'react'

function Biography({imageUrl}) {
  return (
    <div className='container biography'>
        <div className="banner">
            <img src={imageUrl} alt="about" />
        </div>
        <div className="banner">
            <p>Biography</p>
            <h3>Who We Are</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ea asperiores ipsam fuga provident facere aut neque quibusdam, 
                ex saepe alias suscipit explicabo quam consectetur dolores optio 
                id facilis voluptatum maxime. Debitis placeat eos blanditiis ut 
                sunt quae, laboriosam quas itaque consectetur at, inventore, minus 
                molestiae temporibus maiores! Quis, ut voluptatem?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dicta non quasi molestiae deserunt facere perspiciatis dignissimos 
                quisquam porro mollitia fugiat labore aliquam laudantium hic enim numquam, 
                temporibus nostrum maiores, doloribus reiciendis animi cumque exercitationem soluta!
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat explicabo reprehenderit maiores.
            </p>
            <p>
                Lorem, ipsum dolor.
            </p>
        </div>

    </div>
  )
}

export default Biography