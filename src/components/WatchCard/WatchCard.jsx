import { addHours, format } from "date-fns";
import React from "react";
import "../../App.css";

const WatchCard = ({ id, name, timeZone, handleRemove }) => (
  <div key={id} className="watch-card">
    <i
      className="fa fa-times-circle-o"
      aria-hidden="true"
      onClick={() => handleRemove(id)}
    />
    <i className="titleWatch">{name}</i>
    <i className="dataWatch">
      {" "}
      {format(addHours(new Date(), timeZone), "HH:mm:ss")}
      {""}+{timeZone}
    </i>
  </div>
);

export { WatchCard };
