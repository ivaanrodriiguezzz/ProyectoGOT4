import { Casa } from './clases/Casa.js';
import { Arma } from './clases/Arma.js';
import { Guerrero } from './clases/personajesEspeciales/Guerrero.js';
import { Dragones } from './clases/personajesEspeciales/Dragones.js';
import { Caminante } from './clases/personajesEspeciales/Caminante.js';
import { Khaleesi } from './clases/personajesEspeciales/Khaleesi.js';
import { Batalla } from './clases/Batalla.js';

const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

const garra = new Arma("Garra", 90);
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del Norte", 80);
const espadaLarga = new Arma("Espada Larga", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", 60);

const jon = new Guerrero("Jon Snow", 25, true, casaStark, garra);
const arya = new Guerrero("Arya Stark", 18, true, casaStark, aguja);
const robb = new Guerrero("Robb Stark", 22, false, casaStark, espadaLarga);
const brienne = new Guerrero("Brienne de Tarth", 30, true, casaStark, hacha);

const jaime = new Guerrero("Jaime Lannister", 32, true, casaLannister, filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, true, casaLannister, lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, true, casaLannister, ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, true, casaLannister, hacha);

casaStark.añadir_miembro(jon);
casaStark.añadir_miembro(arya);
casaStark.añadir_miembro(robb);
casaStark.añadir_miembro(brienne);

casaLannister.añadir_miembro(jaime);
casaLannister.añadir_miembro(cersei);
casaLannister.añadir_miembro(tyrion);
casaLannister.añadir_miembro(gregor);

const drogon = new Dragones("Drogon", 100, true, null, 100, "fuego");
const viserion = new Dragones("Viserion", 100, true, null, 80, "fuego");
const rhaegal = new Dragones("Rhaegal", 100, true, null, 90, "fuego");

const daenerys = new Khaleesi("Daenerys Targaryen", 25, true, null, [drogon, viserion, rhaegal]);

const caminantes = [];

const caminante1 = new Caminante("Caminante Blanco 1", 50);
const caminante2 = new Caminante("Caminante Blanco 2", 60);
const caminante3 = new Caminante("Caminante Blanco 3", 70);
const caminante4 = new Caminante("Caminante Blanco 4", 80);
const caminante5 = new Caminante("Caminante Blanco 5", 90);

caminantes.push(caminante1);
caminantes.push(caminante2);
caminantes.push(caminante3);
caminantes.push(caminante4);
caminantes.push(caminante5);

casaStark.mostrar_miembros();
casaLannister.mostrar_miembros();

console.log("Dragones de Daenerys:");
console.log(daenerys.getDragones());

console.log("Ejercito de caminantes:");
console.log(caminantes);

const batallaFinal = new Batalla();

batallaFinal.batallaFinal(casaStark, daenerys, caminantes);
