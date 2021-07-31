/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



const nombre = document.getElementById("name");
const paterno = document.getElementById("paterno");
const materno = document.getElementById("materno");
const email = document.getElementById("email");
const form = document.getElementById("form");
const peligro = document.getElementById("peligro");

form.addEventListener("submit", e=>{
    e.preventDefault();
    if(nombre.value.length <4){
        alert("Nombre muy corto");
    }
});


function contraseña(){
    var nombre=(document.getElementById("name").value);
    var paterno=(document.getElementById("paterno").value);
    var contra = nombre + paterno;
    Swal.fire({
    icon: 'success',
    title: 'Felicidades!',
    text: "Tu contraseña es: "+contra,
    footer: '<a href="inicio_secion.html">Quieres iniciar sesion?</a>'
    });
    }