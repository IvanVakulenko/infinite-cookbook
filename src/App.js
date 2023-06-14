import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recepes.js'; // Імпорт компонента "Recipe"

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Container, Toolbar,  Typography, Box, Paper, Grid, Card, CardActions, CardMedia, CardContent, DialogTitle, DialogContent, DialogContentText, DialogActions, Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';


function App() {
  const APP_ID = 'b166a001';
  const APP_KEY = '09cb86c5368feee5e091062c0d39ec35';


  const [recipes, setRecipes] = useState([]); // Стан, що зберігає список рецептів
  const [search, setSearch] = useState(''); // Стан, що зберігає значення пошукового поля
  const [query, setQuery] = useState(''); // Стан, що зберігає значення запиту

  const [favorites, setFavorites] = useState([]); // Стан, що зберігає улюблені рецепти
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Стан, що зберігає вибраний рецепт

  const handleSave = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]); // Додає рецепт до списку улюблених
    setSelectedRecipe(recipe); // Встановлює вибраний рецепт
  };

  useEffect(() => {
    getRecipes(); // Викликає функцію getRecipes після завантаження компонента та при зміні значення query
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    ); // Виконує HTTP-запит до API Edamam для отримання рецептів згідно запиту
    const data = await response.json(); // Конвертує відповідь у форматі JSON
    setRecipes(data.hits); // Зберігає список рецептів у стані
    console.log(data.hits); // Виводить список рецептів у консоль
  };

  const updateSearch = (e) => {
    setSearch(e.target.value); // Оновлює значення пошукового поля при зміні введеного тексту
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search); // Встановлює значення запиту на основі введеного тексту пошуку
    setSearch(''); // Очищує поле пошуку після відправки запиту
  };

  const RecipeCard = ({ recipe }) => {
    const [open, setOpen] = useState(false); // Стан, що відповідає за відкриття/закриття модального вікна

    const handleOpen = () => {
      setOpen(true); // Відкриває модальне вікно
    };

    const handleClose = () => {
      setOpen(false); // Закриває модальне вікно
    };

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className='card'>
          <CardMedia className='cardMedia' title={recipe.recipe.label} image={recipe.recipe.image} />
          <CardContent className='cardContent'>
            <Typography variant='h5' gutterBottom>
              {recipe.recipe.label}
            </Typography>
            <Typography variant='body2' color='textSecondary' gutterBottom>
              <span className='calories'>Calories:</span> {recipe.recipe.calories.toFixed(0)}
            </Typography>
          </CardContent>
          <CardActions className='cardActions' >
            <Button size='small' color='primary' onClick={handleOpen}>
              View
            </Button>
            <Button size='small' color='primary' onClick={() => handleSave(recipe)}>
              Save
            </Button>
          </CardActions>
        </Card>

        <Modal open={open} onClose={handleClose}>
          <div className='cardGridRecipe'>
            
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Calories: {recipe.recipe.calories.toFixed(1)}</p>
            <h5>Ingredients:</h5>
            <ul>
              {recipe.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            <Button className='closeRecipeBotton' variant="contained" onClick={handleClose}>Close</Button>
          </div>
        </Modal>
      </Grid>
    );
  };

  const RecipeList = ({ recipes }) => {
    return (
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.recipe.label} recipe={recipe} />
          ))}
        </Grid>
      </Container>
    );
  };

  const renderContent = () => {
    if (selectedRecipe) {
      return renderSelectedRecipe();
    } else {
      return (
        <>
          <Typography variant="h6" align='center' gutterBottom></Typography>
          <Grid container spacing={3}>
            {/* Код для відображення карток рецептів */}
          </Grid>
        </>
      );
    }
  };

  const renderSelectedRecipe = () => {
    return (
      <>
        <Typography variant="h5" align='center' gutterBottom>
          {selectedRecipe.label}
        </Typography>
          {favorites.map((favorite) => (
            <RecipeCard key={favorite.recipe.label} recipe={favorite} />
          ))}
      </>
    );
  };

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar className='AppBar' position='fixed'>
        <Container>
          <Toolbar className='ToolBar' >
            <Typography className='title' fontSize={30} fontWeight={700}  >
              INFINITE COOKBOOK
            </Typography>
            <Box>
              <Button className='log-in-button' color="inherit" variant="filled" onClick={handleClickOpen}>
                Lasagna In
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title' >
                <DialogTitle id='form-dialog-title'>Log In</DialogTitle>
                <DialogContent>
                  <DialogContentText>Join to our large family of culinary experts</DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Email Address'
                    type='email'
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin='dense'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Log in</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box>
              <Button className='soupUpButton' variant='contained'>
                Soup Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper className='mainFeaturesPost' >
          <Container fixed>
            <div className='overlay' />
            <Grid container>
              <Grid item md={6}>
                <div className='mainFeaturesPostContent'>
                  <Typography className='mainTittle'
                    component="h1"
                    gutterBottom
                    variant="h3"
                  >
                    The Infinite Cookbook
                  </Typography>

                  <Typography
                    component="h5"
                    color="white"
                    paragraph
                  >
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>

        <div className="App">
          <form onSubmit={getSearch} className="search-form">
            <input
              className="search-bar"
              type="text"
              placeholder="Write some tasty food"
              value={search}
              onChange={updateSearch}
            />
            <Button className="search-button" type="submit" endIcon={<SearchIcon />}>
              Search
            </Button>
          </form>
        </div>

        <RecipeList recipes={recipes} />

        <div className='mainContent'>
          <Container maxWidth='md'>
            <Typography
              variant='h2'
              align='center'
              gutterBottom

            >Recipes for all tastes</Typography>

            <Typography
              variant='h5'
              align='center'
              paragraph
              color='textSecondary'

            >
              Lorem ipsum dolor sit amet, consectetur
              Lorem ipsum dolor sit amet, consectetur
              Lorem ipsum dolor sit amet, consectetur
              Lorem ipsum dolor sit amet, consectetur
              Lorem ipsum dolor sit amet, consectetur
              Lorem ipsum dolor sit amet, consectetur
            </Typography>
          </Container>
        </div>

      </main>
      <footer className='footer'>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          The Infinite Cookbook &copy; 2023
        </Typography>
      </footer>
    </>
  );
}

export default App;
