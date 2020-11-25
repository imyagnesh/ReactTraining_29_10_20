import { createContext, useState } from "react";

export const { Provider, Consumer } = createContext();

const LocaleProvider = ({ children }) => {
const [locale, setLocale] = useState('en')
  return (
    <Provider
      value={{
        locale,
        onChangeLocale: (newLocale) => setLocale(newLocale)
      }}
    >
      {children}
    </Provider>
  );
};

export default LocaleProvider;
