import "./Bulletin.scss";
import Posts from "../../components/posts/Posts";
import { useState } from "react";
import User from "../../assets/icons/user.png";
import Envelope from "../../assets/icons/envelope.svg";
import Trash from "../../assets/icons/trash-can.svg";
import Hikers from "../../assets/images/hikers-animated.png";
import { db, auth } from "../../components/config/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Bulletin() {
  const [userName, setUserName] = useState("");
  const [hikeName, setHikeName] = useState("");
  const [userPost, setUserPost] = useState("");

  //Reference the collection
  const postsCollectionRef = collection(db, "posts");

  const addPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(postsCollectionRef, {
        userName: userName,
        hikeName: hikeName,
        content: userPost,
        userId: auth?.currentUser?.uid,
      });
      const form = document.querySelector(".form");
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="bulletin">
        <div className="bulletin__msg">
          <img src={Hikers} className="bulletin__img" />
          <div className="bulletin__wrap">
            <form className="form">
              <h1>Create a new post</h1>
              <input
                className="bulletin__input"
                placeholder="Enter your name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <input
                className="bulletin__input"
                placeholder="Hike"
                onChange={(e) => {
                  setHikeName(e.target.value);
                }}
              />
              <input
                className="bulletin__input-body"
                placeholder="Have something to share with the community?"
                onChange={(e) => {
                  setUserPost(e.target.value);
                }}
              />
              <div className="btn__wrapper">
                <button className="btn" onClick={addPost}>
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
        <Posts />
      </section>
    </>
  );
}
