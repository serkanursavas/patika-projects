const inputDOM = document.querySelector('#task')
const ulDOM = document.querySelector('#list')

const ekleBtn = document.querySelector('#liveToastBtn')
const toastDOM = document.querySelector('#liveToast')
const toastRecejtDOM = document.querySelector('#liveToastReject')
let option = 
{
    animation: true,
    delay: 4000
}

window.sr = ScrollReveal();

const alphabet = /^\s*$/;

let dizi = []

if (localStorage.getItem("testDizi") != null) {
    dizi = JSON.parse(localStorage.getItem("testDizi"))
}

ekleBtn.addEventListener('click', () => {

    if (inputDOM.value && !inputDOM.value.match(alphabet)) {
        addItem(inputDOM.value)
        inputDOM.value = ""
        const toast = new bootstrap.Toast(toastDOM, option)
        toast.show()
    } else {
        const toast = new bootstrap.Toast(toastRecejtDOM, option)
        toast.show()
        inputDOM.value = ""
    }

})


// * Add Function
function addItem(todo) {
    // let liDOM = document.createElement('li')
    // liDOM.innerHTML = `${todo} <div class="close">
    // <button class="btn-close"></button>
    // </div>`
    // ulDOM.appendChild(liDOM)
    let nesne = {task: todo, isFinished: false}
    dizi.push(nesne)
    localStorage.setItem("testDizi", JSON.stringify(dizi))
    showItem()
    checkItem()
    deleteItem()
    
}

// * Delete Function
function deleteItem() {
    let allLis = document.querySelectorAll("li");
    for (let index = 0; index < allLis.length; index++){
        allLis[index].querySelector("button").addEventListener("click",
        function(){
            this.closest("li").remove();
            let silinecekEleman = dizi.indexOf(this)
            dizi.splice(silinecekEleman, 1)
            localStorage.setItem("testDizi", JSON.stringify(dizi))
        });
    }
}


// * Li Checking Fucntion
function checkItem() {
    let allLis = document.querySelectorAll("li");
    for (let index = 0; index < allLis.length; index++){
        allLis[index].addEventListener("click",
        function(){
            this.closest("li").classList.toggle('checked')
            if (this.closest("li").classList.contains("checked")) {
                dizi[index].isFinished = true
                
            } else {
                dizi[index].isFinished = false
            }
            localStorage.setItem("testDizi", JSON.stringify(dizi))
        });
        
    }
    
}

// * Show Function
function showItem() {

    ulDOM.innerHTML = ""

    for (let index = 0; index < dizi.length; index++) {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = `${dizi[index].task} <div class="close">
        <button class="btn-close"></button>
        </div>`
        if (dizi[index].isFinished) {
            liDOM.classList.add('checked')
        }
        ulDOM.appendChild(liDOM);
        
    }
    
}

showItem()
checkItem()
deleteItem()



inputDOM.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        document.getElementById("liveToastBtn").click()
    }
})



sr.reveal(ulDOM, {
    duration: 2000,
    origin: "bottom",
    distance: "200px",
});

sr.reveal(".header", {
    duration: 2000,
    origin: "top",
    distance: "200px",
});
