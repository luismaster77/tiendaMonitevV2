import { HttpClient } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { User } from "app/shared/services/user";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userData: any; 
     
    constructor(private http: HttpClient,
                public afs: AngularFirestore,   
                public afAuth: AngularFireAuth, 
                public router: Router,  
                public ngZone: NgZone ){


    this.afAuth.authState.subscribe(user =>{
        if(user){
            this.userData = user;
            localStorage.setItem('user', JSON.stringify(this.userData));
            JSON.parse(localStorage.getItem('user'));
        }else{
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
            } 
        })
    }

    SignIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
          .then((result) => {
            this.ngZone.run(() => {
              this.router.navigate(['index']);
            });
            this.SetUserData(result.user);
          }).catch((error) => {
            return error.message
          })
      }

      SetUserData(user){
          const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/$user.uid`);
          const userData: User = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              emailVerified: user.emailVerified
          }
          
          return userRef.set(userData);
      }
    
}
