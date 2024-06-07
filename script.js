let total=0;
let currentstep = 1;
let currentcircle = 0;
const circle = document.querySelectorAll('.step');
const steps = document.querySelectorAll('.stp');
const forminput = document.querySelectorAll('.step-1 form input');
const error = document.querySelectorAll('.step-1 form .error');

steps.forEach((step) => {
    const prevbtn = step.querySelector('.prev');
    const nextbtn = step.querySelector('.next');
    if (prevbtn) {
        prevbtn.addEventListener('click', () => {
            document.querySelector(`.step-${currentstep}`).style.display = 'none';
            currentstep--;
            document.querySelector(`.step-${currentstep}`).style.display = 'block';
            circle[currentcircle].classList.remove('active');
            currentcircle--;
            circle[currentcircle].classList.add('active');
        });
    }
    if (nextbtn) {
        nextbtn.addEventListener('click', () => {
            document.querySelector(`.step-${currentstep}`).style.display = "none";
            if (currentstep < 5 && validform()) {
                currentstep++;
                currentcircle++;
            }
            document.querySelector(`.step-${currentstep}`).style.display = "block";
            circle[currentcircle - 1].classList.remove('active');
            circle[currentcircle].classList.add("active");
            if (currentstep == 4) {
               checkbox();
            }
        });
    }
});

function validform() {
    let valid = true;
    for (let i = 0; i < forminput.length; i++) {
        if (!forminput[i].value) {
            valid = false;
            forminput[i].classList.add('err');
            error[i].style.display = "block";
            break;
        }
        else {
            valid = true;
            forminput[i].classList.remove('err');
        }
    }
    return valid;
}

// step 1 completed
const plancart = document.querySelectorAll('.plan-cart');
const planename = document.querySelector('.plan-name');
const planprices = document.querySelector('.plan-prices');
// console.log(planename);

plancart.forEach((card) => {

    card.addEventListener('click', () => {
        const last = document.querySelectorAll('.selected');

        if (last) {
            last[0].classList.remove('selected');
        }
        card.classList.add('selected');

        const selectimg = document.querySelector('.selected');
        if (selectimg.childNodes[1].src == 'http://127.0.0.1:5500/assets/images/icon-arcade.svg') {
            planename.innerText = selectimg.children[1].childNodes[1].innerText;
            planprices.innerText = selectimg.children[1].childNodes[3].innerText;
            total=total+9;
        }
        else if (selectimg.childNodes[1].src == 'http://127.0.0.1:5500/assets/images/icon-advanced.svg') {
            planename.innerText = selectimg.children[1].childNodes[1].innerText;
            planprices.innerText = selectimg.children[1].childNodes[3].innerText;
            total=total+12;
        }
        else if (selectimg.childNodes[1].src == 'http://127.0.0.1:5500/assets/images/icon-pro.svg') {
            planename.innerText = selectimg.children[1].childNodes[1].innerText;
            planprices.innerText = selectimg.children[1].childNodes[3].innerText;
            total=total+15;
        }
    })
})
// step 2 completed

function checkbox(){
    const box = document.querySelectorAll('.box');
    const service = document.querySelectorAll('.service');
    const storage = document.querySelectorAll('.storage');
    const profile = document.querySelectorAll('.profile');
    const totalclass=document.querySelector('.total');
    
    if (box[0].children[0].checked === true) {
        service[0].children[0].innerText = box[0].children[1].children[0].innerText;
        service[0].children[1].innerText = box[0].children[2].innerText;
        total=total+1;
    }
    else {
        service[0].children[0].innerText = " ";
        service[0].children[1].innerText = " ";
    }
    if (box[1].children[0].checked === true) {
        storage[0].children[0].innerText = box[1].children[1].children[0].innerText;
        storage[0].children[1].innerText = box[1].children[2].innerText;
        total=total+2;
    }
    else {
        storage[0].children[0].innerText = " ";
        storage[0].children[1].innerText = " ";
    }
    if (box[2].children[0].checked === true) {
        profile[0].children[0].innerText = box[2].children[1].children[0].innerText;
        profile[0].children[1].innerText = box[2].children[2].innerText;
        total=total+2;
    }
    else {
        profile[0].children[0].innerText = " ";
        profile[0].children[1].innerText = " ";
    }

    totalclass.childNodes[1].innerText='$'+total+'/mo';
}
// step 4 completed