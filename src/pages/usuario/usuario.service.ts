import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService{
    private usuarioUrl = 'http://localhost:17863/api/usuario/getUsuariosAtivos';

    constructor(private http: Http){ }

    buscarUsuariosAtivos(): Promise<Usuario[]>{
        return this.http.get(this.usuarioUrl).toPromise().then(response => response.json().data as Usuario[]).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}

export class Usuario{
    usr_ID: number;
    usr_Nome: string;
    usr_Email: string;
    usr_Senha: string;
    usr_Perfil_ID: number;
    usr_Status: string;
}


