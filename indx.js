var checkboxex = document.getElementsByName('answers')
var option1 = document.getElementById('label1')
var option2 = document.getElementById('label2')
var option3 = document.getElementById('label3')
var option4 = document.getElementById('label4')
var answers = document.querySelectorAll('.answers')
var question = document.getElementById("question")
var next = document.getElementById('next')
var scorebox=document.getElementById('scorebox')
var showscore=document.getElementById('showscore')
var que=document.getElementById('que')
var image=document.getElementById('image')

var questionCount = 0
var score = 0
var root='&#8730'
const myquiz = [
    {
        "sno":"1",
        "question": "What is the value of cos 90 ?",
        "option1": "1",
        "option2": "0",
        "option3": "1/2",
        "option4": "2",
        "answer": "2"
    },
    {
        "sno":"2",
        "question": "What is the value of cos 0 ?",
        "option1": "1",
        "option2": "0",
        "option3": "1/2",
        "option4": "2",
        "answer": "1"
    },

    {
        "sno":"3",
        "question": "What is the value of sin 90 ?",
        "option1": "1",
        "option2": "0",
        "option3": "1/2",
        "option4": "not defined",
        "answer": "1"
    },
    {
        "sno":"4",
        "question": "What is the value of sin 0 ?",
        "option1": "1",
        "option2": "0",
        "option3": "1/2",
        "option4": "not defined",
        "answer": "2"
    },
    {
        "sno":"5",
        "question": "What is the value of sin 30 ?",
        "option1": "1",
        "option2": "0",
        "option3": "1/2",
        "option4": "not defined",
        "answer": "3"
    },
    {
        "sno":"6",
        "question": "What is the value of cos 30 ?",
        "option1": "1",
        "option2": "0",
        "option3": "not defined",
        "option4": "&#8730 3/2",
        "answer": "4"
    },
 

]



function check(checkbox) {
    for (const element of checkboxex) {
        if (element !== checkbox) {
            element.checked = false
        }
    }
}

function loadquestions() {
    que.innerHTML=`Que ${myquiz[questionCount].sno} - `
    question.innerHTML = myquiz[questionCount].question
    option1.innerHTML = myquiz[questionCount].option1
    option2.innerHTML = myquiz[questionCount].option2
    option3.innerHTML = myquiz[questionCount].option3
    option4.innerHTML = myquiz[questionCount].option4
    check(answers)
    

}

function checkanswer() {
    let answer;

    answers.forEach(element => {

        if (element.checked) {
            answer = element.id
        }
    });
 
    return answer;


}

loadquestions()

next.addEventListener('click', function () {
    
   var getanswer=checkanswer()

try {
    if (getanswer==myquiz[questionCount].answer) {
        score++;
    }
    
} catch (e) {
}
    questionCount++;
    
    if (questionCount < myquiz.length) {

        loadquestions();
    } else {
        showscore.innerHTML=`Your score is : ${score}/${myquiz.length}`;
        if (score<=myquiz.length/2) {
            image.setAttribute('src','sad.png')
            
        } else {
            
            image.setAttribute('src','happy.png')
        }
        scorebox.classList.remove('hide');
    };

});

function load() {
    location.reload();
}














