import styles from "./ModalCards.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { NavBar } from "../pages/NavBar"
import { Box, Divider } from "@mui/material"

export const ModalCards = () => {

    const { id } = useParams()
  

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
     .then(resp => resp.data)
     .then(data => setPokemon(data))
    }, [id])

    if(pokemon === null) {
        return <p>...</p>
    }

    return(
        <>
        <NavBar />
        <div className={styles.modalContainer}>
            <div> 
                <h1>{pokemon.name}</h1>
               <img src={pokemon.sprites.back_default} alt="pokemon_image"/>
               <img src={pokemon.sprites.front_default} alt="pokemon_image"/>
            </div>
            <h2>Pokemon data</h2>
            <div className={styles.pokemonData}>
                <div className={styles.pokemonContainer}>
                    <p>Type: </p>
                    <span> {pokemon.types.length > 1 && (
                        <span>{pokemon.types[1].type.name} | </span> 
                    )}  {pokemon.types[0].type.name}
                    </span>
                </div>
                <div className={styles.pokemonContainer}>
                    <p>Height:</p> <span> {pokemon.height}cm</span>
                </div>
                <div className={styles.pokemonContainer}>
                    <p>Weight:</p> <span> {pokemon.weight}g</span>
                </div>
                    <Box width="100%">
                        <Divider><h2>Variations</h2></Divider>
                        <Box component="img" src={pokemon.sprites.front_female} width="30%" height="30%" />
                        <Box component="img" src={pokemon.sprites.front_shiny}  width="30%" height="30%" />
                        <Box component="img" src={pokemon.sprites.front_shiny_female} width="30%" height="30%" />
                    </Box>
            </div>
        </div>
        </>
    
       
    )
}
