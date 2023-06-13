import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import { CardActionArea } from '@mui/material';
import styles from "./Card.module.css"

export default function Cards({name, image,types, id }) {


 const pokemonClass = types[0].type.name
  return (

    
    <Card sx={{ maxWidth: 345 }}>
    

    <CardActionArea className={styles.dec}>

    <Link to={`pokemon/${id}`}>
     <CardMedia
          component="img"
          image={image}
          alt="pokemon Image"
          className={`${styles[pokemonClass]}`}
          
        />
    </Link>
       
        <CardContent className={styles.cardContent}>
          <Typography 
          component="div" 
          fontWeight="bold"
          letterSpacing={3}
          bgcolor="#3c5aa6"
          padding={1.2}
          marginBottom={1.2}
          color="#ffcb05"
          borderRadius={1}
          display="flex"
          justifyContent="center"
          >
            {name}
          </Typography>
          <Typography
            gutterBottom variant='h6'
            letterSpacing={1}
            className={styles.typeEffect}
          >
            {types[0].type.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}