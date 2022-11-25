function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Pin = () => {
  const pinStyle = {
    background: `${getRandomColor()} radial-gradient(at 8px 8px, rgba(255,255,255,0), rgba(0,0,0,0.5))`,
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    boxShadow: "4px 4px 3px rgba(0,0,0,0.5)",
  };

  return <div style={pinStyle} />;
};
