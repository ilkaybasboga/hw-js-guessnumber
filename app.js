const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const center = document.querySelector(".center");
const guess = Math.round(Math.random() * 100);
const count=document.querySelector(".sayac")

console.log(guess);
let sayac = 10;
btn.addEventListener("click", () => {
  
  if (0<sayac ) {
    if (guess == input.value) {
      center.textContent=` 🎯TEBRİKLER BİLDİNİZ`

    } else if (guess < input.value) {
      center.textContent=`⬇️ Lütfen Tahmininizi Azaltın`

    } else if (guess > input.value) {
      center.textContent=`⬆️ Lütfen Tahmininizi Yükseltin`

    }
    sayac--;
    input.value = "";
    input.focus();
    count.textContent=`Kalan Hak:${sayac}/10`
   
  } if(sayac==0){
    count.textContent=`Hakkınız bitti`

  }

});

