// const operators = {
//     0:'+',
//     1:'-',
//     2:'*',
//     3:'/'
// }

let redScore=0;
let blueScore =0;

const questionDiv = document.querySelector("#question")
const opt1 = document.querySelectorAll('.opt1');
const opt2 = document.querySelectorAll('.opt2');
const opt3 = document.querySelectorAll('.opt3');
let gameDiv = document.querySelector(".container");
const startbtn = document.getElementById("start-btn"); 
let result;

let getQuestion =  ()=>{

    let num1 = Math.ceil (Math.random()*201);
    let num2 = Math.ceil (Math.random()*201);
    let num3 = Math.ceil (Math.random()*201);

    let statement;

   
    let check = Math.ceil (Math.random()*9);
    let optionCheck =  Math.ceil (Math.random()*3);
    
    

    if (check == 0 ) {
        result = num1+num2+num3;
        statement = `${num1} + ${num2} + ${num3}`; 
    } else if ( check == 1 ) {
        result = num1-num2-num3;
        statement = `${num1} - ${num2} - ${num3}`;
    } else if ( check == 2 ) {
        result = num1*num2*num3;
        statement = `${num1} * ${num2} * ${num3}`;
    } else if ( check == 3) {
        result = num1*num2+num3;
        statement = `${num1} * ${num2} + ${num3}`;
    } else if ( check == 4) {
        result = (num1+num2)*num3;

        statement = `${num1} + ${num2} * ${num3}`;
    } else if (check == 5) {
        result = num1*num2-num3;

        statement = `${num1} * ${num2} - ${num3}`;
    } else if ( check == 6) {
        result = (num1-num2)*num3;

        statement = `${num1} - ${num2} * ${num3}`;
    } else if ( check == 7 ) {
        result = num1-num2+num3;

        statement = `${num1} - ${num2} + ${num3}`;
    } else {
        result = num1+num2-num3;

        statement = `${num1} + ${num2} - ${num3}`;
    }


    if ( optionCheck == 0 ) {
       opt1[0].textContent = result;
       opt2[0].textContent = result - 10 + Math.ceil (Math.random()*result/2) ;
        opt3[0].textContent = result - Math.ceil (Math.random()*30)+1;

        opt1[1].textContent = result;
       opt2[1].textContent = result - 10 + Math.ceil (Math.random()*result/2) ;
        opt3[1].textContent = result - Math.ceil (Math.random()*30)+1;
       
    } else if ( optionCheck == 1 ) {
        opt2[0].textContent = result;
        opt1[0].textContent = result - 10 + Math.ceil (Math.random()*result/2) ;
        opt3[0].textContent = result - Math.ceil (Math.random()*30)+1;

        opt2[1].textContent = result;
        opt1[1].textContent = result - 10 + Math.ceil (Math.random()*result/2) ;
        opt3[1].textContent = result - Math.ceil (Math.random()*30)+1;
      
    } else {
        opt3[0].textContent = result;
        opt2[0].textContent = result - 10 + Math.ceil (Math.random()*result/2) ;
        opt1[0].textContent= result - Math.ceil (Math.random()*30)+1;

        opt3[1].textContent = result;
        opt2[1].textContent = result - 10 + Math.ceil (Math.random()*result/2) ;
        opt1[1].textContent= result - Math.ceil (Math.random()*30)+1;

    }
    
    questionDiv.innerHTML=statement;
   
}

const checkAnswer = ( player , btn )=>{

    if ( player === 'red' && btn.textContent ==  result) {
        redScore++;
    } else if ( player === 'blue' && btn.textContent ==  result) {
        blueScore++;
    }

    console.log(redScore ,  blueScore )

   
    getQuestion();

}


startbtn.addEventListener('click', ()=>{
    gameDiv.style.display = 'block';
    getQuestion();
})
