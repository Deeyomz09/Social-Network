import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Lian Shu</h1>
          <p className="lead">I don't know what to put here。</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
