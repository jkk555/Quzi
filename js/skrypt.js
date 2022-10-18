//const btn_start = document.querySelector(".btn-start button");

const btn_start = document.getElementById("start-btn");
const info_box = document.querySelector(".box");
const info_btn = document.getElementById("info-box-next");
const questions = document.querySelector(".question-box");
const title = document.getElementById("title");
const question = document.getElementById("question");
/*const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4"); */
const which_que = document.getElementById("which-que");
const next_que = document.getElementById("next-que");
let options_list = [];
options_list[0] = document.getElementById("option1");
options_list[1] = document.getElementById("option2");
options_list[2] = document.getElementById("option3");
options_list[3] = document.getElementById("option4");

let que_number = 0;
let correct_ans = 0;


btn_start.onclick = () => {
    btn_start.classList.add("hidden");
    info_box.classList.add("visible");
}

showQue = () => {
    
    question.innerHTML = question_list[que_number].question;
    option1.innerHTML = question_list[que_number].options[0];
    option2.innerHTML = question_list[que_number].options[1];
    option3.innerHTML = question_list[que_number].options[2];
    option4.innerHTML = question_list[que_number].options[3];
    
}

options_list[0].onclick = () => {
    if(options_list[0].innerText == question_list[que_number].answer)
    {
        alert("ok");
        correct_ans++;
    }else{
        alert("nie ok");
    }
    que_number++;
    showQue();
}

options_list[1].onclick = () => {
    if(options_list[1].innerText == question_list[que_number].answer)
    {
        alert("ok");
        correct_ans++;
    }else{
        alert("nie ok");
    }
    que_number++;
    showQue();
}

options_list[2].onclick = () => {
    if(options_list[2].innerText == question_list[que_number].answer)
    {
        alert("ok");
        correct_ans++;
    }else{
        alert("nie ok");
    }
    que_number++;
    showQue();
}

options_list[3].onclick = () => {
    if(options_list[3].innerText == question_list[que_number].answer)
    {
        alert("ok");
        correct_ans++;
    }else{
        alert("nie ok");
    }
    que_number++;
    showQue();
}


/*next_que.onclick = () => {
    setOption();
} 

function setOption(){
    for(let i=0;i<=que_number;i++)
    {
        alert(i);
        options_list[que_number].onclick = () => {
            if(options_list[que_number].innerText = question_list[que_number].answer)
            {
                alert("ok");
            }else {
                alert("nie ok");
            }
            que_number++;
            showQue();
        }
    }
}
*/

/* option2.onclick = () => {
    if(option2.innerText == question_list[que_number].answer)
    {
        alert("ok");
        correct_ans++;
    }else{
        alert("nie ok");
    }
    que_number++;
    showQue();
}




option1.onclick = () => {
    if(option1.innerText == question_list[que_number].answer)
    {
        alert("ok");
    }else{
        alert("nie ok");
    }
    que_number++;
    showQue();
}
option3.onclick = () => {
    if(option3.innerText == question_list[que_number].answer)
    {
        alert("ok");
    }else{
        alert("nie ok");
    }
    que_number++;
    showQue();
}
option4.onclick = () => {
    if(option4.innerText == question_list[que_number].answer)
    {
        alert("ok");
    }else{
        alert("nie ok");
    }
    que_number++;
    showQue();
} */

info_btn.onclick = () => {
    info_box.classList.remove("visible");
    questions.classList.remove("hidden");
    showQue();
}


