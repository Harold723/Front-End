import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avion } from './avion';


@Injectable({
  providedIn: 'root'
})
export class AvionService {

   //URL obtiene el listado de todos los empleados en el backend
   private baseURL = "http://localhost:8080/App/Aviones";


   constructor(private httpClient: HttpClient) {}
  
  //OBTENER EMPLEADOS
   obtenerListaAviones():Observable<Avion[]>{
    return this.httpClient.get<Avion[]>(`${this.baseURL}/listarAviones`);
   }
  //GUARDAR EMPLEADOS
   ingresarAvion(empleado:Avion):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/guardarAvion`,Avion);
   }
  
   //ACTUALIZAR EMPLEADO
   actualizarAvion(id:number,empleado:Avion):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/actualizarAvion/${id}`,Avion);
   }
  
  //ELIMINAR EMPLEADO
  eliminarAvion(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/eliminarAvion/${id}`);
  }
  //Metodo para obtener o buscar un empleado
  obtenerAvionPorId(id:number):Observable<Avion>{
    return this.httpClient.get<Avion>(`${this.baseURL}/${id}`);
  }
  
  
  }
  