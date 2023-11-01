// Loging something to the conssole
console.log('Beats Official Octa pad');

// Grab all the elements for setting each element as per requirement
let items = document.getElementsByClassName('items');
let track1 = document.getElementById('track1')
let track2 = document.getElementById('track2')
let track3 = document.getElementById('track3')
let track4 = document.getElementById('track4')
let track5 = document.getElementById('track5')
let track6 = document.getElementById('track6')
let track7 = document.getElementById('track7')
let track8 = document.getElementById('track8')
let track9 = document.getElementById('track9')
let track10 = document.getElementById('track10')
let track11 = document.getElementById('track11')
let track12 = document.getElementById('track12')

// let audio = new Audio('aud.wav')

// Adding event Listeners for Each of those elements
track1.addEventListener('click',()=>{
    let track = new Audio('./audio/au.wav')
    track.play()
})
track2.addEventListener('click',()=>{
    let track1 = new Audio('./audio/chamcham.wav')
    track1.play()
})
track3.addEventListener('click',()=>{
    let track1 = new Audio('./audio/musictabla.wav')
    track1.play()
})
track4.addEventListener('click',()=>{
    let track1 = new Audio('./audio/dhank.wav')
    track1.play()
})
track5.addEventListener('click',()=>{
    let track1 = new Audio('./audio/dhik.wav')
    track1.play()
})
track6.addEventListener('click',()=>{
    let track1 = new Audio('./audio/tabla.wav')
    track1.play()
})
track7.addEventListener('click',()=>{
    let track1 = new Audio('./audio/tabla 2.wav')
    track1.play()
})
track8.addEventListener('click',()=>{
    let track1 = new Audio('./audio/tabla tak.wav')
    track1.play()
})
track9.addEventListener('click',()=>{
    let track1 = new Audio('./audio/tak.wav')
    track1.play()
})
track10.addEventListener('click',()=>{
    let track1 = new Audio('./audio/tan.wav')
    track1.play()
})
track11.addEventListener('click',()=>{
    let track1 = new Audio('./audio/thak.wav')
    track1.play()
})
track12.addEventListener('click',()=>{
    let track1 = new Audio('./audio/dham.wav')
    track1.play()
})

// Getting signup and Login Buttons
let signup = document.getElementById('signUp');
let login = document.getElementById('login');

// Adding them EventListeners and take them functions which contain event code
signup.addEventListener('click',signupuser);
login.addEventListener('click',loginuser);

// Creating functions which are placed in our EventListeners
function signupuser(e)
{
    // console.log('Clicked on sign up');
    window.location.href = "signup.html";
    e.preventDefault()
}
function loginuser(e)
{
    // console.log('Clicked On Login');
    window.location.href = "login.html"
    e.preventDefault()
}