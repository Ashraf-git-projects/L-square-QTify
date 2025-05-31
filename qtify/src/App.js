import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import FAQ from './components/FAQ';
import axios from 'axios';

function App() {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch top albums and songs
    const fetchData = async () => {
      try {
        const albumsRes = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        const songsRes = await axios.get("https://qtify-backend-labs.crio.do/songs");

        setAlbums(albumsRes.data);
        setSongs(songsRes.data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* Pass combined data for search */}
      <Navbar data={[...albums, ...songs]} />
      <Hero />
      <Section title="Top Albums" fetchUrl="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" fetchUrl="https://qtify-backend-labs.crio.do/albums/new" />
      <FAQ />
    </div>
  );
}

export default App;
