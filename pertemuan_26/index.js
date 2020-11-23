//Objek JavaScript

/*
const person = {
    name: "ramss",
    age: 20,
    job: "Programmer",
    isMarried: false,
    sayHello: function(){
        console.log("Hello World");
    },
};

person.age = 55;
person["address"] = "Bitung";

console.log(person);
console.log(person.job);
console.log(person["name"]);

person.sayHello();
*/

//JavaScript DOM

//getElementById
/*
let umur = document.getElementById("umur").value;
console.log(umur);

//getElementByTagName
let semuaTagH1 = document.getElementsByTagName("h1");
console.log(semuaTagH1);
console.log(semuaTagH1[0]); 
console.log(semuaTagH1[1]);

//getElementByClassName
let semuaClassHeader = document.getElementsByClassName("header");

console.log(semuaClassHeader); 
console.log(semuaClassHeader[0]);
console.log(semuaClassHeader[1]);

//querySelectorAll
let h1ClassHeader = document.querySelectorAll('h1.header');

console.log(h1ClassHeader); 
console.log(h1ClassHeader[0]); 

let idHeader2 = document.querySelectorAll('#header2');

console.log(idHeader2);
console.log(idHeader2[0]); 
*/

//DOM Event
/*
let demo = document.getElementById("demo");
demo.onclick = showMessage;

function showMessage(){
    alert("Hello World!");
}
*/

let demo = document.getElementById("test");
console.log(demo.innerText);

demo.innerHTML = "Hai Dunia!";
console.log(demo.innerHTML);

//element.attribute
let pubgImage = document.getElementById("pubg-image");
console.log(pubgImage.src); 
console.log(pubgImage.alt);
/*
pubgImage.src = "https://ivpl.co.id/app/uploads/2020/01/MLBB.jpg";
pubgImage.alt = "mobile legends";
pubgImage.width = "400";

console.log(pubgImage.src); 
console.log(pubgImage.alt); 
console.log(pubgImage.width);
*/

pubgImage.setAttribute("src", "https://ivpl.co.id/app/uploads/2020/01/MLBB.jpg");
pubgImage.setAttribute("alt","mobile legends");
pubgImage.setAttribute("width","400");

console.log(pubgImage.src); 
console.log(pubgImage.alt); 
console.log(pubgImage.width);

//element.style.property
let head = document.getElementById("title");

head.style.color = "red";
head.style.fontSize = "3rem";

console.log(head.style.color);
console.log(head.style.fontSize);