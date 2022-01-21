import React from "react";
import "../../App.css";

const Form = ({ handleSubmit, handleChange, inputName }) => (
  <form className="form" onSubmit={handleSubmit}>
    <label htmlFor="name1" className="label-name">
      {" "}
      Название{" "}
    </label>
    <input
      id="name1"
      ref={inputName}
      className="input-name"
      defaultValue=""
      type="text"
      onChange={handleChange}
      name="name"
      required={true}
      placeholder="Город"
    />

    <label htmlFor="timeZone" className="label-timezone">
      {" "}
      Временная зона
    </label>
    <input
      id="timeZone"
      className="input-timezone"
      type="number"
      onChange={handleChange}
      name="timeZone"
      defaultValue=""
      required={true}
      placeholder="+ часов"
    />

    <button className="btn-submit" onSubmit={handleSubmit}>
      Добавить
    </button>
  </form>
);

export { Form };
