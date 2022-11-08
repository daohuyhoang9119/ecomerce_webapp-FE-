import React,{useState, useEffect} from "react";
import TopFlickity from "./components/TopFlickity";
import BestPicks from "./components/BestPicks";
import TopSellers from "./components/TopSellers";
import CountDown from "./components/CountDown";
import Reviews from "./components/Reviews";
import Brands from "./components/Brands";
import { useDispatch } from 'react-redux';

function Home() {
  const [dataHome, setDataHome] = useState();
  const dispatch = useDispatch();

  useEffect(()=>{
    callApiDataHome()
  },[]);

  async function callApiDataHome(){
    let res = await fetch(
      `https://cfd-reactjs.herokuapp.com/product?sort=real_price.-1&categories=1846`
    ).then((res) => res.json());
    let res1 = await fetch(
      `https://cfd-reactjs.herokuapp.com/product?categories=1801&sort=real_price.-1`
    ).then((res) => res.json());
    let res2 = await fetch(
      ` https://cfd-reactjs.herokuapp.com/product?categories=8594&sort=real_price.-1`
    ).then((res) => res.json());

    if (res.data) {
      dispatch({
        type: "fetchDataHome",
        payload: {
          res: res.data,
          res1: res1.data,
          res2: res2.data,  
        },
      });
      setDataHome({
        res: res.data,
        res1: res1.data,
        res2: res2.data,
      });
    }
  }



  return (
    <>
      <TopFlickity />
      {/* FEATURES */}

      {/* BEST PICKS */}
      <BestPicks />
      {/* TOP SELLERS */}
      <TopSellers  data={dataHome}/>

      {/* COUNTDOWN */}
      <CountDown />

      {/* REVIEWS */}
      <Reviews />
      {/* BRANDS */}
      <Brands />
    </>
  );
}

export default Home;
