//Jawaban nomor 1
const prompt = require('prompt-sync')({sigint: true});

let number;
const inputUser = prompt("Masukkan angka: ", number);

if (inputUser < 0 || isNaN(inputUser)) {
  console.log("Tidak bisa input bilangan negative atau bukan merupakan numerik");
} else if (inputUser % 2 == 0 ) {
    console.log(`Hasil program dari ${inputUser} akar pangkat 2 adalah : ` + Math.sqrt(inputUser))
} else {
    console.log("Tidak bisa input bilangan ganjil")
}