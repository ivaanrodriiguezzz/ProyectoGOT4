export class Personaje {

    //Atributos de la clase
    #nombre;
    #edad;
    #vivo;  
    #casa;
    #arma;
    
    //Constructor parametrizado
    constructor(nombre,edad,vivo,casa,arma){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#vivo=vivo;
        this.#casa=casa;
        this.#arma=arma;
    }

    //Presentacion donde mostraremos el nombre y la casa a la que pertenece, ponemos getNombre porque casa es un atributo de otra clase que estamos importando
    presentacion(){
        console.log("Soy "+this.#nombre+" de la Casa "+this.#casa.getNombre());
    }

    //En este metodo hacemos referencia a que un personaje puede matar a otro, por ejemplo ponemos john.matar(pork)
    matar(personaje){
        if(personaje.getVivo()){
            personaje.setVivo(false);
        }
    }

    //Aqui en el metodo equipar arma le pasaremos como parametro un arma y se la equiparemos
    equipar_arma(arma) {
        this.#arma=arma;
        console.log(this.#nombre+" ha equipado el arma "+arma.getNombre());
    }

    //Getters and setters, prefiero hacerlo asi porque asi aprendimos con Paco y me parece la manera menos liosa
    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getEdad(){
        return this.#edad;
    }
    setEdad(edad){
        this.#edad=edad;
    }
    getVivo(){
        return this.#vivo;
    }
    setVivo(vivo){
        this.#vivo=vivo;
    }
    getCasa(){
        return this.#casa;
    }
    setCasa(casa){
        this.#casa=casa;
    }
    getArma(){
        return this.#arma;
    }
    setArma(arma){
        this.#arma=arma;
    }
}
