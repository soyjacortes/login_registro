import { LitElement, html } from 'lit-element';
import styleSheet from './style-sheet';

export class register extends LitElement {
  constructor(){
    super()
    this.user;
    this.pass;
    this.celular;
    this.id;
    this.typeDoc;
  }

  static get properties(){
    return{
      user:{type:String},
      pass:{type:String},
      celular:{type:Number},
      id:{type:Number},
      typeDoc:{type:String}
    }   
  }
  static get styles(){
    return [styleSheet]
  }
  render() {
    return html`
      <div class="formulario">
        <form action="" method="post" class = "register">
          <p>Registro</p>
          <label for="">Ingresa tu nombre: </label>
          <input type="text" placeholder="Name"> <br>
          <label for="">Ingresa tu celular</label>
          <input type="number" name="" id="" placeholder="(+57) 3015106468"><br>
          <label for="">Ingresa tipo de documento</label>
          <select name="" id="">
            <option value="">Selecciona una Opción</option>
            <option value="">Tarjeta Identidad</option>
            <option value="">Cedula</option>
            <option value="">Cedula Extranjero</option>
          </select><br>
          <label for="">Ingresa tu Número de Identidad: </label>
          <input type="number" placeholder="1111111111"> <br>
          <label for="">Ingresa tu contraseña: </label>
          <input type="text" placeholder="********"> <br>
          <input type="submit" class="boton" value="Registrar" @click=${(e)=>this.registrar()}>
        </form>
      </div>
      
    
    `;
  }
}

customElements.define('register-form', register);