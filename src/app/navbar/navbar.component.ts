
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogout(){
    this._AuthService.logout();
    }
isLogin:boolean=false;
  constructor(private  _AuthService :AuthService) {

   

  }

  ngOnInit(): void {
   this._AuthService.currentUser.subscribe(()=>{

      if(this._AuthService.currentUser.getValue() != null){
  
        this.isLogin=true;
            }
            else{
              this.isLogin=false
            }
  
     })
  }

}
