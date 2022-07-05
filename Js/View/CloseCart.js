document.getElementById('btnCloseCart').addEventListener('click',()=>{
    document.getElementById('show-slidebar').style.right = '-100%'
    document.getElementById('show-slidebar').style.transition = 'all 0.5s'
    document.querySelector('.cover').style.visibility = 'hidden'
    document.querySelector('.cover').style.background = 'transparent'
})