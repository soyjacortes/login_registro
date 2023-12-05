import { LitElement, html } from 'lit-element';
import styleSheet from './style-sheet';

export class login extends LitElement {
  constructor(){
    super()
    this.user="Programmer";
    this.pass="tomate";
    this.celular;
    this.id;
    this.typeDoc;
  }

  static get properties(){
    return{
      user:{type:String},
      pass:{type: String},
      celular:{type:Number},
      id:{type:Number},
      typeDoc:{type:String}
    };
  }

  static get styles(){
    return[styleSheet]
  }


  iniciar(){
    let userLogin = this.shadowRoot.querySelector('#user').value;
    let passLogin = this.shadowRoot.querySelector('#pass').value;

    if (userLogin == "") {
      alert("Por favor, ingresa tu nombre.");
    }
    if (passLogin == "") {
      alert("Por favor, ingresa tu contraseña.");
    } else if (userLogin == this.user && passLogin == this.pass) {
      alert('Has iniciado sesión correctamente.');
    } else {
      alert('Datos Invalidos.')
    }
  }

  registro(){
    let log = this.shadowRoot.querySelector('.formulario');
    let regis = this.shadowRoot.querySelector('.formularioR');
    log.style.display = 'none';
    regis.style.display = 'block';

  }

  inicio(){
    let log = this.shadowRoot.querySelector('.formulario');
    let regis = this.shadowRoot.querySelector('.formularioR');
    regis.style.display = 'none';
    log.style.display = 'block';
  }

  
  
  render() {
    return html`
    <div class="formulario">
      <form id="login" class="log">
        <p>Login</p>
        <label for="">Ingresa tu nombre: </label>
        <input type="text" placeholder="Name" id="user"> <br>
        <label for="">Ingresa tu contraseña</label>
        <input type="password" name="" id="pass" placeholder="*******"><br> 

        <input class="boton" type="submit" value="Ingresar" @click=${(e)=>this.iniciar()}><br> 
        <div @click=${(e)=>this.registro()}>Registrarme</div>
      </form>
      
    </div>
    <div class="formularioR">
      <form class = "register">
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
        <input type="number" placeholder="0123456789"> <br>
        <label for="">Ingresa tu contraseña: </label>
        <input type="text" placeholder="********"> <br>
        <input type="submit" class="boton" value="Registrar" @click=${(e)=>this.registrar()}><br>
        <div @click=${(e)=>this.inicio()}>Inicio Sesion</div>
      </form>
  </div>

    `;
  }
}

customElements.define('log-in', login);