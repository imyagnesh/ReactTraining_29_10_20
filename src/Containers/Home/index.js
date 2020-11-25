import React from "react";
import { Consumer } from "../../Context/localeContext";

const index = () => {
  return (
    <Consumer>
      {(value) => (
        <div>
          <h1>Home Page</h1>
          <p>{value.locale}</p>
          <button type="button" onClick={() => value.onChangeLocale('es')}>Change Locale</button>
        </div>
      )}
    </Consumer>
  );
};

export default index;
