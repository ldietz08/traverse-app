import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExplorePage.scss";
import HeartSolid from "../../assets/icons/heart-solid.svg";
import Heart from "../../assets/icons/heart-regular.svg";

export default function ExplorePage({ hikes }) {
  const [query, setQuery] = useState();

  // const checkFaves = (id) => {
  //   const boolean = favorites.some((hike) => hike.id === id);
  //   return boolean;
  // };

  return (
    <>
      <div className="search">
        <input
          className="search__body"
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <section className="wrapper">
        {/* {hikes
          .filter(
            (hike) =>
              hike.location.toLowerCase().includes(query) ||
              hike.name.toLowerCase().includes(query) ||
              hike.difficulty.toLowerCase().includes(query)
          ) */}
        {hikes?.map((hike) => (
          <div className="card" key={hike.id}>
            <div className="card__body">
              <img
                className="card__img"
                src={hike.images[0].url}
                alt="Moutainous region"
              ></img>
              <div className="card__fave">
                <h2 className="card__title">{hike.location}</h2>
                {hike.duration ? <p>Duration: {hike.duration}</p> : null}
                {/* {checkFaves(hike.id) ? (  
                <button
                  className="card__btn-fav"
                  onClick={() => removeFromFavorites(hike.id)}
                >
                  <img
                    className="card__heart-solid"
                    src={HeartSolid}
                    alt="Solid Heart icon"
                  ></img>
                </button>
               ) : (  
                <button
                  className="card__btn-fav"
                  onClick={() => addToFavorites(hike)}
                >
                  <img
                    className="card__heart"
                    src={Heart}
                    alt="Heart icon"
                  ></img>
                </button>
                 )}  */}
              </div>
              <p className="card__location">{hike.shortDescription}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}