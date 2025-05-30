import React, { useEffect, useState } from "react";
import "./Section.css";
import Card from "./Card";
import Carousel from "./Carousel";
import axios from "axios";

function Section({ title, fetchUrl }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false); // show carousel by default

  useEffect(() => {
    axios.get(fetchUrl)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, [fetchUrl]);

  const renderCard = (album) => (
    <Card
      image={album.image}
      title={album.title}
      follows={album.follows}
    />
  );

  return (
    <div className="section">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>
      <div className="section-content">
        {showAll ? (
          <div className="grid">
            {albums.map((album, index) => renderCard(album))}
          </div>
        ) : (
          <Carousel data={albums} renderComponent={renderCard} />
        )}
      </div>
    </div>
  );
}

export default Section;
