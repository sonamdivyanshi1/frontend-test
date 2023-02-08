//var count=0;
var num=0;

let products=[
    {
        name:"buiscuit",
        cost_price:12,
        selling_price:14,
        quantity:20,
        // count:count+quantity,
        num:num+1
    },
    {
        name:"bhujia",
        cost_price:12,
        selling_price:14,
        quantity:20,
        // count:count+quantity,
        num:num+1
    },
    {
        name:"water",
        cost_price:10,
        selling_price:15,
        quantity:15,
        // count:count+quantity,
        num:num+1
    },
    {
        name:"namkeen",
        cost_price:5,
        selling_price:8,
        quantity:5,
        // count:count+quantity,
        num:num+1
    },
    {
        name:"copy",
        cost_price:20,
        selling_price:25,
        quantity:5,
        // count:count+quantity,
        num:num+1
    }
]

function ShowAndHide() {
    let x = document.getElementById("investment");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function ShowAndHide1() {
    let x = document.getElementById("profit");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function ShowAndHide2() {
    let x = document.getElementById("employees");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function ShowAndHide3() {
    let x = document.getElementById("variety");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function addNew(){
    var obj={
        // count:count+quantity,
        name:document.getElementById("addName").value,
        cost_price:document.getElementById("addCp").value,
        selling_price:document.getElementById("addSp").value,
        quantity:document.getElementById("addNo").value,
        num:num+1
    };
    products.push(obj);
    return true;
}

function updateNumber(name,quantity){
    products["name"]["quantity"]=quantity;
}

function updatePrice(name,cp,sp){
    products["name"]["cost_price"]=cp;
    products["name"]["selling_price"]=sp;
}

// let element=document.getElementById("stock-button");
// //console.log(element);
// element.addEventListener("click",printC);

function printC(){
    var iterator = products.values();
    
    for (let elements of iterator) {
      console.log(elements.name);
    }
}