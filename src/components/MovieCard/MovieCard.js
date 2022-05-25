import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

import "./movieCard.css"

const MovieCard = ({ el,deleteMovie }) => {
    return (
        <div>
            <div className="wrapper">
                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>{el.title}</h1>
                            <div className="card_cat">
                                <p className="PG">PG - 13</p>
                                <p className="year">2018</p>
                                <p className="genre">Action | Adventure </p>
                                <p className="time">2h 28m</p>
                            </div>
                            <p className="disc">Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.</p>
                            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
                            <div className="social-btn">
                                {/* WATCH TRAILER*/}
                                <button  onClick={()=>deleteMovie(el.id)}>
                                    <i className="fas fa-play" /> Delete movie
                                </button>
                                <StarRatingComponent  edit={false} name="rate" starColor="red" value={el.rating} starCount={10}/>
                            </div>
                        </div>
                    </div>
                    <div className="card_right">
                        <div className="img_container">
                            <img src={el.posterUrl} className="poster" alt="" />
                        </div>
                        <div className="play_btn">
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MovieCard