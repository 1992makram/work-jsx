import logo from "./logo.svg";
import "./App.css";
import image from "./img1.jpg";
function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxwidth: "100" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={image} />

        <br />

        <img src="./img2.jpg" />
      </div>

      <video style={{ width: "320", height: "240" }}>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
