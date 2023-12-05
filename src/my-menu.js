import { LitElement, html} from "lit-element";
import styleScss from "./my-elementStyle";

export class menuMatematico extends LitElement {
    static get styles(){
        return [styleScss]
    }

    render() {
        return html`
            <div class="contenedor">
            <div class="numeros1">
                <div id="izq" class="gif"><img src="./img/Cero.gif"></div>
                <div class="gif"><img src="./img/Uno.gif"></div>
                <div id="izq" class="gif"><img src="./img/Dos.gif"></div>
                <div id="der" class="gif"><img src="./img/Tres.gif"></div>
            </div>
            <div class="subcontenedor">
                <div id="num1"class="gif"><img src="./img/Nueve.gif"></div>
                <div class="contenedormenumate">
                    <div class="bienvenida"><P>Bienvenido!, Por favor elige cual ejercicio deseas resolver ☜ ( ͡❛ ͜ʖ ͡❛)</P></div>
                    <div class="ejerciciosmate">
                        <a href="#"><p>Ejercicio 1: Serie Fibonnacci</p></a>
                        <a href="#"><p>Ejercicio 2: Orden Alfabético</p></a>
                        <a href="#"><p>Ejercicio 3: Triángulo Pascal</p></a>
                        <a href="#"><p>Ejercicio 4: El hombre y el caballo</p></a>
                        <a href="#"><p>Ejercicio 5: Los Tres faros</p></a>
                        <a href="#"><p>Ejercicio 6: Encuentra número parte 1</p></a>
                        <a href="#"><p>Ejercicio 7: Encuentra número parte 2</p></a>
                        <a href="#"><p>Ejercicio 8: El Hotel</p></a>
                        <a href="#"><p>Ejercicio 9: Los Tres números de tres letras</p></a>
                        <a href="#"><p>Ejercicio 10: Los Cuatro nueves</p></a>
                    </div>
                </div>
                <div id="num2" class="gif"><img src="./img/Cuatro.gif"></div>
            </div>
            <div class="numeros1">
                <div id="izq" class="gif"><img src="./img/Ocho.gif"></div>
                <div id="der" class="gif"><img src="./img/Siete.gif"></div>
                <div class="gif"><img src="./img/Seis.gif"></div>
                <div id="izq" class="gif"><img src="./img/Cinco.gif"></div>
            </div>
            </div>
        `;
}
}

customElements.define('my-menu', menuMatematico);
