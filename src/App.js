import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column" }}
      >
        Word
      </Container>
    </div>
  );
}

export default App;
