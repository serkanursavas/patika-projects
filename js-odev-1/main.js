let isim = prompt("Lütfen adınızı giriniz: ");

const badi = document.querySelector('body');
const logo = document.createElement('img');
const merhaba = document.createElement('div');
const tarihDiv = document.createElement('div');
const aciklama = document.createElement('div');
const container = document.createElement('div');


// ? BADİ
badi.style.backgroundColor = "#343A40";
badi.style.paddingTop = "120px"
badi.style.fontFamily = "Cambria, Cochin, Georgia, Times"
badi.style.letterSpacing = "7px"
badi.style.color = "#e98208"

// ? CONTAİNER
badi.prepend(container);
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.flexDirection = "column"
container.style.alignItems = "center";
container.style.textAlign = "center"
container.style.lineHeight = "1.5"

// ? LOGO
logo.src = "kodluyoruz.png"
logo.style.width = "17%"
container.prepend(logo);

// ? HOSGELDİN
merhaba.innerHTML = `Merhaba, <strong>${isim}</strong> Hoş Geldin !`;
merhaba.style.fontSize = "50px"
container.append(merhaba);

// ? TARİH
const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
tarihDiv.style.fontSize = "60px";
container.append(tarihDiv);
function test() {
    
    let tarih = new Date();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    let gun = tarih.getDay();
    tarihDiv.innerHTML = `Saat: ${saat}:${dakika}:${saniye} ${gunler[gun]}`;
}


// ? ACİKLAMA
aciklama.innerHTML = `tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın Javascript bölümü 1. Ödevindesiniz`
aciklama.style.fontSize = "40px";
aciklama.style.margin = "0 100px";
container.append(aciklama);

setInterval(test, 1000)






