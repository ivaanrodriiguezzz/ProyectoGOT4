import { Personaje } from "../Personaje.js";

export class Guerrero extends Personaje{
    
    //Atributos
    #arma;
    #vida;

    //Constructor parametrizado
    constructor(nombre,edad,vivo,casa,arma){
        super(nombre,edad,vivo,casa,arma);
        this.#arma=arma;
        this.#vida=100;
    }

    //Metodo recibir daño
    recibirDanio(puntos){
        this.#vida -= puntos;
        if(this.#vida<=0){
            this.#vida=0;
            this.morir();
        }
    }

    //Metodo morir
    morir(){
        this.setVivo(false);
        console.log(`${this.getNombre()} ha muerto`);
    }

    //Metodo atacar
    atacar(objetivo){
        const danioCalculado = Math.floor(this.getArma().getDanio() * (0.7 + Math.random() * 0.6));
        console.log(`${this.getNombre()} ataca a ${objetivo.getNombre()} causando ${danioCalculado} puntos de daño`);
        objetivo.recibirDanio(danioCalculado, this.getArma());
    }

    //Getters y Setters
    getVida(){
        return this.#vida;
    }
    setVida(vida){
        this.#vida=vida;
    }

}
