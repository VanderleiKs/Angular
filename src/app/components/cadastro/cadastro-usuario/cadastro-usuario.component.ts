import { UsuariosService } from './../../../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario = {login: '', senha: '', nome: ''};

  constructor(private cadastroService : UsuariosService){}

  public cadastro(){
    this.cadastroService.cadastro(this.usuario)
    
  }

  ngOnInit(): void {
  }

}
