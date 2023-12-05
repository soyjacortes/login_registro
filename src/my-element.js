import { LitElement, html } from 'lit-element';
import { login } from './log-in';
import { register } from './register-form';
import styleSheet from './style-sheet';

export class MyElement extends LitElement {

  //FUNCION CONSTRUCTOR
  constructor(){
    super()
    this.saludo="Soy un programador";
    this.parametro=0;
  }

  static get styles(){
    return [styleSheet]
  }

  //FUNCIONES DE GET
  static get properties(){
    return{
      saludo:{type:String}
    };
  }

  static get scopedElements(){
    return {
      "log-in": login,
      "register-form":register
    }
  }

  renderAll(val){
    if (val == 1) {
      this.componentesHtml = html`<register-form></register-form>
                                  <div class ="link" @click=${(e)=>this.componenteR()}>
                                    <p>¿Ya tienes sesion?</p>
                                  </div>`
    }else{
      this.componentesHtml = ""
    }
  }


  //FUNCIONES 
  cambio(){
    this.saludo="Si se puede, todo un programador";
  }

  login(){
    if (this.parametro == 0) {
        return html
          `<log-in></log-in>
            <div class ="link" @click=${(e)=>this.componente()}>
              <p><a>¿No tienes sesion?</a><br></p>
            </div>
       `
    }
  }

  componente(){
    this.parametro = 1
    this.renderAll(this.parametro);
   }

   componenteR(){
    this.parametro = 0
    this.renderAll(this.parametro);
   }
  

  render() {
    return html`
      ${this.componentesHtml}
      ${this.login()}
    `;
  }
}

customElements.define('my-element', MyElement);


/*

return html`
      <p>${this.saludo}<br>
        <a href="./log_in.html">Login</a><br>
        <a href="./register_form.html">Registro</a><br>
      </p>
      <button @click=${(e)=>this.cambio()}>Cambiar</button>
    `;*/