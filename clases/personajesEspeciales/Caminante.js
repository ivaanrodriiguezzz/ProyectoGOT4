export class Caminante{

    //Atributos, no extendemos de personaje
    #nombre;
    #vida;
    #poderHelado;
    #vivo;

    //Constructor parametrizado
    constructor(nombre,poderHelado){
        this.#nombre=nombre;
        this.#vida=100;
        this.#poderHelado=poderHelado;
        this.#vivo=true;
    }

    //Metodo atacar como los otro
    atacar(objetivo){
        const danio = Math.floor(this.#poderHelado * (0.7 + Math.random() * 0.6));          
        console.log(`${this.getNombre()} ataca a ${objetivo.getNombre()} causando ${danio} puntos de daño`);
        objetivo.recibirDanio(danio);
    }

    //Metodo recibir daño, si el arma es fuego de dragon muere instantaneamente, sino solo el que le puede inflingir daño tiene que ser de material acero valyrio
    recibirDanio(puntos, arma) {
        if (arma == "fuego") {
            this.morir();
        }
        //Este arma hace referencia a que mientras uqe el objeto arma no sea nulo o indefinido y ademas que sea de acero valyrio entre en el if
        else if (arma && arma.getMaterial() == "acero valyrio") {
            this.#vida -= puntos;
            if (this.#vida <= 0) {
                this.morir();
            }
        }
        else {
            console.log(`El Caminante ${this.getNombre()} no ha recibido daño`);
        }
    }

    morir(){
        this.#vida=0;
        this.setVivo(false);
        console.log(`El Caminante ${this.getNombre()} ha muerto`);
    }

    //Getters and Setters
    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getVida(){
        return this.#vida;
    }
    setVida(vida){
        this.#vida=vida;
    }
    getPoderHelado(){
        return this.#poderHelado;
    }
    setPoderHelado(poderHelado){
        this.#poderHelado=poderHelado;
    }
    getVivo(){
        return this.#vivo;
    }
    setVivo(vivo){
        this.#vivo=vivo;
    }
}