import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { InferGetServerSidePropsType } from "next/types";
import React, { FC } from "react";
import Layout from "../components/Layout";

interface RecipesProps {
  randomRecipes : any
}

const Recipes: FC<RecipesProps> = ({randomRecipes}) => {
  
  return (
    <Layout>
    {/* <h1>{JSON.stringify(randomRecipes)}</h1> */}
    {randomRecipes.map((item : any) => <h1 key={item.id}>{item.title}</h1>)}
    <Grid container spacing={2}>
      {/* in material there are props on elements xs, sm, md ... for different screen sizes */}
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={randomRecipes.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {randomRecipes.title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {randomRecipe.summary}
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button color="secondary" size="small">
              Share
            </Button>
            <Button color="secondary" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ry_6jHIvcWLNjKfrygPhrQHaE7%26pid%3DApi&f=1&ipt=482a6426d0383d868f85795f6cbf646d5ec01f5919c1c4575cb685d036bd1291&ipo=images"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Spaghetti
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="secondary" size="small">
              Share
            </Button>
            <Button color="secondary" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ry_6jHIvcWLNjKfrygPhrQHaE7%26pid%3DApi&f=1&ipt=482a6426d0383d868f85795f6cbf646d5ec01f5919c1c4575cb685d036bd1291&ipo=images"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Spaghetti
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="secondary" size="small">
              Share
            </Button>
            <Button color="secondary" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Layout>
)};

export async function getServerSideProps() {
  const apiKey : string = '0a5e3d2223834cba83b122bb30bb25c6';
  let randomRecipe;
  try {
    randomRecipe = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=2`
    );
  } catch (error) {
    console.log("error", error);
  }
  console.log("recipe", randomRecipe?.data.recipes);

  return {
    props: {
      randomRecipes: randomRecipe?.data.recipes
    },
  };
}

export default Recipes;
