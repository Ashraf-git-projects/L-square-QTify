import React, { useEffect, useState } from "react";
import "./Section.css";
import Card from "./Card";
import Carousel from "./Carousel";
import axios from "axios";

function Section({ title, fetchUrl }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get(fetchUrl)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, [fetchUrl]);

  const renderCard = (album) => (
    <Card
      image={
        album.title.toLowerCase().includes("english")
          ? require("../Assets/album b.png")
          : require("../Assets/album b.png")
      }
      title={album.title}
      follows={album.follows}
    />
  );

  return (
    <div className="section">
      <div className="section-header">
        <h3>{title}</h3>
        <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>
      <div className="section-content">
        {showAll ? (
          <div className="grid">
            {albums.map((album, index) => (
              <Card
                key={index}
                image={
                  album.title.toLowerCase().includes("english")
                    ? require("../Assets/album b.png")
                    : require("../Assets/album a.png")
                }
                title={album.title}
                follows={album.follows}
              />
            ))}
          </div>
        ) : (
          <Carousel data={albums} renderComponent={renderCard} />
        )}
      </div>
    </div>
  );
}

export default Section;
