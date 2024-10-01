import MotivacioModel from "../Model/MotivacioModel.js";
import Motivaciok from "../View/Motivaciok.js";

export default class MotivacioController {
    #szuloELEM;
    #model;
    #motivaciokView;
    #darabszam;
    #index;
    #szamlalo;
    #hozzaad;

    constructor(){
        this.#szuloELEM = $(".container");
        this.#model = new MotivacioModel();
        this.#motivaciokView = new Motivaciok(this.#szuloELEM, this.#model.getLista())
        this.esemenyKezelo()
        this.#darabszam =  $(".darabszam");
        this.#index = "";
        this.#szamlalo = $(".szamlalo");
        this.#hozzaad = $(".hozzaad");

    }

    esemenyKezelo(){
        $(window).on("kattintas", (event) => {
            this.#darabszam.empty();
            let index = event.detail;
            this.#motivaciokView.szovegMegjelenit(this.#model.getLista(),index)
            this.#motivaciokView = new Motivaciok(this.#szuloELEM, this.#model.getLista())
            this.#szamlalo.empty();
            this.#model.szamlaloNovel()
            this.#motivaciokView.darabSzamlalo(this.#model.getSzamlaloNovel())

        })
    }
}