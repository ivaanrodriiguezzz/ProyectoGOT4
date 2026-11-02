export class Casa{

    //Atributos
    nombre;
    lema;
    miembros;

    //Constructor parametrizado
    constructor(nombre,lema){
        this.nombre=nombre;
        this.lema=lema;
        this.miembros=[];
    }

    //Este metodo agrega un objeto a nuestro array miembros, voy a crear una variable existe uqe sea booleano diciemdome si existe o no dentro del array
    añadir_miembro(miembro){
    let existe=this.miembros.some(m=>m.getNombre()===miembro.getNombre());    
    if(!existe){
            this.miembros.push(miembro);
            console.log(miembro.getNombre()+" ha sido añadido a la Casa "+this.nombre);
        }
    }

    //Mostramos miembros de cada Casa, para llamarla podemos poner por ejemplo stark.mostrar_miembros() y se mostrarian todos los nombres de los miembros
    mostrar_miembros(){
        console.log("Miembros de la Casa "+this.nombre+":");
        for(let miembro of this.miembros){
            console.log("- "+miembro.getNombre());
        }
    }

    //Getters y Setters
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    getLema(){
        return this.lema;
    }
    setLema(lema){
        this.lema=lema;
    }
    getMiembros(){
        return this.miembros;
    }
    setMiembros(miembros){
        this.miembros=miembros;
    }

}