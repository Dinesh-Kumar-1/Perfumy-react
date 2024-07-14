import one from "../assets/images/one.jpeg"
import two from "../assets/images/two.jpeg"
import three from "../assets/images/three.jpeg"

function Product()
{
  return(
    <div class="products">
        <div class="box">
            <img src={one}></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui consectetur culpa nostrum in deserunt? Reiciendis amet enim possimus eum.</p>
        </div>
        <div class="box">
            <img src={two}></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui consectetur culpa nostrum in deserunt? Reiciendis amet enim possimus eum.</p>
        </div>
        <div class="box">
            <img src={three}></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui consectetur culpa nostrum in deserunt? Reiciendis amet enim possimus eum.</p>    
        </div>
    </div>
  )
}

export default Product