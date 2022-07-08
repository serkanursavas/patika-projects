const inputDOM = document.querySelector('#task')
const ulDOM = document.querySelector('#list')

const ekleBtn = document.querySelector('#liveToastBtn')
const toastDOM = document.querySelector('#liveToast')
const toastRecejtDOM = document.querySelector('#liveToastReject')
let option = 
{
    animation: true,
    delay: 3000
}



ekleBtn.addEventListener('click', () => {

    if (inputDOM.value) {
        addItem(inputDOM.value)
        inputDOM.value = ""
        const toast = new bootstrap.Toast(toastDOM, option)
        toast.show()
    } else {
        console.log("else basarili")
        const toast = new bootstrap.Toast(toastRecejtDOM, option)
        toast.show()
    }

})


function addItem(todo) {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = todo
    ulDOM.appendChild(liDOM)
}