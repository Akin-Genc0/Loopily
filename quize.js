const questions = [
  {
    question: "What is the correct syntax for a basic for loop in JavaScript?",
    choices: [
      "for (let i = 0; i < 10; i++) { console.log(i); }",
      "for (let i = 0; i < 10; i++) console.log(i);",
      "for (let i = 0; i < 10; i++ { console.log(i); }",
      "for let i = 0; i < 10; i++ { console.log(i); }"
    ],
    correctAnswer: 0
  },
  {
    question: "Which part of a for loop determines how many times the loop runs?",
    choices: [
      "The initialization statement",
      "The condition expression",
      "The increment expression",
      "The loop body"
    ],
    correctAnswer: 1
  },
  {
    question: "Which keyword is best to declare a loop variable that is limited to block scope in a for loop?",
    choices: [
      "var",
      "let",
      "const",
      "static"
    ],
    correctAnswer: 1
  },
  {
    question: "What will be logged to the console after executing the code below?\n\nlet sum = 0;\nfor (let i = 1; i <= 3; i++) { sum += i; }\nconsole.log(sum);",
    choices: [
      "3",
      "6",
      "7",
      "9"
    ],
    correctAnswer: 1
  },
  {
    question: "Which statement best describes the increment expression in a for loop?",
    choices: [
      "It initializes the loop variable.",
      "It checks if the loop should continue.",
      "It updates the loop variable after each iteration.",
      "It defines the loop's scope."
    ],
    correctAnswer: 2
  }
];

let count = 0;
let score = 0;

const co = document.getElementById("content");

const l = document.getElementById("l");

const btn = document.getElementById('N');

const btn1 = document.getElementById('B');

const btn2 = document.getElementById('R');

const list = l.getElementsByTagName("li");
 
const para = document.createElement("p");



function wor(){
 
  for(let i = 0; i < questions.length; i++){
    if(count === i){
    const c = questions[i].choices

    for(let j = 0; j < list.length; j++){ 
 
    if(j === questions[i].correctAnswer ){
      list[j].style.backgroundColor = "#f2fff0"
      
  
    } else if(j !== questions[i].correctAnswer){
       list[j].style.backgroundColor = "#fff2f2"
    
    }  
           
    }
      }
        }
          }
      
    




function dis(obj){

  co.style.display = "flex";
  co.style.justifyContent  = "center";
   
  for(let i = 0; i < questions.length; i++){
     if(count === i){
       const q = questions[i].question
       co.textContent = q
     } 
   }
}


//how to them in a list so whey can be selected 
function op(obj){


  let clickable = true;
  l.style.display = "flex";
  l.style.justifyContent  = "center"
    
 
    for(let i = 0; i < questions.length; i++){
      if(count === i){
      const c = questions[i].choices
        
      for(let j = 0; j < list.length; j++){
      list[j].textContent = c[j]
      list[j].style.backgroundColor = "#ffff";
      list[j].onclick = function() {
       
        if (!clickable) return; // stops the function if not clickable

        clickable = false;
        wor();
        if(j === questions[i].correctAnswer ){
          score++
          console.log(score)
        } else if(j !== questions[i].correctAnswer){
            wrong++
          console.log(wrong)
        }  

        }
        
  
          }
        }
       
     }
    }

  
   
    function res(){

     
      para.style.display = "flex"
      para.style.justifyContent  = "center"
       para.style.marginTop  = "5vw"
       
   
      if( score >= questions.length){

        para.textContent = "You Scored " + score + "/" + questions.length;
        document.getElementById('re').appendChild(para);

      } else if (score < questions.length && count > questions.length -1){

        para.textContent = "You Scored " + score + "/" + questions.length;
        document.getElementById('re').appendChild(para);   
      }
     
        }


   
        function time() {
          count++
          op()
          dis()
        }

    op(questions)
    dis(questions)
    
    
    
   btn2.style.display = "none"
    
 

   btn.onclick = function() {
    clickable = true;
  }
// Adding a click event listener
btn.addEventListener('click', function() {
     count++
   
     
     dis(questions)
     op(questions)
    
     if(count > questions.length -1){
      co.style.display = "none"
      l.style.display = "none"
      btn.style.display = "none"
      btn1.style.display = "none"
      btn2.style.display = "inline-block"
      res()
     }
});

btn1.addEventListener('click', function() {
  count--
 
  dis(questions)
  op(questions)

 

  if(count < 0){
    count = 0;
  }

});


btn2.addEventListener('click', function() {
  btn2.style.display = "none"
        btn.style.display = "inline-block"
              btn1.style.display = "inline-block"
              para.style.display = "none"
              score = 0;  //rest score
              count = 0;   //reset count

  dis(questions)
  op(questions)
 
});