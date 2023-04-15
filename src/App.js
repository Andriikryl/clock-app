import { useState } from "react";
import "./App.css";

function App() {
  const binaryTime = () => {
    const d = new Date();

    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    const divider = (x) => [
      Math.floor(x / 10)
        .toString(2)
        .padStart(4, "0"),
      (x % 10).toString(2).padStart(4, "0"),
      ,
    ];

    return [...divider(h), ...divider(m), ...divider(s)];
  };

  const [time, setTime] = useState(binaryTime());

  return (
    <div className="App">
      {time.map((x, i) => (
        <div key={i}>{x}</div>
      ))}
    </div>
  );
}

export default App;
