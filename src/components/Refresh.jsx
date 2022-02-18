import React from "react";
import refresh from '../utils/Refresh.png'
import './Refresh.css'


export default ({refreshPage}) => <img className="Refresh" src={refresh} onClick={refreshPage}/>