import { useState } from "react";
import LanguageSelector from "./components/common/LanguageSelector";
import Home from "./pages/home";
import translations from "./i18n/translations";
const App = () => {
  const [lang, setLang] = useState("en");
  return (
    <>
      <LanguageSelector lang={lang} onChange={setLang} />
      <h2 style={{ marginTop: 20 }}>{translations[lang].title}</h2>
      <Home />
    </>
  );
};

export default App;
