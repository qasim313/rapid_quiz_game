// const operators = {
//     0:'+',
//     1:'-',
//     2:'*',
//     3:'/'
// }

let redScore=0;
let blueScore =0;

const questionDiv = document.querySelector("#question")


let getQuesion =  ()=>{

    let num1 = Math.ceil (Math.random()*201);
    let num2 = Math.ceil (Math.random()*201);
    let num3 = Math.ceil (Math.random()*201);

    let statement;

    let result;
    let check = Math.ceil (Math.random()*9);
    let optionCheck =  Math.ceil (Math.random()*3);
    let optList = document.createElement('ul');
    

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


    // if ( optionCheck == 0 ) {
    //     li1.textContent = result;
    //     li2.textContent = result - 10 + Math.ceil (Math.random()*result/2) ;
    //     li3.textContent = result - Math.ceil (Math.random()*30)+1;
       
    // } else if ( optionCheck == 1 ) {
    //     li2.textContent = result;
    //     li1.textContent = result - 10 + Math.ceil (Math.random()*result/2) ;
    //     li3.textContent = result - Math.ceil (Math.random()*30)+1;
      
    // } else {
    //     li3.textContent = result;
    //     li2.textContent = result - 10 + Math.ceil (Math.random()*result/2) ;
    //     li1.textContent= result - Math.ceil (Math.random()*30)+1;

    // }
    
    // optList.appendChild(li1);
    // optList.appendChild(li2);
    // optList.appendChild(li3);

    questionDiv.innerHTML=statement;
    // p1.appendChild(optList)



}


