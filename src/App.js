import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, []);
  return <div className="App">Hello World</div>;
}

export default App;
