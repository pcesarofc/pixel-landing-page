import React from "react";
import './Navigator.css'
import $ from 'jquery'

function mouseInHome() {
    $(".home").css({color: '#80D010'})
    $(".info").css({color: 'white'})
    $(".more").css({color: 'white'})
}

function mouseOutHome() {
    $(".home").css({color: 'white'})
}

function mouseInInfo() {
    $(".info").css({color: '#80D010'})
    $(".home").css({color: 'white'})
    $(".more").css({color: 'white'})
}

function mouseOutInfo() {
    $(".info").css({color: 'white'})
}

function mouseInMore() {
    $(".more").css({color: '#80D010'})
    $(".home").css({color: 'white'})
    $(".info").css({color: 'white'})
}

function mouseOutMore() {
    $(".more").css({color: 'white'})
}

export default () => <>
    <div className="Navigator">
        <a className="home" value='home' onMouseEnter={mouseInHome} onMouseLeave={mouseOutHome}>Home</a>
        <a className="info" value='info' onMouseEnter={mouseInInfo} onMouseLeave={mouseOutInfo}>Info</a>
        <a className="more" value='more' onMouseEnter={mouseInMore} onMouseLeave={mouseOutMore}>More</a>
    </div>

</>