import React from "react";
import { Consumer } from "../../Context/localeContext";

const index = () => {
  return (
    <Consumer>
      {(value) => (
        <div>
          <h1>About Page</h1>
          <p>{value.locale}</p>
          <button type="button" onClick={() => value.onChangeLocale("de")}>
            Change Locale
          </button>
        </div>
      )}
    </Consumer>
  );
};

export default index;
