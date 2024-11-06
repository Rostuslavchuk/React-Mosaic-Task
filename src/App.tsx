import React, { useState } from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import CompanyInfoWidget from "./components/CompanyInfoWidget";

const App: React.FC = () => {
  const [selectedTicker, setSelectedTicker] = useState("AAPL");

  const handleTickerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTicker(e.target.value);
  };

  return (
    <div className="h-screen p-4">
      
      <h1 className="text-2xl font-bold mb-4">Panel Info. about company</h1>
      
      <select
        className="mb-4 p-2 border rounded"
        value={selectedTicker}
        onChange={handleTickerChange}
      >
        <option value="AAPL">Apple Inc.</option>
        <option value="GOOGL">Alphabet Inc.</option>
        <option value="NVDA">Nvidia Inc.</option>
        <option value="TSLA">Tesla Inc.</option>
        <option value="MSFT">MICROSOFT Inc.</option>
        <option value="AMZN">Amazon Inc.</option>
        <option value="TSM">TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD</option>
      </select>

      <Mosaic<string>
        renderTile={(id, path) => (
          <MosaicWindow path={path} title={`Company ${selectedTicker}`}>
          <CompanyInfoWidget ticker={selectedTicker} />
        </MosaicWindow>
        )}
        initialValue={{
          direction: "row",
          first: "1",
          second: {
            direction: "column",
            first: "2",
            second: "3",
          },
        }}
      />

    </div>
  );
};

export default App;
