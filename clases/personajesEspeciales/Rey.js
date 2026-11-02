import { Personaje } from "../Personaje.js";

export class Rey extends Personaje{
    
    //Atributos  
    #aniosDeReinado;

    //Constructor parametrizado
    constructor(nombre,edad,vivo,casa,aniosDeReinado){
        super(nombre,edad,vivo,casa,null);
        this.#aniosDeReinado=aniosDeReinado;
    }

    //Metodo luchar
    luchar(){
        console.log(`${this.getNombre()} lidera la batalla y anima a sus tropas`);
    }

    //Metodo gobernar
    gobernar(){
        console.log(`${this.getNombre()} gobierna con sabiduría desde hace ${this.#aniosDeReinado} años.`);
    }

    //Getters y Setters
    getAniosDeReinado(){
        return this.#aniosDeReinado;
    }
    setAniosDeReinado(aniosDeReinado){
        this.#aniosDeReinado=aniosDeReinado;
    }

}
