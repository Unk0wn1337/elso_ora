import Motivacio from "./Motivacio.js";

export default class Motivaciok{
    #szuloELEM;
    #lista;
    #elem;
    #darabszam
    constructor(szuloELEM, lista){
        this.#szuloELEM = szuloELEM;
        this.#lista = lista;
        this.#szuloELEM.empty();
        this.kiir()
        this.#darabszam =  $(".darabszam");
    }

    kiir(){
        this.#lista.forEach((elem,index) => {
            new Motivacio(elem,this.#szuloELEM,index)
            
            
        });
    }

    szovegMegjelenit(){

    }

    // this.#darabszam.append(this.#model.getLista()[index])
    



    setDarab(elem){
        this.#elem = elem;
    }
}