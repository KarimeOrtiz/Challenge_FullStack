// Simulating "Data Base"

let userName="dianakob";
let userPassword = "12345";

// ----- login functionality

// 1) get the uname and upass from the user using prompt 

uname = prompt("Enter your userName");
upass = prompt("Enter your password");

// 2) compare the uname and upass with userName and userPassword
if(uname === userName && upass === userPassword){
    // 3) display wlcome message 
    document.write(`<p>Welcome!!</p>`);
}else{
    // 4) invalid credentials
    document.write(`<p>Invalid credentials</p>`);
}



