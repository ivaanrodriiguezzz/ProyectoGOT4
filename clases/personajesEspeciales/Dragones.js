import { Personaje } from "../Personaje.js";
import { Caminante } from "./Caminante.js";

export class Dragones extends Personaje{

    //Atributos
    #vida;
    #poder; //Nivel de ataque
    #tipoDeAtaque; //fuego,hielo...etc
 
    //Constructor parametrizado
    constructor(nombre,edad,vivo,casa,poder,tipoDeAtaque){
        super(nombre,edad,vivo,casa,null);
        this.#vida=100;
        this.#poder=poder;
        this.#tipoDeAtaque=tipoDeAtaque;
    }

    //Metodo atacar, si el atacante es un Caminante lo mata instantaneamente
    atacar(objetivo){
        if(objetivo instanceof Caminante && this.#tipoDeAtaque=="fuego"){            
            console.log(`${this.getNombre()} ataca al ${objetivo.getNombre()} eliminándolo`);
            objetivo.morir();
        }
        else{
            const danio = Math.floor(this.#poder * (0.7 + Math.random() * 0.6));
            console.log(`${this.getNombre()} ataca a ${objetivo.getNombre()} causando ${danio} puntos de daño`);
            objetivo.recibirDanio(danio);
        }
    }

    //Metodo recibir daño, resta el daño inflingido a su vida
    recibirDanio(puntos){
        this.#vida -= puntos;
        if(this.#vida<=0){
            this.#vida=0;
            this.morir();
        }
    }

    //Metodo morir, si la vida es menor o igual a 0 muere
    morir(){
        if(this.#vida<=0){
            this.#vida=0
            this.setVivo(false);
            console.log(`El Dragon ${this.getNombre()} ha muerto`);        
        }
    }

    //Getters and Setters
    getVida(){
        return this.#vida;
    }
    setVida(vida){
        this.#vida=vida;
    }
    getPoder(){
        return this.#poder;
    }
    setPoder(poder){
        this.#poder=poder;
    }
    getTipoDeAtaque(){
        return this.#tipoDeAtaque;
    }
    setTipoDeAtaque(tipoDeAtaque){
        this.#tipoDeAtaque=tipoDeAtaque;
    }

}