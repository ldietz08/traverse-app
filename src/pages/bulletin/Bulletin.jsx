import "./Bulletin.scss";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../assets/icons/user.png";
import Envelope from "../../assets/icons/envelope.svg";
import Trash from "../../assets/icons/trash-can.svg";
import Hikers from "../../assets/images/hikers.png";
import { db } from "../../components/config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export default function Bulletin() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [hikeName, setHikeName] = useState("");
  const [userPost, setUserPost] = useState("");

  const [users, setUsers] = useState([]);
  const [openMessage, setOpenMessage] = useState(false);
  const [posts, setPosts] = useState([]);

  //Reference the collection
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, [deletePost]);

  const addPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(postsCollectionRef, {
        userName: userName,
        hikeName: hikeName,
        content: userPost,
      });
      const form = document.querySelector(".form");
      form.reset();
      getPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
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
        <section className="bulletin__post">
          {posts.map((post) => {
            return (
              <div className="bulletin__wrapper" key={post.id}>
                <div className="bulletin__user">
                  <div>
                    <img
                      className="bulletin__user-image"
                      src={User}
                      alt="TraVerse user profile pic"
                    ></img>
                  </div>
                  <div>
                    <h1>{post.userName}</h1>
                  </div>
                  <div className="bulletin__date">
                    <h1>{new Date().toLocaleDateString()}</h1>
                  </div>
                </div>
                <h3>{post.hikeName}</h3>
                <div className="bulletin__user-post">
                  <p className="bulletin__content">{post.content}</p>
                </div>
                <button
                  className="btn--delete"
                  onClick={() => deletePost(post.id)}
                >
                  <img src={Trash} alt="Trash can icon"></img>
                </button>
              </div>
            );
          })}
          <div className="bulletin__wrapper">
            <div className="bulletin__user">
              <div>
                <img
                  className="bulletin__user-image"
                  src={User}
                  alt="TraVerse user profile pic"
                ></img>
              </div>
              <div>
                <h1>Layla</h1>
              </div>
              <div className="bulletin__date">
                <h1>12/13/22</h1>
              </div>
            </div>
            <h3>Crown Mountain</h3>
            <div className="bulletin__user-post">
              <p className="bulletin__content">
                Hi everyone. I'm planning a trip to Crown Mountain on Saturday.
                I have two available seats :) Let me know if you're interested
                in joining!
              </p>
            </div>
            <div>
              <button
                className="btn--msg"
                onClick={() => {
                  setOpenMessage(true);
                }}
              >
                <img
                  className="bulletin-icon"
                  src={Envelope}
                  alt="Envelope icon"
                ></img>
              </button>
              {openMessage && <Message closeMessage={setOpenMessage} />}
            </div>
          </div>
          <div className="bulletin__wrapper">
            <div className="bulletin__user">
              <div>
                <img
                  className="bulletin__user-image"
                  src={User}
                  alt="TraVerse user profile pic"
                ></img>
              </div>
              <div>
                <h1>Carlos</h1>
              </div>
              <div className="bulletin__date">
                <h1>11/24/22</h1>
              </div>
            </div>
            <h3>The Lions</h3>
            <div className="bulletin__user-post">
              <p className="bulletin__content">
                Started at cypress lodge hiked all the way up to the west lion.
                But couldn’t go any further because the snow is so deep! Bring
                your icers.
              </p>
              <img
                className="bulletin-icon"
                src={Envelope}
                alt="Envelope icon"
              ></img>
            </div>
          </div>
          <div className="bulletin__wrapper">
            <div className="bulletin__user">
              <div>
                <img
                  className="bulletin__user-image"
                  src={User}
                  alt="TraVerse user profile pic"
                ></img>
              </div>
              <div>
                <h1>Reyna</h1>
              </div>
              <div className="bulletin__date">
                <h1>08/18/22</h1>
              </div>
            </div>
            <h3>Stawamus Chief</h3>
            <div className="bulletin__user-post">
              <p className="bulletin__content">
                A hiker I met encountered a black bear and a couple of km later
                I heard some huffs and puffs and some movement from the trees
                next to me. I spent the rest of the hike singing out loud.
              </p>
              <img
                className="bulletin-icon"
                src={Envelope}
                alt="Envelope icon"
              ></img>
            </div>
          </div>
          <div className="bulletin__wrapper">
            <div className="bulletin__user">
              <div>
                <img
                  className="bulletin__user-image"
                  src={User}
                  alt="TraVerse user profile pic"
                ></img>
              </div>
              <div>
                <h1>Max</h1>
              </div>
              <div className="bulletin__date">
                <h1>07/29/22</h1>
              </div>
            </div>
            <h3>St.Mark's Summit</h3>
            <div className="bulletin__user-post">
              <p className="bulletin__content">
                Approximately 6-6.5hr round trip. Quite a few muddy sections as
                you get closer to the summit. Definitely carry mosquito
                repellant, lots of them on the trail throughout.
              </p>
              <div className="envelope">
                <img
                  className="bulletin-icon"
                  src={Envelope}
                  alt="Envelope icon"
                ></img>
              </div>
            </div>
          </div>
          <div className="bulletin__wrapper">
            <div className="bulletin__user">
              <div>
                <img
                  className="bulletin__user-image"
                  src={User}
                  alt="TraVerse user profile pic"
                ></img>
              </div>
              <div>
                <h1>Jon</h1>
              </div>
              <div className="bulletin__date">
                <h1>06/25/22</h1>
              </div>
            </div>
            <h3>Sunshine Coast Trail</h3>
            <div className="bulletin__user-post">
              <p className="bulletin__content">
                Amazing trail- so well marked and maintained. You can feel the
                love that goes into it. We did about 100k in 6 days, from Sarah
                Point to Lewis lake.
              </p>
              <div className="envelope">
                <img
                  className="bulletin-icon"
                  src={Envelope}
                  alt="Envelope icon"
                ></img>
              </div>
            </div>
          </div>
          <div className="bulletin__wrapper">
            <div className="bulletin__user">
              <div>
                <img
                  className="bulletin__user-image"
                  src={User}
                  alt="TraVerse user profile pic"
                ></img>
              </div>
              <div>
                <h1>Frederic</h1>
              </div>
              <div className="bulletin__date">
                <h1>09/24/21</h1>
              </div>
            </div>
            <h3>Hollyburn Mountain</h3>
            <div className="bulletin__user-post">
              <p className="bulletin__content">
                Great weather! Great time. Besides the fact that I left my
                hiking poles at the top. If someone happens to come across them
                pls let me know.
              </p>
              <img
                className="bulletin-icon"
                src={Envelope}
                alt="Envelope icon"
              ></img>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
