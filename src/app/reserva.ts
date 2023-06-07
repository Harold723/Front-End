export class Reserva {



    id: number;
    clase_vuelo: string;
    asiento: string;
    fk_id_pasajero: {
        id_pasajero: number;
    };
    fk_id_vuelo: {
        id: number;
    };

}














