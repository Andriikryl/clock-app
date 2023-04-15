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

  return <div className="App"></div>;
}

export default App;
