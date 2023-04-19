import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartSolid from "../../assets/icons/heart-solid.svg";
import Heart from "../../assets/icons/heart-regular.svg";
import { useAppContext } from "../../components/context/AppContext";
import "./ExplorePage.scss";
import { hikes } from "../../data/hikes";

export default function ExplorePage() {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const [query, setQuery] = useState("");

  const checkFaves = (id) => {
    const boolean = favorites.some((hike) => hike.id === id);
    return boolean;
  };

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
        {hikes
          .filter(
            (hike) =>
              hike.location.toLowerCase().includes(query) ||
              hike.name.toLowerCase().includes(query) ||
              hike.difficulty.toLowerCase().includes(query)
          )
          .map((hike) => (
            <div className="card" key={hike.id}>
              <div className="card__body">
                <img
                  className="card__img"
                  src={hike.image}
                  alt="Moutainous region"
                ></img>
                <div className="card__fave">
                  <h2 className="card__title">{hike.name}</h2>
                  {checkFaves(hike.id) ? (
                    <button
                      className="card__btn-fav"
                      onClick={() => removeFromFavorites(hike.id)}
                    >
                      <img
                        className="card__heart card__heart-solid"
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
                      />
                    </button>
                  )}
                </div>
              </div>
              <h2 className="card__location">{hike.location}</h2>
              <p className="card__description">{hike.description}</p>
              <div className="card__info">
                <span className="card__details">{hike.elevation}</span>
                <span className="card__details">{hike.time}</span>
                <span className="card__details">{hike.season}</span>
                <span className="card__details">{hike.difficulty}</span>
              </div>
            </div>
          ))}
        <div></div>
      </section>
    </>
  );
}
