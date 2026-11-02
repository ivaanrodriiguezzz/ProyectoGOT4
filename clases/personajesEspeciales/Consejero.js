import { Personaje } from "../Personaje.js";

export class Consejero extends Personaje{

    //Atributos
    #especialidad;

    //Constructor parametrizado
    constructor(nombre,edad,vivo,casa,especialidad){
        super(nombre,edad,vivo,casa,null);
        this.#especialidad=especialidad;
    }

    //Metodo luchar
    luchar(){
        console.log(`${this.getNombre()} no lucha con armas, sino con palabras e inteligencia`);
    }

    //Metodo aconsejar
    aconsejar(nombre){
        console.log(`${this.getNombre()} aconseja a ${nombre.getNombre()} sobre ${this.#especialidad}`);
    }

    //Getters y Setters
    getEspecialidad(){
        return this.#especialidad;
    }
    setEspecialidad(especialidad){
        this.#especialidad=especialidad;
    }

}
