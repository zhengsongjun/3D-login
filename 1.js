function $(node){
    return document.querySelector(node)
}
function $$(node){
    return document.querySelectorAll(node);
}

$('#register').onclick = function(){
    $('#filp').classList.remove('login')
    $('#filp').classList.add('register')
}

$('#login').onclick = function(){
    $('#filp').classList.remove('register');
    $('#filp').classList.add('login');
}

$('#headerIcon').onclick = function(){
    $$('.filp-modal')[0].classList.toggle('display')
    console.log($$('.icon-chahao'))
}

for(var i = 0 ; i < $$('.modal span').length ; i++){
    $$('.modal span')[i].onclick = function(){
        $$('.filp-modal')[0].classList.toggle('display')
    }    
}

