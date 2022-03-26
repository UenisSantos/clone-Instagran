import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Usuario } from 'src/app/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

 @Output()  public exibieTela:EventEmitter<string>=new EventEmitter<string>();


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


public formulario:FormGroup= new FormGroup({

  'email':new FormControl(null),
  'nome_completo':new FormControl(null),
  'nome_usuario':new FormControl(null),
  'senha':new FormControl(null),

})

public cadastrarUsuario(){

let usuario:Usuario= new Usuario (
this.formulario.value.email,
this.formulario.value.senha,
this.formulario.value.nome_completo,
this.formulario.value.nome_usuario,
)

this.authService.registrarUsuario(usuario).then(
  ()=> {

this.valorTelaCadastro()

  }

)




}



public valorTelaCadastro():void{

this.exibieTela.emit('telaLoguin')


}

}
