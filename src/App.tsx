import React, { useCallback, useState } from "react";
import { Mosaic } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import CompanyInfoWidget from "./components/CompanyInfoWidget";
import { MosaicWindow } from "./components/MosaicWindow";
import { MosaicDirection, MosaicParent } from 'react-mosaic-component';

const App: React.FC = () => {

  const [selectedTicker1, setSelectedTicker1] = useState("");
  const [selectedTicker2, setSelectedTicker2] = useState("");
  const [selectedTicker3, setSelectedTicker3] = useState("");

  function changeData(path: string, ticker: string) {
    if (path === "Info1") {
      setSelectedTicker1(ticker);
    } else if (path === "Info2") {
      setSelectedTicker2(ticker);
    } else if (path === "Info3") {
      setSelectedTicker3(ticker);
    }
  }

  const initialValue: MosaicParent<string> = {
    direction: 'row' as MosaicDirection,
    first: 'Info1',
    second: {
      direction: 'column' as MosaicDirection,
      first: 'Info2',
      second: 'Info3'
    },
  };

  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Panel Info. about company</h1>

      <Mosaic<string>
        initialValue={initialValue}
        renderTile={(path) => {

          let ticker = "";

          if (path === "Info1") {
            ticker = selectedTicker1;
          } else if (path === "Info2") {
            ticker = selectedTicker2;
          } else if (path === "Info3") {
            ticker = selectedTicker3;
          }

          return (
            <MosaicWindow path={[path]} title={`Company Info`} changeData={changeData}>
              <CompanyInfoWidget ticker={ticker} />
            </MosaicWindow>
          );
        }}
      />
    </div>
  );
};

export default App;
