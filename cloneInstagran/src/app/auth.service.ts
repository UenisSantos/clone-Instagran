import { Usuario } from "./usuario.model";
import * as firebase  from '@firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export class AuthService{




public registrarUsuario(usuario:Usuario){
  console.log('serviço realizado',usuario)


  const auth = getAuth();
  createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode)

      // ..
    });


}


}
