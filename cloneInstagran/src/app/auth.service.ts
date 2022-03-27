import { Usuario } from "./usuario.model";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import{getDatabase , ref, set}from"firebase/database"
;
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable()
export class AuthService{
auth: any;
public idToken:any;

constructor(private router: Router){}

public registrarUsuario(usuario:Usuario):Promise<any>{

  const auth = getAuth();
   return createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)

   usuario.senha= "";
const database=getDatabase();
const db=database;
set(ref(db,btoa(`detalhesUsuarios/${usuario.email}`)),{
usuario

})

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode)
    });

}


public logarUsuario(email:string ,senha:string){


let auth = getAuth();
signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
     console.log('esse é um print de usuario ',user)

 user.getIdToken().then(
  (idToken:any)=>{  this.idToken=idToken
    localStorage.setItem( 'idToken', this.idToken)
this.router.navigate(['/home'])

  }
)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;


    console.log (`ouve o seguinte erro`,errorCode,errorMessage)
  });


}



public validarRouter(){
if(this.idToken===undefined&& localStorage.getItem('idToken') !== null){

this.idToken= localStorage.getItem('idToken')

}




return this.idToken!==null&& this.idToken!==undefined;


}


}


