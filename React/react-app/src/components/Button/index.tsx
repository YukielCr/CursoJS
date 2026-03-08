//importacion para crear el proyecto: tsrfce

// Instale esto en react-app: npm i styled-components


import { ReactNode } from "react";
import styled from "styled-components";


type BtnProps = {
  isLoading?: boolean;
}


// Adentro de estas cosas se agregan los estilos css ``
const Btn=styled.button<BtnProps>`
  background-color: ${props => props.isLoading ? "gray" : "blue"};
  padding: 25px 30px;
`


//import styles from "./Button.module.css";


type Props = {
  children?: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
}



//  Esta forma ya no es muy utilizada 
/** 
const style = {
  backgroundColor: "#007bff",
};
*/
//console.log(styles);

function Button({ children, isLoading, onClick }: Props) {

/** 
  const className = [
    `btn btn-${isLoading ? "secondary" : "primary"}`
    , styles.button
  ].join(" ")
  */
  return (
    <Btn
      /**
      style={style}
      */
      disabled={isLoading}
      onClick={onClick}
      type="button"
      isLoading={isLoading}
      //className={[styles.button,styles.padded].join(" ")}
      //className={`btn btn-${isLoading ? "secondary" : "primary"}`} 
      //className={className}
    >
      {isLoading ? "Cargando..." : children}
    </Btn>


  )
}



export default Button