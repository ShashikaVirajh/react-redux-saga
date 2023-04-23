import { Grid, Typography } from '@mui/material';
import { CocktailCard } from './components/cocktail-card.component';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { fetchRandomCocktailRequest } from './store/cocktail/cocktail.actions';

export const App: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const cocktailList = useSelector((state: RootState) => state.cocktail.cocktailList);
  const loading = useSelector((state: RootState) => state.cocktail.loading);
  const error = useSelector((state: RootState) => state.cocktail.error);

  useEffect(() => {
    dispatch(fetchRandomCocktailRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <Typography textAlign='center' mt='20rem' color='blue'>
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography textAlign='center' mt='20rem' color='red'>
        ERROR: {error}
      </Typography>
    );
  }

  return (
    <Grid container justifyContent='center' spacing={'1rem'}>
      {cocktailList.map((cocktail, index) => (
        <Grid key={index} item xs={2}>
          <CocktailCard key={cocktail.cocktailId} cocktailInfo={cocktail} />
        </Grid>
      ))}
    </Grid>
  );
};
