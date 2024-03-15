import React, { Component, useEffect, useState } from 'react';
import "./Banner.css";
import requests from './request';
import instance from './axios';
import axios from 'axios';
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                request?.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );

            return request;
        }
        <a href="index.html">click</a>
        fetchData()
    }, []);

    console.log(movie);
    return (
        <header
            className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie.title || movie.name || movie.original_name}
                </h1>
                <div content='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
            </div>
            <h3 className='banner_description'>{movie.overview} </h3>
            ll
            <div className='banner__fadeBottom'></div>
        </header>

    );
}

export default Banner;