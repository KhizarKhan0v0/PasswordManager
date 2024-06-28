let passwords = [];
let index;
let check = localStorage.getItem("PasA");
if (check) {
    passwords = JSON.parse(check);
    
}
else{
    // localStorage.setItem("PassA", passwords);
}

let username = 'user123';
let passcode = 'pass123';
function showScreen(){

    let usernameC=document.getElementById("username").value;
    let passcodeC=document.getElementById("passcode").value;
    if (username===usernameC && passcode===passcodeC) {
        alert("Login Successfull");
        let vl = document.getElementById("Vlogin");
        vl.style.display="none";
        let vh = document.getElementById("Vhome");
        vh.style.display="flex";
    }
    else{
        alert("Login Failed");
    }
}


function addlist(){
    let userN = document.getElementById("userN");
    let passW = document.getElementById("passW");
    passwords.push({User: userN.value , Pass : passW.value});
    localStorage.setItem("PasA",JSON.stringify(passwords));
    userN.value='';
    passW.value='';
    console.log(passwords);
    showlist();
    
}


showlist();
function showlist() {
    var cuttler = '';
    for(let i=0; i<passwords.length; i++){
        cuttler += `<div class="passcard" >
        <div class="dets">
            <span>User : ${passwords[i].User}</span>  
            <span>Password : ${passwords[i].Pass}</span>
        </div>
        <div class="btnbox">
            <button class="btn green" onclick="edit(${i})">Edit</button>
            <button class="btn red" onclick="del(${i})">Delete</button>
        </div>
        </div> `;

        
    }
    document.querySelector("#passshow").innerHTML=cuttler;
}

function edit(i){
    index=i;
    let userN = document.getElementById("userN");
    let passW = document.getElementById("passW");
    userN.value=passwords[i].User;
    passW.value=passwords[i].Pass;

    del(i);
    // showlist();
}

function del(i){
    index=i;
    let arr = passwords.filter((id)=>{
        return id != passwords[index];
    });
    passwords=arr;
    localStorage.setItem("PasA",JSON.stringify(passwords));
    showlist();
}