import Motivacio from "./Motivacio.js";

export default class Motivaciok{
    #szuloELEM;
    #lista;
    #elem;
    #darabszam
    #model
    #szamlalo;
    constructor(szuloELEM, lista){
        this.#szuloELEM = szuloELEM;
        this.#lista = lista;
        this.#szuloELEM.empty();
        this.kiir()
        this.#darabszam =  $(".darabszam");
        this.#szamlalo = $(".szamlalo");

    }

    kiir(){
        this.#lista.forEach((elem,index) => {
            new Motivacio(elem,this.#szuloELEM,index)
            
            
        });
    }

    szovegMegjelenit(lista,index){
        this.#darabszam.append(this.#lista[index])
    }

    darabSzamlalo(szam){
        this.#szamlalo.append(`<p>felnyitottak szama: ${szam}</p>`)
    }

    



    setDarab(elem){
        this.#elem = elem;
    }
}