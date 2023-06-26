import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Company from "./Company";
import Main from "./components/Main";
import Overview from "./components/OverView";
import History from "./components/History";
import Organization from "./components/Organization";
import Bussiness from "./Bussiness";
import Perform from "./Perform";
import PerformAll from "./components/PerformAll";
import PerformProceeding from "./components/PerformProceeding";
import PerformIntend from "./components/PerformIntend";
import PerformDone from "./components/PerformDone";
import Marketing from "./Marketing";
import News from "./components/News";
import TiamoNews from "./components/TiamoNews";
import ScrollTop from "./components/ScrollTop";

function Router() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="/company" element={<Company />}>
            <Route path="overview" element={<Overview />} />
            <Route path="history" element={<History />} />
            <Route path="organization" element={<Organization />} />
          </Route>
          <Route path="/bussiness" element={<Bussiness />} />
          <Route path="/perform" element={<Perform />}>
            <Route index element={<PerformAll />} />
            <Route path="proceeding" element={<PerformProceeding />} />
            <Route path="intended" element={<PerformIntend />} />
            <Route path="done" element={<PerformDone />} />
          </Route>
          <Route path="/marketing" element={<Marketing />}>
            <Route index element={<News />} />
            <Route path="tiamo" element={<TiamoNews />} />
            <Route path="proceeding" element={<TiamoNews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
