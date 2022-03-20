import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

 @Output()  public exibieTela:EventEmitter<string>=new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

public valorTelaCadastro():void{

this.exibieTela.emit('telaCadastro')


}

}
