let nameTextBox = document.getElementById("name");
let emailTextBox = document.getElementById("email");
let phoneTextBox = document.getElementById("phone");
let passwordTextBox = document.getElementById("password");
let confirmPasswordTextBox = document.getElementById("confirmPassword");

function reg(e) {
    let name = nameTextBox.value;
    let email = emailTextBox.value;
    let phone = phoneTextBox.value;
    let password = passwordTextBox.value;
    let confirmPassword = confirmPasswordTextBox.value;

    let namepattern = /[A-Z][a-z\s]+/;
    let resname = namepattern.test(name);
    if(!resname) alert("Enter the name in correct format");

    let emailpattern = /^[a-z][a-z0-9]{0,19}@gmail[.]com/
    let resemail = emailpattern.test(email);
    if(!resemail) alert("Enter the email in correct format");

    let phonepattern = /^[6-9][0-9]{9}/
    let resphone = phonepattern.test(phone);
    if(!resphone) alert("Enter the phone number in correct format");

    let passwordpattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W]).{6,30}$/;
    let respassword = passwordpattern.test(password);
    if(!respassword) alert("Enter the password correctly");

    if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
    }
    console.log("Register Successfully");
    
    e.preventDefault();
}
console.log("hello");
