import Loader from "react-loader-spinner";
import React, { Component } from "react";
import style from "./Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default class LoaderSpiner extends Component {
  render() {
    return (
      <div className={style.loader}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={1500} //1.5 secs
        />
      </div>
    );
  }
}
