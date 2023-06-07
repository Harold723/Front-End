import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  Reserva: Reserva[];

  constructor(private reservaServicio: ReservaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerReservas();

  }

  // actualizarReserva(id: number) {
  //   this.router.navigate(['Sistema/empleados/actualizar-reserva/:id', id]);
  // // }

  private obtenerReservas() {
    this.reservaServicio.obtenerListaReserva().subscribe(dato => {
      this.Reserva = dato;
    });
  }



  // eliminarEmpleado(id_empleado: number) {
  //   this.empleadoServicio.eliminarEmpleado(id_empleado).subscribe(dato => {
  //     console.log(dato);
  //     this.obtenerEmpleados();

  //   });
  // }

  // eliminarEmpleado(id_empleado: number) {
  //   this.reservaServicio.eliminarreserva(id_empleado).subscribe(
  //     (dato: any) => {
  //       console.log(dato);
  //       this.obtenerEmpleados();
  //     },
  //     (error: HttpErrorResponse) => {
  //       if (error instanceof SyntaxError && error.status === 200) {
  //         console.log(`Empleado eliminado con el id: ${id_empleado}`);
  //         this.obtenerEmpleados();
  //       } else {
  //         console.error('Error al eliminar el empleado:', error);
  //       }
  //     }
  //   );
  // }



}
