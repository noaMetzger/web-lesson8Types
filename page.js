let str;
const f = new Object();
f.name = "cherry";
f.calories = 56;
f.price = 4;
f.toString = function () {
    str = "";
    for (const key in this) {
        if (typeof (this[key]) !== 'function')
            str += key + " " + this[key] + " ";
    }
    return str;
};

const arr = [{
    name: "apple",
    calories: 200,
    price: 45,
    toString: function () {
        str = "";
        for (const key in this) {
            if (typeof (this[key]) !== 'function')
                str += key + " " + this[key] + " ";
        }
        return str;
    }
},
{
    name: "banana",
    calories: 100,
    price: 12,
    toString: function () {
        str = "";
        for (const key in this) {
            if (typeof (this[key]) !== 'function')
                str += key + " " + this[key] + " ";
        }
        return str;
    }
}, f]

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index].toString());
}
arr[0].color = "red";
for (let index = 0; index < arr.length; index++) {
    if (arr[index].color)
        console.log(arr[index].toString());
}

str = "";
for (const key in arr[0]) {
    if (typeof (arr[0][key]) !== 'function')
        str += key + " " + arr[0][key] + " ";
}
console.log(str);

delete (arr[1].price)
document.getElementById("delete").innerHTML = arr[1].toString();

function savePrice() {
    arr[0].Price = document.getElementById("price").value;
    console.log(arr[0].toString());
}

function filterCal() {
    let cal = document.getElementById("calories").value;
    let filterArr = arr.filter(x => x.calories <= cal)
    console.log(filterArr);
}
for (let i = 0; i < arr.length; i++) {
    Object.defineProperty(arr[i], "Price", {
        get() {
            return arr[i].price
        },
        set(val) {
            if (val > 10 && val < 10000)
                arr[i].price = val
        }
    })
}

function MessageBox(colorText, colorBack, img, message = { title: "", body: "" }) {
    this.colorText = colorText;
    this.colorBack = colorBack;
    this.img = img;
    this.message = { ...message };
    this.render = function () {
        return `<div style="background-color:${this.colorBack};color:${this.colorText}; ">
        <h1>${this.message.title}</h1>
        <h5>${this.message.body}</h5>
        <img src=${this.img}>
        </div>`
    }

}

//let info=new MessageBox("black","green","img.jpg",{title:"info",body:"345"});
//let warning=new MessageBox("black","red","img.jpg",{title:"warning",body:"3445"});
//let error=new MessageBox("red","black","img.jpg",{title:"error",body:"0"});

//document.body.innerHTML += info.render()
//document.body.innerHTML += warning.render()
//document.body.innerHTML += error.render()

const message={
    info:new MessageBox("black","green","img.jpg",{title:"info",body:"345"}),
    warning:new MessageBox("black","red","img.jpg",{title:"warning",body:"3445"}),
    error:new MessageBox("red","black","img.jpg",{title:"error",body:"0"})
}
let m="info";
function saveMessage(e) {
    let x = e.target.value;
    m=x;
}

function sub() {
    let v = document.getElementById("title").value;
    let b = document.getElementById("body").value;
    message[m].message.title=v;
    message[m].message.body=b;
    document.getElementById("m").innerHTML = message[m].render()
}