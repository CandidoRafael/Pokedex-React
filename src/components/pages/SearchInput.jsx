import styles from "./SearchInput.module.css"

export const SearchInput = ({filterPokemon}) => {
    return(
        <div className={styles.input_container}> 
            <input type="text" onChange={(e) => filterPokemon(e.target.value.toLowerCase())} placeholder="Look for pokemon"/>
        </div>
    )
}