// src/components/Section.js
import React, { useEffect, useState } from "react";
import "./Section.css";
import Card from "./Card";
import Carousel from "./Carousel";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";

function Section({ title, fetchUrl, isSongSection = false }) {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => setData(res.data)).catch(console.error);

    if (isSongSection) {
      axios.get("https://qtify-backend-labs.crio.do/genres")
        .then((res) => setGenres([{ key: "all", label: "All" }, ...res.data.data]))
        .catch(console.error);
    }
  }, [fetchUrl, isSongSection]);

  const filteredData = isSongSection && selectedGenre !== "all"
    ? data.filter((song) => song.genre.key === selectedGenre)
    : data;

  const renderCard = (item) => (
    <Card
      key={item.id}
      image={item.image}
      title={item.title}
      follows={item.follows}
      likes={item.likes}
      type={isSongSection ? "song" : "album"}
    />
  );

  return (
    <div className="section">
      <div className="section-header">
        <h3>{title}</h3>
        {!isSongSection && (
          <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {isSongSection && (
        <Tabs
          value={selectedGenre}
          onChange={(e, newVal) => setSelectedGenre(newVal)}
          textColor="inherit"
          indicatorColor="secondary"
          variant="scrollable"
        >
          {genres.map((genre) => (
            <Tab key={genre.key} label={genre.label} value={genre.key} />
          ))}
        </Tabs>
      )}

      <div className="section-content">
        {(!showAll || isSongSection) ? (
          <Carousel data={filteredData} renderComponent={renderCard} />
        ) : (
          <div className="grid">
            {data.map((item) => renderCard(item))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
