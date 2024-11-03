
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <div className="text-section">
          <h1>Fly makes you faster</h1>
          <p>
            New free template by uicookies.com. For more templates visit the site.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="see-pricing">See Pricing</button>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default Home;
