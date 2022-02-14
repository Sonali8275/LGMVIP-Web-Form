var enroll = document.getElementById("enroll");
enroll.addEventListener("click", displayDetails);


var row = 1;

function displayDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
    var skills = document.getElementById("skills").value;



    if (!name || !email || !address || !gender || !skills) {
        alert("Please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);


    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = address;
    cell4.innerHTML = gender;
    cell5.innerHTML = skills;


    row++;
}