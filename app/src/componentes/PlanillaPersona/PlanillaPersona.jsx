import { Component } from "react";
import styles from "./PlanillaPersona.module.css";

class PlanillaPersona extends Component{

    constructor(props){
        super(props);
        const {año} = this.props;
        this.state = {
            año: año,
            cumple: false,
        };
    }

    render(){
        const {apellido, nombre, color} = this.props;
        const cumpleaños = () => {
            console.log(this.state);
            this.setState({año: this.state.año + 1})
        };
        return(
            <div className={styles.estilos}>
                <h1> {apellido},{nombre} </h1>
                <p>Age: {this.state.año}</p>
                <p>Hair Color:{color}</p>
                <button className={styles.btn} onClick={cumpleaños}>El boton de Cumpleaños de {apellido},{nombre} </button>
            </div>
        )
    }
}

export default PlanillaPersona;