import React from 'react'
import "./Card.css"
import Rasm1 from "../Img/3.png"
import Rasm2 from "../Img/4.png"
import Rasm3 from "../Img/5.png"
import Rasm4 from "../Img/6.png"




const Card = () => {
  return (
    <div className='ota_card' >
      <div className="card_menu">
        <h1>Popular Dishes</h1>


        <div className="tugmalar">

          <button className='tugma2' > <i class="fa-solid fa-angle-left"></i> </button>
          <button className='tugma3' ><i class="fa-solid fa-chevron-right"></i> </button>

        </div>

      </div>

      <div className="card">

        <div className="box">

          <img className='rasm' src={Rasm1} alt="" />
          <center>

            <p>Barbecue Shish kebab Shashlik Skewer</p>
          </center>

          <div className="icon">

            <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i3 "></i>
          </div>

          <h4>$12.00</h4>


        </div>


        <div className="box">

          <img className='rasm' src={Rasm2} alt="" />
          <center>

            <p>Barbecue Shish kebab Shashlik Skewer</p>
          </center>

          <div className="icon">

            <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i3 "></i>
          </div>

          <h4>$12.00</h4>


        </div>




        <div className="box">

          <img className='rasm' src={Rasm3} alt="" />
          <center>

            <p>Barbecue Shish kebab Shashlik Skewer</p>
          </center>

          <div className="icon">

            <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i3 "></i>
          </div>

          <h4>$12.00</h4>


        </div>




        <div className="box">

          <img className='rasm' src={Rasm4} alt="" />
          <center>

            <p>Barbecue Shish kebab Shashlik Skewer</p>
          </center>

          <div className="icon">

            <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i2 "></i>  <i class="fa-regular fa-star  i3 "></i>
          </div>

          <h4>$12.00</h4>


        </div>



      </div>






    </div>
  )
}

export default Card
