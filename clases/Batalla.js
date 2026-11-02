import { Guerrero } from "./personajesEspeciales/Guerrero.js";
import { Dragones } from "./personajesEspeciales/Dragones.js";
import { Caminante } from "./personajesEspeciales/Caminante.js";

export class Batalla{

    //Atributos
    #casaA;
    #casaB;
    #guerrerosMuertos;
    #guerrerosVivos;

    //Constructor parametrizado
    constructor(casaA,casaB){
        this.#casaA=casaA;
        this.#casaB=casaB;
        this.#guerrerosMuertos=[];
        this.#guerrerosVivos=[];
    }

    //Metodo iniciar batalla
    iniciarBatalla(casaA,casaB){

        //Mientras que la casa A no sea igual a la casa B entra
        if(casaA!=casaB){

            //Creamos dos arrays donde meteremos a los miembros que van a luchar de cada casa
            let guerrerosA = [];
            let guerrerosB = [];

            console.log("Iniciamos la lucha...");

            //Comprobamos si cada guerrero es un guerrero y si estan vivos
            guerrerosA = casaA.miembros.filter(p => p instanceof Guerrero && p.getVivo());
            guerrerosB = casaB.miembros.filter(p => p instanceof Guerrero && p.getVivo());

            let guerrero1 = this.elegirGuerrero(guerrerosA);
            let guerrero2 = this.elegirGuerrero(guerrerosB);

            console.log(`Los guerreros que pelearán de la casa ${casaA.getNombre()} serán los siguientes: `);
            console.log(guerrerosA);
            console.log(`Los guerreros que pelearán de la casa ${casaB.getNombre()} serán los siguientes: `);
            console.log(guerrerosB);

            this.#guerrerosMuertos = [];

            while(guerrerosA.length>0&&guerrerosB.length>0){

                console.log(`\nNuevo enfrentamiento: ${guerrero1.getNombre()} vs ${guerrero2.getNombre()}`);
                
                guerrero1.atacar(guerrero2);
                
                if(guerrero2.getVivo()){
                    guerrero2.atacar(guerrero1);
                }

                if(!guerrero1.getVivo()){
                    guerrerosA.shift();
                    this.#guerrerosMuertos.push(guerrero1);
                }

                if(!guerrero2.getVivo()){
                    guerrerosB.shift();
                    this.#guerrerosMuertos.push(guerrero2);
                }

                console.log(`${guerrero1.getNombre()}: ${guerrero1.getVida()} | ${guerrero2.getNombre()}: ${guerrero2.getVida()}`)
            
                //Si el guerrero 1 esta muerto y el ejercito A sigue tieniendo guerreros, elegimos otro
                if(!guerrero1.getVivo() && guerrerosA.length>0){
                    guerrero1 = this.elegirGuerrero(guerrerosA);
                }
                if(!guerrero2.getVivo() && guerrerosB.length>0){
                    guerrero2 = this.elegirGuerrero(guerrerosB);
                }
            }

            this.#guerrerosVivos = guerrerosA.concat(guerrerosB);

            //Si el ejercito A o el B no tiene guerreros significa que han perdido
            if(guerrerosA.length>0){
                console.log(`La batalla ha sido ganada por la Casa ${casaA.getNombre()}`);
            }
            else{
                console.log(`La batalla ha sido ganada por la Casa ${casaB.getNombre()}`);
            }
            
        }
        else{
            console.log("Una casa no puede enfrentarse a si misma");
        }
    }

    //Eligo que guerrero] va a luchar en la batalla con un random
    elegirGuerrero(guerreros){
        let indice = Math.floor(Math.random() * guerreros.length);
        return guerreros[indice];
    }

    //Metodo guerreros muestos le paso un array que creare en batalla que lo vaya cargando con los que mueren en combate
    mostrarGuerrerosMuertosEnCombate(){
        console.log(this.#guerrerosMuertos);
    }

    //Metodo mostrar supervivientes, ire mostrando un array que cargare en inicar Batalla en los que los guerreros salgan vivos del combate
    mostrarSupervivientes(){
        console.log(this.#guerrerosVivos);
    }

    //Metodo en la que se unen los guerreros de la casa Stark y los dragones de Daenerys.
    batallaFinal(casaStark, khaleesi, caminantes){

        //Creamos dos arrays donde guardaremos los guerreros que van a luchar
        let ejercitoBueno = [];
        let ejercitoMalo = [];

        console.log("Empieza la batalla final");

        //Comprobamos que sean Guerreros y dragones, y que esten vivos
        let guerrerosBuenos = casaStark.miembros.filter(g=>g instanceof Guerrero && g.getVivo());
        
        let dragones = khaleesi.getDragones().filter(d=>d instanceof Dragones && d.getVivo());

        //Unimos a los guerreros buenos y los dragones en un ejercito
        ejercitoBueno = guerrerosBuenos.concat(dragones);

        //Rellenamos un array con todos los que sean caminantes y que esten vivos
        ejercitoMalo = caminantes.filter(c=>c instanceof Caminante && c.getVivo());


        console.log("Ejercito Bueno: ");
        console.log(ejercitoBueno);


        console.log("Ejercito Malo: ");
        console.log(ejercitoMalo);

        this.#guerrerosMuertos=[];

        //Mientras que el ejercito bueno y malo no llegue a 0 significa que siguen guerreros en pie para luchar
        while(ejercitoBueno.length>0 && ejercitoMalo.length>0){

            let guerreroBueno = this.elegirGuerrero(ejercitoBueno);
            let guerreroMalo = this.elegirGuerrero(ejercitoMalo);

            console.log("----------------------------");

            console.log(`Nuevo enfrentamiento: ${guerreroMalo.getNombre()} vs ${guerreroBueno.getNombre()}`);

            //El caminante ataca al guerrero, si no lo mata el guerrero ataca al caminante, en el caso que mueran se mete en el array de muertos
            guerreroMalo.atacar(guerreroBueno);

            if(guerreroBueno.getVivo()){
                guerreroBueno.atacar(guerreroMalo);
            }

            if(!guerreroMalo.getVivo()){
                this.#guerrerosMuertos.push(guerreroMalo);
            }

            if(!guerreroBueno.getVivo()){
                this.#guerrerosMuertos.push(guerreroBueno);
            }

            //Caminante Juan : 0 | Dragon Fújur : 40
            console.log(`${guerreroBueno.getNombre()}: ${guerreroBueno.getVida()} | ${guerreroMalo.getNombre()}: ${guerreroMalo.getVida()}`);
        
            console.log("----------------------------");

            //ACtualizamos el ejercito porque sino habira muertos dentro del ejercito y no queremos eso
            ejercitoBueno = ejercitoBueno.filter(e => e.getVivo());
            ejercitoMalo = ejercitoMalo.filter(e => e.getVivo());

        }

        this.#guerrerosVivos = ejercitoBueno.concat(ejercitoMalo);

        console.log("----------------------------");

        //Comprobamos quien ha ganado
        if(ejercitoBueno.length>0){
            console.log("El Ejercito Bueno ha ganado la batalla final");
        }
        else{
            console.log("El Ejercito Malo ha ganado la batalla final");
        }

        console.log("----------------------------");

        console.log("Muertos en combate:");
        this.mostrarGuerrerosMuertosEnCombate();

        console.log("Supervivientes:");
        this.mostrarSupervivientes();

        console.log("----------------------------");
    }

    //Getters y Setters
    getCasaA(){
        return this.#casaA;
    }
    setCasaA(casaA){
        this.#casaA=casaA;
    }
    getCasaB(){
        return this.#casaB;
    }
    setCasaB(casaB){
        this.#casaB=casaB;
    }

}