/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global caja_trasera_register, registrate, iniciarsecion, windows*/
document.getElementById("btn__iniciar-registrarte").addEventListener("click", register);
document.getElementById("btn__iniciar-secion").addEventListener("click", iniciarSecion);

var contenedor_login_registre= document.querySelector(".contenedor__login-registre");
var formulario_login= document.querySelector(".formulario__login");
var formulario_registre= document.querySelector(".formulario__registre");
var caja_trasera_login= document.querySelector(".caja__trasera-login");
var caja__trasera_register= document.querySelector(".caja__trasera-register");


function register(){
   formulario_registre.style.display = "block";
   contenedor_login_registre.style.left = "410px";
   formulario_login.style.display = "none";
   caja_trasera_register.style.opacity = "0";
   caja_trasera_login.style.opacity = "1";  
}
function iniciarSecion(){
   formulario_registre.style.display = "none";
   contenedor_login_registre.style.left = "10px";
   formulario_login.style.display = "block";
   caja_trasera_register.style.opacity = "1";
   caja_trasera_login.style.opacity = "0";  
}  