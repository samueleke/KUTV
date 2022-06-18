const form = document.getElementById("form");
const csname = document.getElementById("csname");
const kname = document.getElementById("kname");
const email = document.getElementById("email");
const telefonszam = document.getElementById("telefonszam");


form.addEventListener("submit", (e) => {

    if (checkInputs() === false) {
        e.preventDefault();
        return;
    };

})


function checkInputs() {
    //get values from the input fields
    const csnameValue = csname.value;
    const knameValue = kname.value;
    const emailValue = email.value;
    const telefonszamValue = telefonszam.value;

    //name
    if (csnameValue === "") {
        setErrorFor(csname, "Cannot be empty !");
    } else {
        setSuccessFor(csname)
    }

    if (knameValue === "") {
        setErrorFor(kname, "Cannot be empty !");
    } else {
        setSuccessFor(kname)
    }


    //email
    if (emailValue === "") {
        setErrorFor(email, "Cannot be empty !");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid !");
    } else {
        setSuccessFor(email)
    }

    //phone number
    if (telefonszamValue === "") {
        setErrorFor(telefonszam, "Cannot be empty !");
    } else if (!isTelNumber(telefonszamValue)) {
        setErrorFor(telefonszam, "Phone number is not valid !");
    } else {
        setSuccessFor(telefonszam);
    }
    return !(csnameValue === "" || knameValue === "" || emailValue === "" || telefonszamValue === "" || !isTelNumber(telefonszamValue));
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.col-md-6 div
    const small = formControl.querySelector("small");

    //add error message inside small 
    small.innerText = message;

    //add error class
    formControl.className = "col-md-6 error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "col-md-6 success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//accepts tel number format: 
//+XX-XXXX-XXXX
//+XX.XXXX.XXXX
//+XX XXXX XXXX
function isTelNumber(telefonszam) {
    return /^\+([0-9]{2})[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/.test(telefonszam);
}

//Set only one selected checkbox 
function selectOnlyThis(id, className) {
    let osztalyok = document.getElementsByClassName(className);
    Array.prototype.forEach.call(osztalyok, function (osztaly) {
        osztaly.checked = false;
    });

    document.getElementById(id).checked = true;
}
