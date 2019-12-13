import React, { useEffect, useReducer, Fragment } from 'react';
import axios from 'axios';
import Loading from '../LoadingIndicator';
import './style.scss';

function MovieContainer() {
  function fetchMovieAPIReducer(state, action) {
    switch (action.type) {
      case 'FETCH_INIT': {
        console.log('Loading');
        return { ...state, isLoading: true };
      }
      case 'FETCH_SUCCESS': {
        console.log(action.payload.data);
        return { ...state, data: action.payload.data, isLoading: false };
      }
      case 'FETCH_FAILURE': {
        return { ...state, isError: true, isLoading: false, data: null };
      }
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(fetchMovieAPIReducer, {
    isLoading: false,
    isError: false,
    data: [],
    once: false,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      console.log('Data');
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/movie?api_key=e58b4938ea6e7559ed71f1fa435f35b1&language=en-US&query=Marvel&page=1&include_adult=false&year=2019',
        );
        if (!didCancel) {
          console.log(response.data);
          if (state.once === true) {
            return;
          }
          // Ignore if we started fetching something else
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: {
              data: response.data.results,
              once: true,
            },
          });
        }
      } catch (ex) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, []);
  return (
    <div className="movie__container">
      {state.isLoading ? (
        <Loading />
      ) : (
        state.data.map(item => {
          console.log(item);
          return (
            <div className="movie__box" key={item.id}>
              <div className="movie__img-wrap">
                {/* Movie Image Goes Here */}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                />
              </div>
              <div>
                {/* Movie Description Goes Here  */}
                <h3>{item.title}</h3>
                <span>Release Date: {item.release_date}</span>
                <p>Rating {item.vote_average}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default MovieContainer;
