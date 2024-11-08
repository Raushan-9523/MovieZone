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
        textAlign: "center",
        width: "1300px",
        margin: "auto",
      }}
    >
      {movieList.map((item) => (
        <div key={item.id} style={{ maxWidth: "280px", textAlign: "center" }}>
          <div style={{ padding: "10px" }} className="hover_effect">
            <img
              src={item.poster_path}
              style={{
                width: "200px",
                borderRadius: "10px",
                border: "1px solid yellow",
                height: "280px",
              }}
            />
          </div>
          <h5 style={{}}>{item.title}</h5>
          <p>{item.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
