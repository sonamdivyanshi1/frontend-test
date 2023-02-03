function ShowAndHide() {
    var x = document.getElementById('investment');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

var count=0;
var num=0;

var products=[
    "busicuits"= {
        cost_price:12,
        selling_price:14,
        quantity:20,
        count:count+quantity,
        num:num+1
    },
    "bhujia"={
        cost_price:12,
        selling_price:14,
        quantity:20,
        count:count+quantity,
        num:num+1
    },
    "water"={
        cost_price:10,
        selling_price:15,
        quantity:15,
        count:count+quantity,
        num:num+1
    },
    "namkeen"={
        cost_price:5,
        selling_price:8,
        quantity:5,
        count:count+quantity,
        num:num+1
    },
    "copy"={
        cost_price:20,
        selling_price:25,
        quantity:5,
        count:count+quantity,
        num:num+1
    }
]

function addNew(name,cp,sp,q){
    name={
        cost_price:cp,
        selling_price:sp,
        quantity:q,
        count:count+quantity,
        num:num+1
    };
    products.push(name);
}

