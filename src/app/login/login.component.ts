import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="YOUR PERFECT BANKING PARTNER"
  data1="Account Number"
  acno:any
  psw:any
userdetails:any={
  1000:{username:"gouri",acctno:1000,password:"abc",balance:0},
  1001:{username:"gokul",acctno:1001,password:"123",balance:0},
  1002:{username:"fida",acctno:1002,password:"efg",balance:0},
  1003:{username:"hari",acctno:1003,password:"001",balance:0},
}
// dependency injection
constructor(private router:Router){}

login(){
  var acnum= this.acno
  var userdetails=this.userdetails
  var psw=this.psw
  if(acnum in userdetails){
    if(psw==userdetails[acnum]["password"]){
      alert("login success")
      // redirection
      this.router.navigateByUrl("homepage")
    }
    else{
      alert("password incorrect")
    }
  }
  else{
    alert("incorrect account number")
  }
}

// acctnochange(event:any){
//   this.acno=event.target.value;
//   // console.log(this.acno);
   
// }

// passwrdchange(event:any){
//   this.psw=event.target.value
// }
// login(acno:any,psw:any){
//   var acnum= acno.value
//   var userdetails=this.userdetails
//   var psw=psw.value
//   if(acnum in userdetails){
//     if(psw==userdetails[acnum]["password"]){
//       alert("login success")
//     }
//     else{
//       alert("password incorrect")
//     }
//   }
//   else{
//     alert("incorrect account number")
//   }
// }

}
