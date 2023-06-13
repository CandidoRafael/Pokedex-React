import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <div className={styles.navbar_container}> 
        <Link to="/">
        <img alt="PokéAPI" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"/>
        </Link>
      
        </div>
    );
};