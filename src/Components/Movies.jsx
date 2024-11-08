import { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  const [movieList, setmovieList] = useState(movies);

  const filterByCategory = (cat) => {
    setmovieList(movies.filter((item) => item.category === cat));
  };
  return (
    <>
      <div
        className="my-3 text-center"
        style={{ width: "1000px", margin: "auto" }}
      >
        <button
          type="button"
          className="btn btn-outline-primary mx-3"
          onClick={() => {
            setmovieList(movies);
          }}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mx-3"
          onClick={() => {
            filterByCategory("Action");
          }}
        >
          Action
        </button>
        <button
          type="button"
          className="btn btn-outline-light mx-3"
          onClick={() => {
            filterByCategory("Thriller");
          }}
        >
          Thriller
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-3"
          onClick={() => {
            filterByCategory("Animation");
          }}
        >
          Animation
        </button>
        <button
          type="button"
          className="btn btn-outline-warning mx-3"
          onClick={() => {
            filterByCategory("Horror");
          }}
        >
          Horror
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-3"
          onClick={() => {
            filterByCategory("Drama");
          }}
        >
          Drama
        </button>
        <button
          type="button"
          className="btn btn-outline-light mx-3"
          onClick={() => {
            filterByCategory("Sci-Fi");
          }}
        >
          Sci-fi
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          textAlign: "center",
          width: "1300px",
          margin: "auto",
          marginTop: "1.5rem",
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
    </>
  );
};

export default Movies;
