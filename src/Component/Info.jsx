import React from "react";
export default function Info(props) {
    return (
        <div className="location-details">
         
          <img className="location-image" src={`../src/Images/${props.imageUrl}`} alt={`picture of the ${props.title}`}/>
          
          <div className="location-info">
            <div className="location-name">
            <i class="fa-solid fa-location-dot"></i>
            <p className="country">{props.location}</p>
            <a href="{props.googleMapsUrl}" target="blank">view on google map</a>
            </div>
            
            <h1 className="location">{props.title}</h1>
            <h3 className="dates">{props.startDate} - {props.endDate}</h3>
            <p className="description">{props.description}</p>
          </div>
          
        </div>
    )
}