import { Liga } from './Liga';
export class Equipo {

    id: any;
    nombre: string;
    titulos: number;
    fechaDeFundacion: string;
    liga: Liga;


    constructor(){
        this.nombre = '';
        this.titulos = 0;
        this.fechaDeFundacion = '';
        this.liga = new Liga();
    }

}