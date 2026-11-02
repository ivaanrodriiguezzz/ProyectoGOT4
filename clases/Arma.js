export class Arma{

    //Atributos
    #nombre; 
    #danio; 
    #tipo; 
    #material;

    //Constructor parametrixado
    constructor(nombre,danio,tipo,material){
        this.#nombre=nombre;
        this.#danio=danio;
        this.#tipo=tipo;
        this.#material=material;
    }

    //Descripcion de cada arma mostrando el nombre tipo y danio
    descripcion(){
        console.log(this.#nombre + "("+this.#tipo+") - daño: "+this.#danio+" - material: "+this.#material);
    }

    //Getters y Setters
    getNombre(){
    return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getDanio(){
        return this.#danio;
    }
    setDanio(danio){
        this.#danio=danio;
    }
    getTipo(){
        return this.#tipo;
    }
    setTipo(tipo){
        this.#tipo=tipo;
    }
    getMaterial(){
        return this.#material;
    }
    setMaterial(material){
        this.#material=material;
    }

}