class User {
    constructor(userName, userMobile, userAddress, userBirthDate){
        this.userName = userName;
        this.userMobile = userMobile;
        this.userAddress = userAddress;
        this.userBirthDate = userBirthDate;
    }
}


const nameInput = document.getElementById("nameInput");
const mobileInput = document.getElementById("mobileInput");
const addressInput = document.getElementById("addressInput");
const dateInput = document.getElementById("dateInput");
const dateDiv = document.getElementById("dateDiv");
const inputDiv = document.getElementById("inputDiv");
const resultDiv = document.getElementById("resultDiv");
const resultText = document.getElementById("resultText");


setDate();

function checkInput() {
    if (nameInput.value == "") {
        alert("Please Enter your name");
    } else if (mobileInput.value == "") {
        alert("Please Enter your Mobile number");
    } else if (addressInput.value == "") {
        alert("Please Enter your address");
    } else if (dateInput.value == "") {
        alert("Please Enter your birth date");
    } else {
        const newUser = new User(nameInput.value, mobileInput.value, addressInput.value, dateInput.value);

        const age = getAge(newUser.userBirthDate);

        resultText.innerText = `
            Name: ${newUser.userName}\n
            Address: ${newUser.userAddress}\n
            Mobile: ${newUser.userMobile}\n
            Age: ${age.years} years - ${age.months} months - ${age.days} days
        `;

        inputDiv.style.display = "none";

        resultDiv.style.display = "block";
    }
}

function recalculate() {
    inputDiv.style.display = "block";
    resultDiv.style.display = "none";

    nameInput.value = "";
    mobileInput.value = "";
    addressInput.value = "";
    dateInput.value = "";
}

function setDate() {
    const todayDate = new Date();
    const todayNumber = todayDate.getDay();

    var todayName = "";
    if(todayNumber == 0){
        todayName = "الأحد";
    } else if(todayNumber == 1){
        todayName = "الإثنين";
    } else if(todayNumber == 2){
        todayName = "الثلاثاء";
    } else if(todayNumber == 3){
        todayName = "الأربعاء";
    } else if(todayNumber == 4){
        todayName = "الخميس";
    } else if(todayNumber == 5){
        todayName = "الجمعة";
    } else if(todayNumber == 6){
        todayName = "السبت";
    }

    const todayDay = todayDate.getDate();
    const todayMonth = todayDate.getMonth() + 1;
    const todayYear = todayDate.getFullYear();

    dateDiv.innerText = `${todayName} ${todayDay}/${todayMonth}/${todayYear}`;
}

function getAge(dateString) {
    var today = new Date();
    var DOB = new Date(dateString);
    var totalMonths = (today.getFullYear() - DOB.getFullYear()) * 12 + today.getMonth() - DOB.getMonth();
    totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
    var years = today.getFullYear() - DOB.getFullYear();
    if (DOB.getMonth() > today.getMonth())
        years = years - 1;
    else if (DOB.getMonth() === today.getMonth())
        if (DOB.getDate() > today.getDate())
            years = years - 1;

    var days;
    var months;

    if (DOB.getDate() > today.getDate()) {
        months = (totalMonths % 12);
        if (months == 0)
            months = 11;
        var x = today.getMonth();
        switch (x) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                var a = DOB.getDate() - today.getDate();
                days = 31 - a;
                break;
            }
            default: {
                var a = DOB.getDate() - today.getDate();
                days = 30 - a;
                break;
            }
        }

    }
    else {
        days = today.getDate() - DOB.getDate();
        if (DOB.getMonth() === today.getMonth())
            months = (totalMonths % 12);
        else
            months = (totalMonths % 12) + 1;
    }

    const age = {
        "years": years,
        "months": months,
        "days": days,
    };

    return age;
}