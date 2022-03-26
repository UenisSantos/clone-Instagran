import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Usuario } from 'src/app/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 @Output() public exibieTela:EventEmitter<string>=new EventEmitter<string>();
  constructor(private authService:AuthService) { }


public telaLoguin():void{

this.exibieTela.emit('telaCadastro')
}



  ngOnInit( ): void {}



public formulario:FormGroup= new FormGroup({
'email': new FormControl(null),
'senha': new FormControl(null),
})

public logarUsuario():void{

  let email=this.formulario.value.email;
  let senha=this.formulario.value.senha


this.authService.logarUsuario(email,senha)


}






}
