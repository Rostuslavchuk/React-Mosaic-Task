import React, {ReactNode, useState} from "react"

interface Mosaicparams {
    path: string[]
    title: string
    changeData: (path: string, ticker: string) => void
    children: ReactNode
}

export const MosaicWindow: React.FC<Mosaicparams> = ({path, title, changeData, children}) => {

    const [selectedTicker, setTickerValue] = useState("");

    const handleTickerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {                
        const newTicker = e.target.value; 
        setTickerValue(newTicker);
        changeData(path[0], newTicker);
    };

    return (
        <div className="mosaic-window">
        <div className="mosaic-window-toolbar p-2 flex items-center w-full justify-between">
            <h3>{title}</h3>

            <select
                className="border border-gray-300 rounded-md focus:outline-none"
                value={selectedTicker}
                onChange={handleTickerChange}
            >
                <option value="">Choose</option>
                <option value="AAPL">Apple Inc.</option>
                <option value="GOOGL">Alphabet Inc.</option>
                <option value="NVDA">Nvidia Inc.</option>
                <option value="TSLA">Tesla Inc.</option>
                <option value="MSFT">MICROSOFT Inc.</option>
                <option value="AMZN">Amazon Inc.</option>
                <option value="TSM">TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD</option>
            </select>
        </div>
        <div className="content p-2">
            {children}
        </div>
      </div>
    )
}