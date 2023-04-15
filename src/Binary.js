const Binary = ({ value }) => {
  return (
    <div className="binary-clock">
      <span className={value[0] === "1" ? "on" : "off"}>{value[0]}</span>
      <span className={value[1] === "1" ? "on" : "off"}>{value[1]}</span>
      <span className={value[2] === "1" ? "on" : "off"}>{value[2]}</span>
      <span className={value[3] === "1" ? "on" : "off"}>{value[3]}</span>
    </div>
  );
};

export default Binary;
