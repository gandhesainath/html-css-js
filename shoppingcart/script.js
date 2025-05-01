const cd = document.querySelector(".products")
const products =[
    {
        name:"Latte",
        image:"./1.PNG",
        price:100
    },
    {
        name:"Cappucinno",
        image:"./2.PNG",
        price:120
    },
    {
        name:"Sandwitch",
        image:"./3.PNG",
        price:80
    },
    {
        name:"Novelty",
        image:"./4.PNG",
        price:90
    },
    {
        name:"Soy Milk",
        image:"./5.PNG",
        price:75
    },
    {
        name:"Cocoa Blocks",
        image:"./6.PNG",
        price:145
    }
]
function add(){
    products.forEach((Element)=>{
        const getName = Element.name;
        const getImage = Element.image;
        const getPrice = Element.price;
        const item = document.createElement("div")
        item.classList.add("product")
        item.innerHTML=`<img src="${getImage}">
        <div class="info">
        <h4>${getName}</h4>
        <div class="price">
        <h4>&#8377<span>${getPrice}</span></h4>
        <button class="add">add</button>
        </div>
        </div>`
        cd.append(item);
        });
};
add()
