import { Films } from '../types/films';
import FilmCard from './film-card/film-card';
import { useState } from 'react';

type FilmsListProps = {
  films: Films[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState({});

  const setActive = (id: number) => {
    const selectedCard = films.filter((film) => film.id === id);
    setActiveFilm(selectedCard);
  };

  const filmsList =
      films?.map((film) => (
        <FilmCard key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} setActiveFilm={setActive}/>
      ));

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default FilmsList;
