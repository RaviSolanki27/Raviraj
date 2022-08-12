import { useEffect, useState } from "react";
import "./App.css";
import { Homepage } from "./Routes/Homepage";
import { Loader } from "./Utils";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3910);
  }, []);

  return <div className="App">{loading ? <Loader /> : <Homepage />}</div>;
}

export default App;
