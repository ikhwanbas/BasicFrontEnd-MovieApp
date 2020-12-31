import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import axios from "axios";

const MovieList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const key = "bf80e70aec8d0d1b7d525c1f0adcdd02"

        const getMovieData = async () => {

            const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
            setItems(res.data.results)
            console.log(res.data.results)
        }

        getMovieData()
    }, [])



    return (
        <div>

            <div className="container">

                <div className="row">

                    {items.map((item) => (
                        <MovieItem key={item.id} item={item} />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default MovieList