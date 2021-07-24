"use strict";

//Creating the User object

/* Algorithm
Create the constructor class

*/
class Users {
    constructor(firstname, surname, dob, emailAddress, gender, password){
        this.firstname = firstname;
        this.surname = surname;
        this.dob = dob;
        this.emailAddress = emailAddress;
        this.gender = gender; 
        this.password = password;

    }
    firstName(){
        return this.firstname;
    }
    surName(){
        return this.surname;
    }
    dob(){
        return this.dob;
    }
    emailAddress(){
        return this.emailAddress;
    }
    gender(){
        return this.gender;
    }
    userName(){
        const username = this.firstname +' '+ this.surname;
        return username;
    }
    password(){
        return this.password;
    }
    

}



let User = new Users("Mark", "Anthony");