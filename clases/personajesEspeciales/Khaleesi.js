import { Personaje } from "../Personaje.js";

export class Khaleesi extends Personaje{

    //Atributos
    #dragones;
    #consejero;

    //Constructor parametrizado
    constructor(nombre,edad,vivo,casa,dragones){
        super(nombre,edad,vivo,casa,null);
        this.#dragones=dragones;
        this.#consejero="Tyrion Lannister";
    }

    //Getters and Setters
    getDragones(){
        return this.#dragones;
    }
    setDragones(dragones){
        this.#dragones=dragones;
    }
    getConsejero(){
        return this.#consejero;
    }
    setConsejero(consejero){
        this.#consejero=consejero;
    }

}



