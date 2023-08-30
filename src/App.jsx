import "./index.css";
import image from "./image-qr-code.png";

function App() {
  return (
    <div className="bg">
      <div className="card">
        <div>
          <img src={image} alt="QR Code" />
        </div>
        <div style={{ padding: "15px" }}>
          <p className="header">
            Improve your front-end skills by building projects
          </p>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
