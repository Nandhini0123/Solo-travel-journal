import React from "react";
export default function Info(props) {
    return (
        <div className="location-details">
         
          <img className="location-image" src={`../src/Images/${props.img}`} alt="picture of the Keywest"/>
          
          <div className="location-info">
            <div className="location-name">
            <i class="fa-solid fa-location-dot"></i>
            <p className="country">{props.country}</p>
            <a href="{props.googlelocation}" target="blank">view on google map</a>
            </div>
            
            <h1 className="location">{props.title}</h1>
            <h3 className="dates">{props.starttime} - {props.endtime}</h3>
            <p className="description">{props.details}</p>
          </div>
          
        </div>
    )
}