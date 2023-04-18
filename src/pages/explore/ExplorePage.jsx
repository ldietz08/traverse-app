import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartSolid from "../../assets/icons/heart-solid.svg";
import Heart from "../../assets/icons/heart-regular.svg";
import { useAppContext } from "../../components/context/AppContext";
import "./ExplorePage.scss";

export default function ExplorePage({ hikes }) {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

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
        {hikes?.map((hike) => (
          <div className="card" key={hike.id}>
            <div className="card__body">
              <img
                className="card__img"
                src={hike.images[0].url}
                alt="Moutainous region"
              ></img>
              <h2 className="card__title">{hike.location}</h2>
              <div className="card__fave">
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
                    <img className="card__heart" src={Heart} alt="Heart icon" />
                  </button>
                )}
              </div>
              {hike.duration ? (
                <p className="card__duration">Duration: {hike.duration}</p>
              ) : null}
              <p className="card__location">{hike.shortDescription}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
