import {css} from 'lit-element';
export default css`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}



form{
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #7176AD;
    border-radius: 25px;
    color:#D5D6E1;
    
}


input, select{
    padding: 2px;
    margin: 5%;
    background-color: rgb(225, 255, 254);
    border-radius: 10px;
    border:none;
}

.log{
    height: 230px;
    width: 200px;
    margin: 200px;
    margin-bottom: auto;
    padding: 20px;
}

.register{
    height: 430px;
    width: 200px;
    margin: 100px;
    margin-bottom: 10px;
    padding: 20px;
}

.boton{
    background-color: #121647;
    color: azure;
    border-radius: 10px;
}


a{
    color: azure;
}

.link{
    margin:220px;
    margin-top: 15px;
    padding: 25px;
    text-align: center;
    color: azure;
    width: 250px;
    height: 70px;
    background-color: #121647;
    color: azure;
    border-radius: 10px;
}

.formularioR{
    display: none;
}

.formulario{
    display: block;
}

`