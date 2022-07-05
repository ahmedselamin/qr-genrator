import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 0.5,
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        placeholder="Enter URL"
        type="text"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <h4>hidden lol</h4>
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
