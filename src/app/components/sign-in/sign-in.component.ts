import { Component ,OnInit} from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  isSignedIn: boolean = false;

  constructor(public firebaseService: FirebaseService){}

  ngOnInit(): void {
    if( localStorage.getItem('user') != null)
      this.isSignedIn = true;
    else
      this.isSignedIn = false;
  }

  async onSignUp(email: string,password:string){
    await this.firebaseService.signUp(email,password);
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
    }
  }
  async onSignIn(email: string,password:string){
    await this.firebaseService.signIn(email,password);

    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
    }
  }

  handleLogout(){
    this.isSignedIn = false;
  }

}
