import React from 'react';
import {auth} from '../firebase';

const Home = ({u}) => {
  return (
    <div>
      <h1>Welcome home, {u}</h1>
      <p>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </p>
    </div>
  );
};

export default Home;
