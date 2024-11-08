import { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  const [movieList, setmovieList] = useState(movies);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        textAlign: "center",
        width: "1200px",
        backgroundColor: "yellow",
        margin: "auto",
      }}
    >
      {movieList.map((item) => (
        <div key={item.id} style={{ maxWidth: "250px" }}>
          <div style={{ padding: "10px" }}>
            <img src={item.poster_path} style={{ width: "200px" }} />
          </div>
          <h5>{item.title}</h5>
          <p>{item.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
