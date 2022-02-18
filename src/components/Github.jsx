import React from "react";
import github from '../utils/GitHub-Pixel.png'
import './SocialMedia.css'


export default ({showDialog}) => <img className="Github" src={github} onClick={showDialog}/>