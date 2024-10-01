export default class Motivacio{
    #elem;
    #szuloELEM;
    #index;
    #kattintas;
    #hozzaad;
    constructor(elem,szuloELEM,index){
        this.#elem = elem
        this.#szuloELEM = szuloELEM;
        this.#index = index;
        this.megjelen();
        this.#kattintas = $(".kartya:last-child");
        this.esemeny();
        this.#hozzaad = $(".hozzaad:last");
        console.log(this.#hozzaad);
        
    }

    megjelen(){
        this.#szuloELEM.append(
            `<div class="kartya">
                <p class="hozzaad">nyiss fel</p>
             </div>`
        )
    }

    esemeny(){
        this.#kattintas.on("click", () => {
            const e = new CustomEvent("kattintas", {detail: this.#index});
            window.dispatchEvent(e);
            // console.log(e);
            this.#hozzaad.html(this.#elem)
        });
    }
}