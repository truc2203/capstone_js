document.getElementById('btnShowCart').addEventListener('click',()=>{
    document.getElementById('show-slidebar').style.right = '0'
    document.getElementById('show-slidebar').style.transition = 'all 0.5s'
    document.querySelector('.cover').style.visibility = 'visible'
    document.querySelector('.cover').style.background = '#000000bf'
})