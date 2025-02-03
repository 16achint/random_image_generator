// src: `https://picsum.photos/200/200?random=${Date.now()}`, // Ensures a new image each time
import { useState } from "react";

function App() {
  const [images, setImage] = useState([]);

  const generateImage = () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);

    const newImage = {
      id: Date.now(),
      src: `https:picsum.photos/200/200?random=${Date.now()}`,
      alt: "Random image",
      x: randomX,
      y: randomY,
    };

    setImage((prevImage) => [...prevImage, newImage]);
  };
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: "10px 30px",
          fontSize: 20,
          borderRadius: 50,
          cursor: "pointer",
          backgroundColor: "black",
          color: "white",
          zIndex: 1,
        }}
        onClick={generateImage}
      >
        Click
      </button>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          style={{ position: "absolute", top: image.y, left: image.x }}
        />
      ))}
    </div>
  );
}

export default App;
