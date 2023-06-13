import axios from "axios"
import Cards from "../PokeCard/Cards"



import { useEffect, useState } from "react"
import { NavBar } from "./NavBar"
import { SearchInput } from "./SearchInput"
import { Container, Grid } from "@mui/material"
import { Loading } from "./Loading"

export const Home = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        let endPoinsts = []
        for(let i = 1; i <= 60; i++) {
            endPoinsts.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        
        let response = axios.all(endPoinsts.map((endpoint) => axios.get(endpoint))).then((resp) => setPokemons(resp))

        return response
    }

    const filterPokemon = (name) => {
        let filterPokemonsSearch = []
        if(name ==="") {
            getPokemon()
        }
        for(let i in pokemons) {
            if(pokemons[i].data.name.includes(name)) {
                filterPokemonsSearch.push(pokemons[i])
            }
        }
        setPokemons(filterPokemonsSearch)
       
     
    }

    return(
        <div>
            <NavBar />
            <SearchInput filterPokemon={filterPokemon}/>
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? <Loading /> : 
                         pokemons.map((pokemon, key) => {

                          return <Grid item xs={12} sm={6}  md={4} lg={2} key={key} >
                                    <Cards name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} id={pokemon.data.id} />
                                </Grid>
                            })}
                </Grid>
            </Container>
        </div>
    )
}