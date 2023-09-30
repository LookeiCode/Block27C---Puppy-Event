// Import the React library
import React, { useState, useEffect } from 'react'

// Import the generated hook from our RTK Query API slice
import { puppyBowlApi } from '../../api/puppyBowlApi';

const { useGetPuppiesQuery } = puppyBowlApi;

// Import the CSS styles for this component
import '../../index.css'

// Define a new React component
export const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useGetPuppiesQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <h1>ERROR!</h1>;
  }

  // Show the fetched data after it has arrived
  return (
    <> 
    <div className="PageIntro">
    <h1>Welcome to the Puppy Bowl event!</h1>
    <p>Come join us for a day of fun-filled puppy football!<br/>
    Get ready to meet the talented pups competing in this years Puppy Bowl below!</p>
    </div>
    
    <div className="players">
      {/* Map through the data array and generate a div for each player */}
      {data.data.players.map((player) => (

          <div key={player.id} className="player-card">
            < img className="image" src={player.imageUrl} alt={player.name} />

            <div className="player-details">

              <h2> {player.name} </h2>

              <p> {player.breed} </p>

              <p> {player.status} </p>
            </div>
          </div>
      ))}
    </div>
    </>
  );
};

// Export the component so it can be imported and used in other files