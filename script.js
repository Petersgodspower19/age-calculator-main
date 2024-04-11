function calculateAge(){
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    let input = document.querySelectorAll('input');
    const yearError = document.getElementById("year-error");
    const monthError = document.getElementById("month-error");
    const dayError = document.getElementById("day-error");
    let valid = true;

    // validation state
    if(!year){
        yearError.innerText = "Must Be A Valid Year";
        valid = false;
    }else{
        yearError.innerText = "";
    }
    if(!month){
        monthError.innerText = "Must Be A Valid Month";
        valid = false;
    }else{
        monthError.innerText = "";
    }
    if(!day){
        dayError.innerText = "Must Be A Valid Date";
        valid = false;
    }else{
        dayError.innerText = "";
    }
    if(valid){
        let today = new Date();
    
        let birthDate = new Date(year, month - 1, day);
        //the birthDate new Date takes the earlier initialized year, month and day as arguements
        // for me to get the age:
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDifference = today.getMonth() - birthDate.getMonth();

        if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())){
            age--
        }

        // calculate total days lived
        let totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

        // calculate number of months, years, days
        let yearsLived = Math.floor(totalDays / 365);
        let remainingDays = totalDays % 365;
        let monthsLived = Math.floor(remainingDays / 30);
        let daysLived = remainingDays % 30;
     
        document.getElementById("display-years-years").innerText = yearsLived;
        document.getElementById("display-years-months").innerText = monthsLived;
        document.getElementById("display-years-days").innerText = daysLived;

    }
}


