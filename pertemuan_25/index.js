//Array

let nilai = [80, 90, 70, 60, 500];


for(let i=0; i<nilai.length; i++){
    console.log("Nilai = ", nilai[i] + 5);
}

console.log(nilai);
/*
nilai[3]=88;
console.log(nilai[nilai.length - 2]);
*/

let ramss = ["john","Lenon", 55, true];
console.log(ramss);

//toString
console.log(ramss.toString());

//join
console.log(ramss.join(" - "));

//pop()
ramss.pop();
console.log(ramss.join(" - "));

//push()
ramss.push(true);
ramss.push("Hello");
console.log(ramss.join(" - "));

//shift()
ramss.shift();
console.log(ramss.join(" - "));

//unshift()
ramss.unshift("john");
ramss.unshift("prof");
console.log(ramss.join(" - "));

//splice()
let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
buah.splice(2,0, "Lemon", "Kiwi");
console.log(buah);


//concat()
let sayur = ["bayam", "kangkung", "wortel"];
let biji = ["kedelai", "kacang"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//slice()
let cemilan = ["Kripik", "Kerupuk", "Ice cream", "Permen", "Coklat"];
let cemilanGurih = cemilan.slice(0, 2);
let cemilanManis = cemilan.slice(2);

console.log(cemilanGurih);
console.log(cemilanManis);

//sort()
let barang = ["kaca", "guci", "meja", "lemari"];

barang.sort();
console.log(barang); 

let bilangan = [30, 1, 2, 3.5, 10, 100];

let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil));
console.log(bilangan.sort(urutDariTerbesar));

//reverse()
let merk = ["Toyota","Honda","Yamaha","Suzuki"];
console.log(merk);

merk.reverse();
console.log(merk);