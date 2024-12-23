let form = document.querySelector('form');
let input1 = document.querySelector('#rollNo');
// let select = document.querySelector('#subject');
let input2 = document.querySelector("#sem");
let input3 = document.querySelector("#subCode");
let input4 = document.querySelector("#weekNo");

let final = document.querySelector("#final_doc");
let div = document.querySelector(".form-div");
let div2 = document.querySelector(".pdf-div");
let act = "";

let chgtheme = document.querySelector('#style-chg');

form.addEventListener('submit',function(event){
    event.preventDefault();

    let rollno = input1.value;
    // let subject = select.value;
    let sem = input2.value;
    let subjectCode = input3.value;
    let weekno = input4.value;
    subjectCode = subjectCode.toUpperCase();
    rollno = rollno.toUpperCase();

    act = `https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${rollno}/LAB/SEM${sem}/${subjectCode}/${rollno}_week${weekno}.pdf`;
    final.src = act;
    chgtheme.style.display="none";
    div2.style.display = "block";
    div2.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
    });
})

function changeStylesheet() {

    const stylesheet = document.getElementById('theme-stylesheet');

    if (stylesheet.getAttribute('href') === 'style1.css') {
        chgtheme.title="POOKIE MODE: OFF!";
        stylesheet.setAttribute('href', 'style2.css');
    } else {
        chgtheme.title="POOKIE MODE: ON!"
        stylesheet.setAttribute('href', 'style1.css');
    }
}