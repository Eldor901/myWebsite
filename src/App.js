import Routes from "./routes/routes";
import {BrowserRouter} from "react-router-dom";
import i18n from "./locales/i18n";


function App() {
    if(localStorage.getItem('i18nextLng')) {
        i18n.changeLanguage(localStorage.getItem('i18nextLng'));
    }

    return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
