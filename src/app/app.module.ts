import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { ListaAvionesComponent } from './lista-aviones/lista-aviones.component';
import { RegistrarAvionComponent } from './registrar-avion/registrar-avion.component';
import { ActualizarAvionComponent } from './actualizar-avion/actualizar-avion.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RegistrarReservaComponent } from './registrar-reserva/registrar-reserva.component';
import { ActualizarReservaComponent } from './actualizar-reserva/actualizar-reserva.component';
import { InicioComponent } from './inicio/inicio.component';
import { SalirComponent } from './salir/salir.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    ListaAvionesComponent,
    RegistrarAvionComponent,
    ActualizarAvionComponent,
    ReservaComponent,
    RegistrarReservaComponent,
    ActualizarReservaComponent,
    InicioComponent,
    SalirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
