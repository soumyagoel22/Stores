import React from "react";

const Display = ({ state }) => {
  return (
    <div>
      {state &&
        state.map((val) => (
          <div key={val.city_id}>
            <div className="info">
              <h3>{val.name}</h3>
              <a href={val.store_url} target="_blank">
                Link
              </a>
            </div>
            <img classname="logo_info" src={val.logo_image} alt="logo" />
          </div>
        ))}
    </div>
  );
};

export default Display;
