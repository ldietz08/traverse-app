import React, { useState } from "react";
import { auth, googleProvider } from "../../components/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="signup__container">
      <div className="signup__form">
        <h2 className="signup__title">Signup</h2>
        <label className="signup__form-label" htmlFor="email">
          Email
        </label>
        <input
          className="signup__form-body"
          type="email"
          placeholder="Enter your email address"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className="signup__form-label" htmlFor="password">
          Password
        </label>
        <input
          className="signup__form-body"
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div>
          <span className="signup__form-text">Already have an account?</span>
          <Link to="/Login">LOGIN</Link>
        </div>
      </div>
    </section>
  );
}