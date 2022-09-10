const openBox = document.getElementsByClassName('share_btn')[0]
const open = document.getElementById('open')
const closeBox = document.getElementById('close')
const triangle = document.getElementById('triangle')

const openIconBox = () =>{
    open.style.display = 'block'

}

const closeIconBox = () =>{
    open.style.display = 'none'
}

openBox.addEventListener('click', openIconBox)
closeBox.addEventListener('click', closeIconBox)




