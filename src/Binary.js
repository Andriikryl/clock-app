const Binary = ({ value }) => {
  return (
    <div className="binary-clock">
      <span className={value[0] === "1" ? "on" : "off"}></span>
      <span className={value[1] === "1" ? "on" : "off"}></span>
      <span className={value[2] === "1" ? "on" : "off"}></span>
      <span className={value[3] === "1" ? "on" : "off"}></span>
    </div>
  );
};

export default Binary;
