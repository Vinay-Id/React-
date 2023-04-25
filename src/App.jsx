import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [joke, setJoke] = useState([]);
  const [jokeType, setJokeType] = useState("Programming");
  const [refresh, setRefresh] = useState();
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const fetchJoke = async () => {
      const jokeFetch = await fetch(
        `https://v2.jokeapi.dev/joke/${jokeType}?type=twopart`
      );
      const jokes = await jokeFetch.json();
      // console.log(jokes);
      setJoke(jokes);
    };
    fetchJoke();
  }, [refresh]);
  const onclickHandler = () => {
    setRefresh(!refresh);
  };
  return (
    <div className={theme ? "dark container" : "light container"}>
      <div className="jokebox">
        <select name="typeOfJoke" onChange={(e) => setJokeType(e.target.value)}>
          <option value="Programming">programming</option>
          <option value="Dark">Dark</option>
          <option value="Christmas">Christmas</option>
        </select>
        <div className="main-content">
          <h4>{joke.setup}</h4>
          <p>{joke.delivery}</p>
          <button onClick={onclickHandler}>Refresh</button>
          <button onClick={() => setTheme(!theme)}>
            {theme ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
