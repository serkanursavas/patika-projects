const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


let dizi = menu.map(function (nesne) {
  return nesne.category
})

let kategori = [...new Set(dizi)]

const btnContainer = document.querySelector('.btn-container');
const row = document.querySelector('.row');



kategori.forEach((sehir) => {
  if(!btnContainer.firstChild){
    const btnDOM = document.createElement('button')
    btnDOM.innerHTML = "All"
    btnDOM.classList.add('btn-item')
    btnContainer.appendChild(btnDOM)
  }
  const btnDOM = document.createElement('button')
  btnDOM.innerHTML = sehir
  btnDOM.classList.add('btn-item')
  btnContainer.appendChild(btnDOM)
})


let allButton = document.querySelectorAll("button");
for (let index = 0; index < allButton.length; index++){
    allButton[index].addEventListener("click",
    function(){
        
      row.innerHTML = ""

      menu.forEach((nesne) =>{
        if (nesne.category === this.innerHTML) {
          fillContent(nesne)
        } else if(this.innerHTML === "All"){
          fillContent(nesne)
        }
      })

    });
}

function fillContent(nesne) {
  let item = document.createElement('div')
  item.classList.add('menu-items')
  let photo = document.createElement('img')
  photo.classList.add("photo")
  photo.src = nesne.img
  let menuInfo = document.createElement('div')
  menuInfo.classList.add('menu-info')
  let menuTitle = document.createElement('div')
  menuTitle.classList.add('menu-title')
  let menuText = document.createElement('div')
  menuText.classList.add('menu-text')
  menuText.innerHTML = nesne.desc
  let baslik = document.createElement('h4')
  baslik.innerHTML = nesne.title
  let fiyat = document.createElement('h4')
  fiyat.innerHTML = nesne.price

  row.appendChild(item)
  item.appendChild(photo)
  item.appendChild(menuInfo)
  menuInfo.appendChild(menuTitle)
  menuInfo.appendChild(menuText)
  menuTitle.appendChild(baslik)
  menuTitle.appendChild(fiyat)
}

menu.map(function (nesne) {
  fillContent(nesne)
})


  

