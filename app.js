let start = document.querySelector("#start")
start.addEventListener("click", startGame);

let inputlis = document.getElementById("input1")
inputlis.oninput = function(){
    if (inputlis.value) {
        start.style.backgroundColor = '#0000ff'
        start.style.color = '#ffffff'
       
    }
}

const divEnt = document.getElementById('ent')
const divGame = document.getElementById('gam')
const divCont = document.querySelector('.container1')
const divText = document.querySelector('.text1')
const divText2 = document.querySelector('.text2')

function startGame (){
  
  divEnt.classList.add('hide')
  divGame.classList.remove('hide')
  divGame.classList.add('show')
  //divCont.style.background = '#000000'
  divText.innerHTML = inputlis.value
};
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + 2);
}

let toGo = document.querySelector('#butNo')
toGo.addEventListener('mouseenter', () => {
    toGo.style.left = `${getRandom(10, 80)}%`;
    toGo.style.top = `${getRandom(10, 80)}%`;
})

let butYes = document.querySelector('#butYes')
butYes.addEventListener('click', () =>{
    divText2.classList.remove('hide')
    divText2.classList.add('show')
    
})

let close = document.querySelector('#close')
close.addEventListener('click', () => {
//   divEnt.classList.remove('hide')
//   divGame.classList.remove('show')
//   divGame.classList.add('hide')
//   divCont.style.backgroundColor = 'aqua'
location.reload();
})


