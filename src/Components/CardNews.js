class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card"); 
        
        const cardLeft = document.createElement("div");
        const cardRIght = document.createElement("div");

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRIght);

        return componentRoot;
    }

    styles(){}
}
ff
customElements.define("card-news", CardNews)