
let redScore=0;
let blueScore =0;
let num_of_rounds=0;

const questionDiv = document.querySelector("#question")
const opt1 = document.querySelectorAll('.opt1');
const opt2 = document.querySelectorAll('.opt2');
const opt3 = document.querySelectorAll('.opt3');
const opt4 = document.querySelectorAll('.opt4');
const gameDiv = document.querySelector(".container");
const startbtn = document.getElementById("start-btn"); 
const reset = document.getElementById('restart')
const resultDiv = document.querySelector('#res');
const rS = document.getElementById('redScore');
const bS = document.getElementById('blueScore');
const redRes = document.querySelector('#redR');
const blueRes = document.querySelector('#blueR');
const announce = document.querySelector('#announcment')
let result;

let getQuestion =  ()=>{
    questionDiv.style.display = 'block';
    startbtn.style.display = 'block';
    num_of_rounds++;
    let statement;

   
    let check = Math.ceil (Math.random()*9);
    let optionCheck =  Math.ceil (Math.random()*4);
    

    if (check == 9 ) {
        let num1 = Math.ceil (Math.random()*501);
        let num2 = Math.ceil (Math.random()*201);
        let num3 = Math.ceil (Math.random()*1000);

        result = num1+num2+num3;
        statement = `${num1} + ${num2} + ${num3}`; 
    } else if ( check == 1 ) {

        let num1 = Math.ceil (Math.random()*501);
        let num2 = Math.ceil (Math.random()*201);
        let num3 = Math.ceil (Math.random()*1000);
        result = num1-num2-num3;
        statement = `${num1} - ${num2} - ${num3}`;
    } else if ( check == 2 ) {
        let num1 = Math.ceil (Math.random()*21);
        let num2 = Math.ceil (Math.random()*31);
        let num3 = Math.ceil (Math.random()*11);
        result = num1*num2*num3;
        statement = `${num1} * ${num2} * ${num3}`;
    } else if ( check == 3) {
        let num1 = Math.ceil (Math.random()*21);
        let num2 = Math.ceil (Math.random()*11);
        let num3 = Math.ceil (Math.random()*1000);
        result = num1*num2+num3;
        statement = `${num1} * ${num2} + ${num3}`;
    } else if ( check == 4) {

        let num1 = Math.ceil (Math.random()*11);
        let num2 = Math.ceil (Math.random()*11);
        let num3 = Math.ceil (Math.random()*16);
        result = (num1+num2)*num3;

        statement = `${num1} + ${num2} * ${num3}`;
    } else if (check == 5) {
        let num1 = Math.ceil (Math.random()*11);
        let num2 = Math.ceil (Math.random()*16);
        let num3 = Math.ceil (Math.random()*1000);
        result = num1*num2-num3;

        statement = `${num1} * ${num2} - ${num3}`;
    } else if ( check == 6) {
        let num1 = Math.ceil (Math.random()*31);
        let num2 = Math.ceil (Math.random()*31);
        let num3 = Math.ceil (Math.random()*11);
        result = (num1-num2)*num3;

        statement = `${num1} - ${num2} * ${num3}`;
    } else if ( check == 7 ) {
        let num1 = Math.ceil (Math.random()*501);
        let num2 = Math.ceil (Math.random()*201);
        let num3 = Math.ceil (Math.random()*1000);
        result = num1-num2+num3;

        statement = `${num1} - ${num2} + ${num3}`;
    } else if (check == 8) {
        let num1 = Math.ceil (Math.random()*501);
        let num2 = Math.ceil (Math.random()*201);
        let num3 = Math.ceil (Math.random()*1000);
        result = num1+num2-num3;

        statement = `${num1} + ${num2} - ${num3}`;
    }

    let option1 = (result - 10) + Math.ceil (Math.random()*result/2)+1;
   
    let option2 =result - Math.ceil (Math.random()*30)+ Math.ceil (Math.random()*10)+1 ;
    let option3 = result - 100 * Math.ceil (Math.random()*3) + Math.ceil (Math.random()*30) ;

    if ( optionCheck == 1 ) {
       opt1[0].textContent = result;
       opt2[0].textContent =  option1;
        opt3[0].textContent = option2;
        opt4[0].textContent = option3;

        opt1[1].textContent = result;
       opt2[1].textContent =  option1;
        opt3[1].textContent = option2;
        opt4[1].textContent = option3;
       
    } else if ( optionCheck == 3 ) {
       
        opt3[0].textContent = option3;
        opt2[0].textContent = option1;
        opt1[0].textContent= option3;
        opt4[0].textContent = result;

        opt3[1].textContent = option3;
        opt2[1].textContent = option1 ;
        opt1[1].textContent= option3;
        opt4[1].textContent = result;

      
    } else if (optionCheck == 3){
        opt3[0].textContent = result;
        opt2[0].textContent = option1;
        opt1[0].textContent= option3;
        opt4[0].textContent = option2;

        opt3[1].textContent = result;
        opt2[1].textContent = option1 ;
        opt1[1].textContent= option3;
        opt4[1].textContent = option2;

    } else {
        opt2[0].textContent = result;
        opt1[0].textContent =option3;
        opt3[0].textContent = option2;
        opt4[0].textContent = option1;

        opt2[1].textContent = result;
        opt1[1].textContent = option3;
        opt3[1].textContent = option2;
        opt4[1].textContent = option1;
       
    }
    
    questionDiv.innerHTML=statement;
   
}

const announceResult = ( win )=> {
    announce.textContent = win;
    redRes.textContent = redScore;
    blueRes.textContent = blueScore;
    gameDiv.style.display = 'none';
    questionDiv.style.display = 'none';
    startbtn.style.display = 'none';
    resultDiv.style.display = 'flex';
}
const clrColor = ( btn ) => {
 return new Promise ( ( resolve , reject )=>{
     setTimeout(()=>{
        btn.style.background = 'white';
        resolve('sucess');
    } , 500);
 }


 );
}


const checkAnswer = async( player , btn )=>{
    if ( btn.textContent ==  result ) {
        btn.style.background = 'green';
    } else {
        btn.style.background = 'red';
    }
    if ( player === 'red' && btn.textContent ==  result) {
        redScore++;
    } else if ( player === 'blue' && btn.textContent ==  result) {
        blueScore++;
    } 
    // clrColor(btn);
    rS.textContent = redScore;
    bS.textContent = blueScore;
    if (num_of_rounds >= 5 ) {
        if (redScore > blueScore+1 ) {
            announceResult ("Red Player Wins");
        } else if (redScore+1 < blueScore) {
            announceResult ("Blue Player Wins");
        } else {
            
            clrColor(btn).then( ()=>{
                getQuestion();
            })
        }
    } else {
        clrColor(btn).then( ()=>{
            getQuestion();
        })
    }
    
}


startbtn.addEventListener('click', ()=>{
    if ( num_of_rounds > 0 ) {
        if (redScore > blueScore) {
            announceResult("Red Player Wins");
        } else if ( redScore < blueScore ) {
            announceResult("Blue Player Wins");
        } else {
            announceResult("Match Is Draw");
        }
    } else {
        gameDiv.style.display = 'block';
        startbtn.textContent = "Stop Game";
        getQuestion();
    }
})
reset.addEventListener('click' , ()=>{
    num_of_rounds = 0;
    blueScore = 0 ;
    redScore = 0;
    rS.textContent = redScore;
    bS.textContent = blueScore;
    resultDiv.style.display = 'none';
    gameDiv.style.display = 'inline-block';
    getQuestion();
});