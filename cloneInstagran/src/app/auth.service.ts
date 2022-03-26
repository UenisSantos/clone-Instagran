import { Usuario } from "./usuario.model";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import{getDatabase , ref, set}from"firebase/database"
;
export class AuthService{




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
  console.log(email, senha)


const auth = getAuth();
signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
     console.log(user)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;


    console.log (`ouve o seguinte erro`,errorCode,errorMessage)
  });
}


}


