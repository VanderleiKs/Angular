import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConstants } from './../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private router: Router) { }

  getUsuariosList(): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl)
  }
  
  cadastro(usuario){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(AppConstants.baseCadastro, JSON.stringify(usuario),httpOptions).subscribe(data =>{
      this.router.navigate(['usuarios']);
    },
    error => {
      alert("Erro ao Cadastrar!");
    }
  );
  }
}
