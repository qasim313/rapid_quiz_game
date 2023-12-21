// const operators = {
//     0:'+',
//     1:'-',
//     2:'*',
//     3:'/'
// }

let redScore=0;
let blueScore =0;

let getQuesion = setInterval( ()=>{

    let num1 = Math.ceil (Math.random()*201);
    let num2 = Math.ceil (Math.random()*201);
    let num3 = Math.ceil (Math.random()*201);

    let statement;

    let result;
    let check = Math.ceil (Math.random()*9);

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

    
}, 10000);


