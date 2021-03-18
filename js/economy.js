function init(){
let par=document.getElementsByClassName('proect');
//par.innerHTML="ggwp";
console.log(par.innerHTML);
//par.setAttribute("class", "ggwp");
let parid=document.getElementById('proect');
parid.setAttribute("id","redteext");
let fet = document.getElementById('icon');
//fet.innerHTML="fet";
let alt = fet.getAttribute("class");
 console.log(alt);
}
window.onload=init;
document.querySelector('.range').value = 0;
