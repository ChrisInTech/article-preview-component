const shareButton = document.getElementsByClassName('share_btn')[0]
const open = document.getElementById('open')
const closeIcon = document.getElementById('close')


const openIconBox = () =>{
    open.style.display = 'block'
    shareButton.style.backgroundColor = 'var(--GrayishBlue)'

}

const closeIconBox = () =>{
    open.style.display = 'none'
    shareButton.style.backgroundColor = 'var(--VeryDarkGrayishBlue)'
}

shareButton.addEventListener('click', openIconBox)
closeIcon.addEventListener('click', closeIconBox)




