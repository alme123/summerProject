

const usersData = JSON.parse(localStorage.getItem('data')) || [];
console.log(usersData)

document.getElementById("sign in").addEventListener("click", function (e) {
  e.preventDefault();

  const Username = document.getElementById("Username").value;
  const Password = document.getElementById("password").value;

  const index = usersData.findIndex(function (u) {
    return u.Username == Username
  })
  console.log(index)

  if (usersData[index].password == Password) {
   alert ("לא קיים")
  } else {
     
    alert("התחבר בהצלחה")
   
  }

})








