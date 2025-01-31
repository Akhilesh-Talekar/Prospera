import React from "react";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import { HomeContext } from "./HomeContext";
import { watchlist } from "../data/data";
const BACKEND_URL = import.meta.env.BACKEND_URL;
const VITE_FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

const Home = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [user, setUser] = useState("");
  const [UID, setUID] = useState(localStorage.getItem("id"));
  const [wallet, setWallet] = useState(0);
  const [personalholdings, setPersonalHoldings] = useState([]);
  // const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = `${VITE_FRONTEND_URL}`;
      }
      const { data } = await axios.post(
        `${BACKEND_URL}`,
        {},
        { withCredentials: true }
      );
      const { status, user, id, wallet } = data;
      setUser(user);
      setUID(id);
      setWallet(wallet);
      localStorage.setItem("id", id);
      return !status && (removeCookie("token"), (window.location.href = `${VITE_FRONTEND_URL}`));
      
    };
    verifyCookie();
  }, [cookies.token, removeCookie]);

  useEffect(() => {
    if (UID) { // Only fetch holdings if UID is not null
      axios
        .get(`${BACKEND_URL}/allHoldings/${UID}`)
        .then((res) => {
          setPersonalHoldings(res.data);
        })
        .catch((error) => {
          console.error("Error fetching holdings:", error);
        });
    }
  }, [UID]);

  // useEffect(() => {
  //   axios.get(`${BACKEND_URL}/api/Stockdata`).then((res) => {
  //     setWatchlist(res.data);
  //     localStorage.setItem("watchlist", JSON.stringify(res.data));
  //   })
  // },[]);
    

  const Logout = () => {
    removeCookie("token");
    localStorage.removeItem("id");
    localStorage.removeItem("watchlist");
    window.location.href = `${VITE_FRONTEND_URL}`;
  };
   
  return (
    <>
      <HomeContext.Provider value={{ logOut: Logout, user: user, id: UID, wallet: wallet, perHoldings: personalholdings, watchlist: watchlist }}>
        <TopBar />
        <Dashboard />
      </HomeContext.Provider>
    </>
  );
};

export default Home;
