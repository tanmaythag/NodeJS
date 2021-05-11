const readline = require('readline');
const r =readline.createInterface({input : process.stdin,
                                 output : process.stdout});

let num1 =Math.floor((Math.random()*10)+1);
let num2 =Math.floor((Math.random()*10)+1);

let answer = num1 + num2;

r.question(`what is the ${num1} + ${num2}? \n`,
   (userInput)=>{
       if(userInput.trim()== answer){
           r.close();
       }
       else{
           r.setPrompt('Incorrect \n');
           r.prompt();
           r.on('line',(userInput)=>{
               if(userInput.trim()==answer)
               r.close();
               else{
                   r.setPrompt(`your answer of ${userInput}`);
                   r.prompt();
               }
           });
          
       }
    });
r.on('close',()=>{
    console.log('Correct !!');
});

