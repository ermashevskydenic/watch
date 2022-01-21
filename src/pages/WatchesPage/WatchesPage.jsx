import { Form } from "../../components/Form";
import { WatchCard } from "../../components/WatchCard";
import { nanoid } from "nanoid";
import { format } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import "../../App.css";

const WatchesPage = () => {
  const [dataValue, setDataValue] = useState({});
  const [time, setTime] = useState(null);
  const [watches, setWatches] = useState([]);

  const inputName = useRef();
  const idInterval = useRef();

  useEffect(() => {
    idInterval.current = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(idInterval.current);
  }, [time]);

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const validateValue = () => {
    return dataValue.name?.trim().length && Number(dataValue.timeZone) > 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    value.trim() && setDataValue({ ...dataValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateValue() && setWatches([...watches, { id: nanoid(), ...dataValue }]);
    e.currentTarget.reset();
    setDataValue({});
  };
  const handleRemove = (idItem) => {
    setWatches(() => watches.filter(({ id }) => id !== idItem));
  };

  return (
    <div className="container">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputName={inputName}
      />
      <div>
        <div className="local-watch">
          Местное время: {format(new Date(), "HH:mm:ss")}
        </div>
        <div className="container-watches">
          {" "}
          {watches.map(({ name, timeZone, id }) => (
            <WatchCard
              handleRemove={handleRemove}
              timeZone={timeZone}
              id={id}
              name={name}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export { WatchesPage };
