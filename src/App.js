import { Container, withStyles, Switch } from "@material-ui/core";
import { Header } from "./Components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./Components/Definitions/Definitions";
import { grey } from "@material-ui/core/colors";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [lightMode, setLightMode] = useState(false);

  const ModeChange = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <ModeChange
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>

        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
