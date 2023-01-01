let cl= console.log;

/////********/ EXAMPLE 1) stored object /***********///////
const box = document.getElementById("box");
const box2 = document.getElementById("box2");
let angularImg = `https://tse4.mm.bing.net/th?id=OIP.Z1kTwxbPVmPeN4F6BqcoUQHaDt&pid=Api&P=0`
let javascript = `https://cdnp3.stackassets.com/5ca51180bc5796c3c82beefdebf860d72aa30b93/store/opt/596/298/0aac848cc80af641496db56a5b80f7d25e3722720e089125e84b2fbd5192/product_28192_product_shot_wide.jpg`
const mainSkill = document.getElementById("mainSkill");


/////********/ Example 1) style apply /***********///////

const onMouseEnter = (eve) => {
    eve.target.style.backgroundColor = "red";
    eve.target.style.borderRadius ="50%";
    eve.target.style.padding ="30%";
    eve.target.style.outline = "5px solid blue";
}

const onMouseOut =  (eve) => {
    eve.target.style.backgroundColor = "green";
    eve.target.style.borderRadius = "0%";
    eve.target.style.padding ="0%";
    eve.target.style.outline = "8px dotted green";
}

const onmouseenter = (eve) =>{
   eve.target.setAttribute('src', javascript);
}
const onmouseouter = (eve) => {
    eve.target.setAttribute('src',angularImg);
}

const onmousemove = (eve) =>{
    cl(`mouse is moving`, eve);
    cl(eve.clientX);
    cl(eve.clientY);
    cl(eve.screenX);
    cl(eve.screenY);
    cl(eve.offsetX, "offset");
    // eve.target.style.backgroundColor = `rgb(0,0,0)`;
    eve.target.style.backgroundColor = `rgb(255, ${eve.offsetX},${eve.offsetY})`
}

/////********/ EXAMPLE 1) event /***********///////

box.addEventListener("mouseenter", onMouseEnter);
box.addEventListener("mouseout", onMouseOut);

mainSkill.addEventListener("mouseenter", onmouseenter);
mainSkill.addEventListener("mouseout", onmouseouter);

box2.addEventListener("mousemove", onmousemove);



/////********/ EXAMPLE 2) stored object /***********///////

const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const infosis = document.getElementById("infosis");

/////********/ Example 2) style apply /***********///////

const mouseine11 = (eve) =>{
    eve.target.style.backgroundColor ="pink";
    eve.target.style.padding = '30%';
    eve.target.style.outline = "10px solid red";
}
const onmous12 = (eve) =>{
    eve.target.style.backgroundColor = `rgb(255, ${eve.offsetX}, ${eve.offsetY})`
    eve.target.style.outline = "40px dotted black";
}
 const onmous13 = (eve) => {
    eve.target.style.backgroundColor = "yellow";
    eve.target.style.padding = "30px";
 }

 const onenter4 = (eve) =>{
    eve.target.style.backgroundColor = `rgb(255, ${eve.clientX}, ${eve.clientY})`;
    eve.target.style.outline = "40px solid black";
     eve.target.style.color= "purple" 
 }
const onenter42 = (eve) => {
    eve.target.style.backgroundColor = `rgb(255, ${eve.offsetX}, ${eve.offsetY})`;
    eve.target.style.outline = "5px dotted green";
    // eve.target.style.backgroundColor = 
}
 let imgs = `https://i.pinimg.com/originals/d1/9e/fa/d19efad6a24d2d49afaa9dcf960a3694.jpg`
 let  ang1 = `https://tse1.mm.bing.net/th?id=OIP.4k0WyXHcu4feWCmQYV5RFwHaD4&pid=Api&P=0`

 const onimgeneter = (eve) => {
    eve.target.setAttribute("src", imgs);
    eve.target.style.outline = "15px solid red";
}

const onimgeneter12 = (eve) => {
    eve.target.setAttribute("src", ang1 );
    eve.target.style.outline = "15px solid black";
}

/////********/ EXAMPLE 3) event /***********///////

box3.addEventListener("mouseenter", mouseine11);
box3.addEventListener("mousemove", onmous12);
box3.addEventListener("mouseout", onmous13);

box4.addEventListener("mouseenter", onenter4);
box4.addEventListener("mouseout", onenter42);

infosis.addEventListener("mouseenter", onimgeneter)
infosis.addEventListener("mouseout", onimgeneter12)



