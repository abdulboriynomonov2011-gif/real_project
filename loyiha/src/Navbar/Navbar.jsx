import React from 'react'
import Rasm1 from "../Img/1.png"
import Rasm2 from "../Img/2.png"
import "./Navbar.css"
const Navbar = () => {
  return (
<div className="boshi">


    <div className='menu' >
<img className='rasm1' src={Rasm1} alt="" />


<div className="menu1">
<a className='matn1' href="##">Menu</a>
<a className='matn1' href="##">News</a>
<a className='matn1' href="##">About Us</a>
<a className='matn1' href="##">Contact Us</a>
<button className='tugma' > <a className='matn' href="">Log in</a> </button>
</div>
    </div>


<div className="boshqismi">

<div className="chap">

<h5>Chese The New Flavour</h5>
<h1>The  Key To <br /> Fine Dining</h1>

<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque rerum tempore sed quaerat odit officia voluptatem facere.</h6>

<button className='tugma1' >Explore Menu</button>

</div>



<div className="ong">

<img className='rasm2' src={Rasm2} alt="" />


{/* <i class="fa-solid fa-arrow-up-long i1 "></i> */}
<p className='p2' >|</p>
<p className='p1' >SCROLL</p>

</div>



</div>












</div>

  )
}

export default Navbar