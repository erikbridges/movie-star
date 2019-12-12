import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './style.scss';

function MovieContainer() {
  function fetchMovieAPIReducer(state, action) {
    switch (action.type) {
      case 'FETCH_INIT': {
        return { ...state, isLoading: true };
      }
      case 'FETCH_SUCCESS': {
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
    data: null,
  });

  useEffect(() => {
    let didCancel = false;

    async function fetchMovieAPI() {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/movie?api_key=e58b4938ea6e7559ed71f1fa435f35b1&language=en-US&query=Marvel&page=1&include_adult=false&year=2019',
        );
        if (!didCancel) {
          console.log(response.data);
          // Ignore if we started fetching something else
          dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        }
      } catch (ex) {
        if (!didCancel) {
          dispatch({ type: 'FATCH_FAILURE' });
        }
      }
    }

    fetchMovieAPI();
    return () => {
      didCancel = true;
    };
  });
  return (
    <div className="movie__container">
      <div className="movie__box">
        <div className="movie__img-wrap">
          {/* Movie Image Goes Here */}
          {/* Image Box (Placeholder) */}
          <div className="movie__img-p"></div>
        </div>
        <div>
          {/* Movie Description Goes Here  */}
          <h3>Movie Title</h3>
          <span>Rating: ***</span>
          <p>Comedy</p>
        </div>
      </div>
      <div className="movie__box">
        <div>
          {/* Movie Image Goes Here */}
          {/* Image Box (Placeholder) */}
          <div className="movie__img-p"></div>
        </div>
        <div>
          {/* Movie Description Goes Here  */}
          <h3>Movie Title</h3>
          <span>Rating: *****</span>
          <p>Action</p>
        </div>
      </div>
      <div className="movie__box">
        <div>
          {/* Movie Image Goes Here */}
          {/* Image Box (Placeholder) */}
          <div className="movie__img-p"></div>
        </div>
        <div>
          {/* Movie Description Goes Here  */}
          <h3>Movie Title</h3>
          <span>Rating: *****</span>
          <p>Action</p>
        </div>
      </div>
      <div className="movie__box">
        <div>
          {/* Movie Image Goes Here */}
          {/* Image Box (Placeholder) */}
          <div className="movie__img-p"></div>
        </div>
        <div>
          {/* Movie Description Goes Here  */}
          <h3>Movie Title</h3>
          <span>Rating: *****</span>
          <p>Action</p>
        </div>
      </div>
      <div className="movie__box">
        <div>
          {/* Movie Image Goes Here */}
          {/* Image Box (Placeholder) */}
          <div className="movie__img-p"></div>
        </div>
        <div>
          {/* Movie Description Goes Here  */}
          <h3>Movie Title</h3>
          <span>Rating: *****</span>
          <p>Action</p>
        </div>
      </div>
      <div className="movie__box">
        <div>
          {/* Movie Image Goes Here */}
          {/* Image Box (Placeholder) */}
          <div className="movie__img-p"></div>
        </div>
        <div>
          {/* Movie Description Goes Here  */}
          <h3>Movie Title</h3>
          <span>Rating: *****</span>
          <p>Action</p>
        </div>
      </div>
      <div className="movie__box">
        <div>
          {/* Movie Image Goes Here */}
          {/* Image Box (Placeholder) */}
          <div className="movie__img-p"></div>
        </div>
        <div>
          {/* Movie Description Goes Here  */}
          <h3>Movie Title</h3>
          <span>Rating: *****</span>
          <p>Action</p>
        </div>
      </div>
      <div className="movie__box">
        <div>
          {/* Movie Image Goes Here */}
          {/* Image Box (Placeholder) */}
          <div className="movie__img-p"></div>
        </div>
        <div>
          {/* Movie Description Goes Here  */}
          <h3>Movie Title</h3>
          <span>Rating: *****</span>
          <p>Action</p>
        </div>
      </div>
      <div className="movie__box">
        <div>
          {/* Movie Image Goes Here */}
          {/* Image Box (Placeholder) */}
          <div className="movie__img-p"></div>
        </div>
        <div>
          {/* Movie Description Goes Here  */}
          <h3>Movie Title</h3>
          <span>Rating: *****</span>
          <p>Action</p>
        </div>
      </div>
    </div>
  );
}

export default MovieContainer;
