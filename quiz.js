const quizQs=[
    {
        question:"Q1.What is the full from of HTML?",
        a:"Hello To Mt Land",
        b:"Hey Text Markup Language",
        c:"Hypertext Makeup Language",
        d:"Hypertext Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2.Which is the capital of Assam?",
        a:"Dishpur",
        b:"Kolkata",
        c:"Lucknow",
        d:"Mumbai",
        ans:"ans1"
    },
    {
        question:"Q3.What is the full from of CSS?",
        a:"Cartoon Style Sheets",
        b:"Cascading Stunning Sheets",
        c:"Cascading Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans3"
    },
    {
        question:"Q4.Who invented Compus?",
        a:"Newton",
        b:"Chau Kung",
        c:"Einestein",
        d:"Avogado",
        ans:"ans2"
    },
    {
         question:"Q5.Which is the national animal of Srilanka?",
        a:"Leopard",
        b:"Tiger",
        c:"Horse",
        d:"Lion",
        ans:"ans4"
    }
];
const sc= document.getElementById('quiz');
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');

let qC=0;
let score=0;
let msg;


const loadQuestion=()=>{
    const qList=quizQs[qC];
    question.innerText=qList.question;
    option1.innerText=qList.a;
    option2.innerText=qList.b;
    option3.innerText=qList.c;

    option4.innerText=qList.d;


    
}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};
submit.addEventListener('click',()=>{
     const checkedAnswer=getCheckAnswer();
     if(checkedAnswer===quizQs[qC].ans){
          score++;
           msg=`your score  is ${score}`;
     };
     qC++;
     if(qC<quizQs.length){
        loadQuestion();
     }
     
     else{
         
        alert(msg);
       
        

     }
});
