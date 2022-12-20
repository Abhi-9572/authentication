let encryptionRule = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
  }

  const encrypt=(inputPassword)=>
  {
    let encryptedPassword="";
    for(char of inputPassword)
    {
        encryptedPassword=encryptedPassword+encryptionRule[char]
    }
    return encryptedPassword;
  }

//   const decrypt=(encryptedPassword)=>
//   {
//     let actualPassword="";
//     let keys=Object.keys(encryptionRule);
//     console.log(keys);
//     let values=Object.values(encryptionRule);
//     console.log(values);
//     for(char of encryptedPassword)
//     {
//         let requredIndex=values.find((value)=>
//         {
//             value===char
//         })
//         actualPassword=actualPassword+keys[requredIndex]
//     }
//     return actualPassword;
//   }

let DB_USERS=[]

const resetsingUp=()=>{
    document.getElementById('signup-first-name').value=''
document.getElementById('signup-last-name').value=''
document.getElementById('signup-email').value=''
document.getElementById('signup-contact').value=''
document.getElementById('signup-password').value=''
document.getElementById('signup-cpassword').value=''
}

const resetlogin=()=>{
   
document.getElementById('login-email').value=''

document.getElementById('login-password').value=''
''
}
const signup=()=>
{
let firstName=document.getElementById('signup-first-name').value
let lastName=document.getElementById('signup-last-name').value
let email=document.getElementById('signup-email').value
let contact=document.getElementById('signup-contact').value
let password=document.getElementById('signup-password').value
let signupsuccessAlert=document.getElementById('signup-success-alert')

let userDetails={
    firstName,
    lastName,
    email,
    contact,
    password:encrypt(password)
}
DB_USERS.push(userDetails)
console.log((DB_USERS));
resetsingUp()
if(DB_USERS)
{
    signupsuccessAlert.style.display="block"
}
}

const login=()=>
{

    const loginEmail=document.getElementById('login-email').value;
    const loginPassword=document.getElementById('login-password').value
    let loginsuccessAlert=document.getElementById('login-success-alert')
    let loginfailureAlert=document.getElementById('login-failure-alert')
    let currentuserDetails=DB_USERS.find((user)=>user.email===loginEmail && encrypt(user.password)===loginPassword)
    // console.log(currentuserDetails);
    if(currentuserDetails)
    {
        loginsuccessAlert.style.display="block"
        loginfailureAlert.style.display="none"
    }
    else
    {
        loginfailureAlert.style.display="block"
        loginsuccessAlert.style.display="none"
    }


    resetlogin();
}