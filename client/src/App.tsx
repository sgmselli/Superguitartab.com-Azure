import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
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
          <Route path="/" element={<Layout children={<Landing />} />} />
          <Route path="/account" element={<Layout children={<Account />} />} />
          <Route path="/browse" element={<Layout children={<Browse />} />} />
          <Route path="/category/genre/:genre" element={<Layout children={<Genre />} />} />
          <Route path="/category/style/:style" element={<Layout children={<Style />} />} />
          <Route path="/song/:id" element={<Layout children={<Song />} />} />
          <Route path="/privacy-policy" element={<Layout children={<PrivacyPolicy />} />} />
          <Route path="/terms-and-conditions" element={<Layout children={<TermsAndConditions />} />} />
          <Route path="/*" element={<Layout children={<NotFound />} />} />
      </Routes>
    </Router>
  )
}

export default App
