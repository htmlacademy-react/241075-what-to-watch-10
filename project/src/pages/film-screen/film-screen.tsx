import Footer from '../../components/footer/footer';
import { Films } from '../../types/films';
import Header from '../../components/header/header';
import {useNavigate, useParams, Link} from 'react-router-dom';

type FilmScreenProps = {
  films: Films[];
  isAuth: boolean;
}

function FilmScreen({films, isAuth}: FilmScreenProps): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const film = films.find((filmA) => String(filmA.id) === params.id) as Films;

  const onPlayButtonClickHandler = () => {
    const path = `/player/${film.id}`;
    navigate(path);
  };

  const onMyListButtonClickHandler = () => {
    const path = '/mylist';
    navigate(path);
  };
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header isAuth={isAuth} />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={onPlayButtonClickHandler}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={onMyListButtonClickHandler}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to="#" className="film-nav__link">
                      Overview
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">
                      Details
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">
                    {film.scoresCount} ratings
                  </span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film.description}</p>
                <p>
                  Gustave prides himself on providing first-className service to
                  the hotel&apos;s guests, including satisfying the sexual needs
                  of the many elderly women who stay there. When one of
                  Gustave&apos;s lovers dies mysteriously, Gustave finds himself
                  the recipient of a priceless painting and the chief suspect in
                  her murder.
                </p>

                <p className="film-card__director">
                  <strong>Director: {film.director}</strong>
                </p>

                <p className="film-card__starring">
                  <strong>Starring: {film.starring}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                  alt="Fantastic Beasts: The Crimes of Grindelwald"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Fantastic Beasts: The Crimes of Grindelwald
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/bohemian-rhapsody.jpg"
                  alt="Bohemian Rhapsody"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Bohemian Rhapsody
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/macbeth.jpg"
                  alt="Macbeth"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Macbeth
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/aviator.jpg"
                  alt="Aviator"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Aviator
                </a>
              </h3>
            </article>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
