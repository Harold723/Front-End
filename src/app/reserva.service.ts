import { Injectable } from '@angular/core';
import { Reserva } from './reserva';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private httpClient: HttpClient) { }


  //URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/Reserva";


  //OBTENER EMPLEADOS
  obtenerListaReserva(): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(`${this.baseURL}/listarReserva`);
  }
  //GUARDAR EMPLEADOS
  ingresarreserva(empleado: Reserva): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/guardarReserva`, Reserva);
  }

  //ACTUALIZAR EMPLEADO
  actualizarReserva(id: number, empleado: Reserva): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/actualizarReserva/${id}`, Reserva);
  }

  //ELIMINAR EMPLEADO
  eliminarreserva(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/eliminarReserva/${id}`);
  }
  //Metodo para obtener o buscar un empleado
  obtenerreservaPorId(id: number): Observable<Reserva> {
    return this.httpClient.get<Reserva>(`${this.baseURL}/${id}`);
  }
}
