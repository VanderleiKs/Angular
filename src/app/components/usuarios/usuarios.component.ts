import { Usuario } from './../../model/usuario';
import { Observable } from 'rxjs';
import { UsuariosService } from './../../service/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios : Observable<Usuario[]>;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuariosList().subscribe(data =>{
      this.usuarios = data;
    });
  }

}
