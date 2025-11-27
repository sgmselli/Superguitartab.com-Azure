import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Page } from "./components/Layout";
import Landing from "./pages/Landing/Landing";
import Song from "./pages/Song/Song";
import Account from "./pages/Account/Account";
import { NotFound } from "./pages/NotFound";
import Genre from "./pages/Genre/Genre";
import Style from "./pages/Style/Style";
import Browse from "./pages/Browse/Browse";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsAndConditions } from "./pages/TermsAndConditions";


function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Page children={<Landing />} />} />
          <Route path="/account" element={<Page children={<Account />} />} />
          <Route path="/browse" element={<Page children={<Browse />} />} />
          <Route path="/category/genre/:genre" element={<Page children={<Genre />} />} />
          <Route path="/category/style/:style" element={<Page children={<Style />} />} />
          <Route path="/song/:id" element={<Page children={<Song />} />} />
          <Route path="/privacy-policy" element={<Page children={<PrivacyPolicy />} />} />
          <Route path="/terms-and-conditions" element={<Page children={<TermsAndConditions />} />} />
          <Route path="/*" element={<Page children={<NotFound />} />} />
      </Routes>
    </Router>
  )
}

export default App
