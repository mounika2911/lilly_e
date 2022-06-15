const tabs = document.querySelectorAll(".accordian-tab");
const accFields = document.querySelectorAll("#fields-collapse");
const plusIcons =document.querySelector(".change-plus");
const medicareChk = document.querySelector("#part-D-medicare");
const medicareBtn = document.querySelector("#medicare-btn");
const modalYes = document.querySelector("#modal-yes");
const modalNo = document.querySelector("#modal-no");
const otherModal =  document.querySelector("#other-modal");
const otherChk = document.querySelector("#other-modal-checked");
const otherModalBtn = document.querySelector("#other-modal-btn");
const errorMessages = document.querySelectorAll(".error-message");
const inputs = document.querySelectorAll("input");
const numberErrorMessages = document.querySelectorAll(".number-error-message");
const nonZeroError = document.querySelector(".non-zero-error");
const phnNumber = document.querySelector("#phone-number");
const orgEmails = document.querySelectorAll(".original-email");
const onlyNumbers = document.querySelectorAll(".only-numbers");
const insuranceChkBox = document.querySelector("#insurance-chk-boxes");
const onCheckErrors = document.querySelectorAll(".on-check-error");
const insuranceError = document.querySelector(".radio-head-insurance");
const medicareModal = document.querySelector("#medicare-modal")


//------------------------     tabs in second coloum   ---------------------------------------------
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
       tab.classList.toggle("active")
       tab.classList.toggle("activate"); 
       const accBody = tab.nextElementSibling 
        if(tab.classList.contains("active")){
             accBody.style.display = "none";                                 
        }
        else{
            accBody.style.display = "block";                                                
        }         
      }) 
});


//-------------------   part d medicare chk  ------------------------------------------
medicareChk.addEventListener("change", () => {
    if(medicareChk.classList = "checked"){
        medicareModal.style.display = "block";
    }
})
modalYes.addEventListener("click", () => {
        modalYes.classList.add("checked")
    })
    modalNo.addEventListener("click", () => {
        modalNo.classList.add("checked")
    })
medicareBtn.addEventListener("click", () => {    
    if(modalYes.classList.contains("checked") || modalNo.classList.contains("checked")){
        console.log("true")
        medicareModal.style.display = "none";
    }
})


// ------------------------------   other modal in insurance -----------------------------------------
otherChk.addEventListener("change", () => {
    if(otherChk.classList = "checked"){
        otherModal.style.display = "block";
    }
})

otherModalBtn.addEventListener("click", ()=> {
    otherModal.style.display = "none";
})

function modalClose(){
    otherModal.style.display = "none";
}


//------------------------------------     general req field error ---------------------------------
const requiredEmptyField = () => {
    "use strict";
    return function () {  
      if (this.value == "" && !(this.nextSibling.nodeType == 1) ) {
        this.insertAdjacentHTML("afterend", '<p id = "error-text" enable><i class="fa-solid fa-circle-exclamation"></i>This is required field</p>');
      } else if (!this.value == "" && this.nextSibling.nodeType == 1) {
        document.getElementById("error-text").remove();
      }
    };
}

errorMessages.forEach(errorMessage => {
    errorMessage.addEventListener("blur", requiredEmptyField());
})


//------------------------------------ alphabets error for specific field  -------------------------------------
const requiredTextField = () => {
    "use strict";
    return function () {
        if(!isNaN(this.value) && !(this.nextSibling.nodeType == 1)){
             this.insertAdjacentHTML("afterend", '<p id = "error-number"><i class="fa-solid fa-circle-exclamation"></i>Only alphabets are allowed</p>');
        } else if (isNaN(this.value)  && this.nextSibling.nodeType == 1) {
            document.getElementById("error-number").remove();
        }
    }
}

numberErrorMessages.forEach(numberErrorMessage => {
    numberErrorMessage.addEventListener("blur", requiredTextField());
})




//--------------------------    phone number non zero error -----------NOT WORKING-------------------
phnNumber.addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });

//---------------------  for valid email address ------------------------------------------
const validEmail = () => {
    "use strict";
    return function () {
        const reg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
        if(reg.test(this.value) == false && !(this.nextSibling.nodeType == 1)){
            console.log(reg.test(this.value))
            this.insertAdjacentHTML("afterend", '<p id = "error-email"><i class="fa-solid fa-circle-exclamation"></i>Please Enter Valid Email </br> Address</p>'); 
        }else if(reg.test(this.value) == true && this.nextSibling.nodeType == 1){
            document.getElementById("error-email").remove();
        }
    }    
}

orgEmails.forEach(orgEmail => {
    orgEmail.addEventListener("blur", validEmail());
})


//--------------------------- only numbers are allowed under  patient income info ----------------------------
const noText = () => {
    "use strict";
    return function () {
        const regNumber = /^\d$/;
        if(regNumber.test(this.value) == false && !(this.nextSibling.nodeType == 1)){
            this.insertAdjacentHTML("afterend", '<p id = "error-text">Must contain only numbers, +()-. and x.</p>'); 
        }else if(regNumber.test(this.value) == true && this.nextSibling.nodeType == 1){
            document.getElementById("error-text").remove();
        }
    }
}

onlyNumbers.forEach(onlyNumber => {
    onlyNumber.addEventListener("blur", noText());
})

//--------------------------------zip code error ---------------------------------------------------------
const validZip = document.querySelector('#valid-zip');
const handleKeyDown = () => e.target.value = e.target.value.match(/^([^e+-]{0,2})/)[0]

validZip.addEventListener('keypress', handleKeyDown =>{

    const isValidZip = /^\d{5}$/.test(validZip.value);
    console.log(isValidZip)
})

//--------------------------------    insurance chk btns  ---------------------------------------------------
const yesIns = document.querySelector("#radio-yes-address")
const noIns = document.querySelector("#radio-no-address")
const chkError = document.querySelector('#select-error')
onCheckErrors.forEach(onCheckError =>{
    onCheckError.checked = false;
    onCheckError.addEventListener('change', () => {
        if(chkError.style.display = 'none' && yesIns.checked == false){
                chkError.style.display = 'block'
            }
    })
    
})
function chkIns() {
    if(noIns.checked == true){
        onCheckErrors.forEach(onCheckError =>{
            onCheckError.checked = false;
            onCheckError.disabled = true;
        })
    }else if(yesIns.checked == true){
        chkError.style.display = 'none';
        onCheckErrors.forEach(onCheckError =>{
            onCheckError.disabled = false;            
        })
    }
}


// --------------------------smtp JS-----------------------------------
const form = document.querySelector(".form-submit")
const email = document.getElementById('#email')
const fname = document.getElementById("#fname")
function sendEmail(){
    Email.send({
        SecureToken : "3d891de5-eb0b-4d38-9f84-2cc58a6a5b72",
        To : 'mounikagnd@gmail.com',
        From : 'mouni.mani2911@gmail.com',
        Subject : "Contact From",
        Body :  'msg'
    }).then(
    message => alert(message)
    ).catch((error) => {
        console.error(error);
    })
}
sendEmail();