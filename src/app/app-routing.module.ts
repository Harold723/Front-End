import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RegistrarReservaComponent } from './registrar-reserva/registrar-reserva.component';
import { ActualizarReservaComponent } from './actualizar-reserva/actualizar-reserva.component';

import { InicioComponent } from './inicio/inicio.component';
import { SalirComponent } from './salir/salir.component';



//ARREGLAR ESTO
const routes: Routes = [
  { path: 'Sistema', component: InicioComponent },
  { path: 'Salir', component: SalirComponent },
  { path: 'Sistema/empleados', component: ListaEmpleadosComponent },
  //{path: '',redirectTo:'empleados',pathMatch:'full'},
  { path: 'Sistema/empleados/registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
  { path: 'Sistema/Reserva', component: ReservaComponent },
  //{path: '',redirectTo:'empleados',pathMatch:'full'},
  { path: 'Sistema/Reserva/Registrar-Reserva', component: RegistrarReservaComponent },
  { path: 'actualizar-Reserva/:id', component: ActualizarReservaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
