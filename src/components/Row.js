// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import axios from '../api/axios.js'
import React, { useEffect, useState } from 'react'
import "./Row.css"
import MovieModal from './MovieModal/index.js'
const Row = ({ title, fetchUrl, isLargeRow, id }) => {
    
    const [movies, setMovies] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});
    
    
    useEffect(() => {
        fetchmovieData();
    }, [])

    const fetchmovieData = async () => {
        const request = await axios.get(fetchUrl);
        console.log('request: ', request);
        
        setMovies(request.data.results);
    }

    const handleClick = (movie) => {
        setModalOpen(true)
        setMovieSelected(movie)
    }

    return (
      <section className="row">
        <h2>{title}</h2>
        <Swiper
          // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            loop = {true}
            pagination={{ clickable: true }}
            breakpoints={{
                1378 : {
                    slidesPerView : 6,
                    slidesPerGroup: 6
                },
                998 : {
                    slidesPerView : 5,
                    slidesPerGroup: 5
                },
                625 : {
                    slidesPerView : 4,
                    slidesPerGroup: 4
                },
                0 : {
                    slidesPerView : 3,
                    slidesPerGroup: 3
                }
          }}
        >
            <div className="slider">
            <div id={id} className="row__posters">
                {movies.map((movie) => (
                    <SwiperSlide>
                        <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`https://image.tmdb.org/t/p/original/${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                            } `}
                            loading="lazy"
                            alt={movie.name}
                    />
                    </SwiperSlide>
                ))}
            </div>
            </div>
        </Swiper>
        {modalOpen && (
          <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
        )}
      </section>
    );
}

export default Row