import React from "react";
import { Tooltip, Grow } from "@mui/material";
import { useState, useContext } from "react";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { GeneralContext } from "./GeneralContext";
import { DoughnoutChart } from "./DoughnoutChart";
import { HomeContext } from "./HomeContext";

const WatchList = () => {
  const { watchlist } = useContext(HomeContext);
  const [search, setSearch] = useState("");
  const searched =
    search.trim() === ""
      ? watchlist
      : watchlist.filter((stock) =>
          stock.name.toLowerCase().includes(search.toLowerCase())
        );

  const data = {
    labels: watchlist.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.currentPrice),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:GS, NYSE, NASDAQ fut weekly, gold mcx"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {searched.map((item, index) => {
          return <WatchListItem stock={item} key={index} />;
        })}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "scale(0.8)",
        }}
      >
        <DoughnoutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = (event) => {
    setOpen(true);
  };

  const handleMouseLeave = (event) => {
    setOpen(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.percentageChange < 0 ? "down" : "up"}>
          {stock.name}
        </p>
        <div className="item-info">
          <span className="percent">{stock.percentageChange}</span>
          {stock.percentageChange < 0 ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span
            style={{
              display: "inline-block",
              color: stock.percentageChange < 0 ? "red" : "green",
            }}
          >
            {stock.currentPrice}
          </span>
        </div>
      </div>
      {open && <WatchListActions uid={stock.name} rate={stock.currentPrice} />}
    </li>
  );
};

const WatchListActions = ({ uid, rate }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuy = () => {
    generalContext.openBuyWindow(uid, rate);
  };

  const handleSell = () => {
    generalContext.openSellWindow(uid, rate);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuy}>
            Buy
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell" onClick={handleSell}>
            Sell
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="Charts"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
