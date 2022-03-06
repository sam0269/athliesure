import React from 'react'
import '../style.css';


const Shoes = () => {
  // console.log(Shoe_list);

  return (
      <>
        <div id="shoe-collection" style={{marginTop:"6rem"}}>
            <div className="shoe-item">
              <img src="gallery/shoe1.png" alt="shoe1" />
              
              <img src="gallery/shoe2.png" alt="shoe1" />

              <img src="gallery/shoe3.png" alt="shoe1" />

              <img src="gallery/shoe4.png" alt="shoe1" />

              <img src="gallery/shoe5.png" alt="shoe1" />

              <img src="gallery/shoe6.png" alt="shoe1" />
              
              <img src="gallery/shoe7.png" alt="shoe1" />
              
              <img src="gallery/shoe8.png" alt="shoe1" />
            </div>
        </div>
      </>
  )
}

export default Shoes;