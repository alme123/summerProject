const users = []




document.getElementById("כפתור הרשמה").addEventListener('click', function () {
var Email = document.getElementById('אימייל').value;
var Username = document.getElementById("שם משתמש").value
var password = document.getElementById("סיסמא").value;
var Repeatpassword = document.getElementById("חזרה על סיסמא").value;
var firstName = document.getElementById("שם פרטי").value;
var lastName = document.getElementById("שם משפחה").value;
var Age = document.getElementById("גיל").value



const correctEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailResult = correctEmail.test(Email);

const correctUsername = /^[\u0020-\u007E\u00A0-\u00FF]+$/;
const userResult = correctUsername.test(Username)


const correctpassword =  //update
const passwordResult = correctpassword.test(password)

const containsNumber = /\d/;
const passwordResultIs = containsNumber .test(password); 

const isUserNameResult = users.some(function (e) {
    return  Username == e.Username;
}); 
console.log(isUserNameResult)
   

if (isUserNameResult == true) {
    alert("משתמש קיים");
}

else if (userResult != true || Username.length < 4) {
    alert("חייב להכיל לפחות 4 תווים");
}


else if (firstName.length < 2 || lastName.length < 2) {
    alert("שם פרטי או שם משפחה חייב להכיל לפחות 2 תווים");
}

else if (emailResult != true) {
    alert("מייל לא תקין");
}

else if (password != Repeatpassword ) {
    alert("סיסמה לא תואמת");
}

else if (passwordResult != true || password.length < 6 || passwordResultIs != true) {
    alert("הסיסמה חייבת להכיל לפחות 6 תווים אותיות ומספרים ");
}
else if(Age > 65 || Age < 18 ){
    alert ("גיל לא תקין")
}


else {
    users.push({ 
        Username: Username,
        firstName : firstName,
        lastName: lastName,
        email: Email,
        Age: Age, 
        password: password
    });
    console.log(users)

    
    
  }
  const jsonArray = JSON.stringify(users);
                
     localStorage.setItem('data', jsonArray);
            
        
})







