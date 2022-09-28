const inputValue = document.querySelector("#inputValue");
const btnValue = document.querySelector("#btnValue");
const imgQrCode = document.querySelector("imgQrCode");
const wrapper = document.querySelector(".wrapper");
let valueDefault;
//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 

btnValue.addEventListener("click", ()=>{
  let qrcodeValue = inputValue.valeu.trim();
  if(!qrcodeValue || qrcodeValue === valueDefault) return;
  valueDefault = qrcodeValue;
  btnValue.innerText = "Gerando QR Code...";
})