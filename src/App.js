import { useEffect, useState } from "react";
import Binary from "./Binary";

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
    ];

    return [...divider(h), ...divider(m), ...divider(s)];
  };

  const [time, setTime] = useState(binaryTime());

  useEffect(() => {
    setInterval(() => setTime(binaryTime), 1000);
  }, [time]);

  return (
    <div className="App">
      {time.map((x, i) => (
        <Binary key={i} value={x} />
      ))}
    </div>
  );
}

export default App;
