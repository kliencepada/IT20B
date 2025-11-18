function legalAge(age){

    if( age >= 18){
        console.log(" You are in a legal age");
    } else {
        console.log(" You are not in the legal age");
    }
}

legalAge(69);

function computeGrade(grade){

    if (grade >= 94.5){
        console.log("1");
    } else if (grade >= 91.5){
        console.log("1.25");
    } else if (grade >= 89.5){
        console.log(1.25);
    } else if (grade >= 86.5){
        console.log ("1.75");
    } else if (frade >= 84.5){
        console.log("2");
    } else {
        console.log("Not within the transmutation");
    }
}

computeGrade(87);

function login(username,password){

    if(username === "cliffy"){

        if(password === 1234){
             console.log("Welcome User");
        } else {
             console.log("Invalid login credentials");
        }
    } else{
         console.log("Invalid User");
    }
}
login("cliffy",1234)

function ticketPrice(age){

    if(age < 18){
        if(age < 5){
            console.log("Ticket: Free");
        } else {
            console.log("Ticket: Child Price")
        }
    } else {
        if (age >= 60){
            console.log("Ticket: Senior discount");
        }else {
            console.log("Ticket: Adult Price");
        }
    }
}

ticketPrice(70);