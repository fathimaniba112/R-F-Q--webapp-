import "./index.css";
import Navbar from "./pages/navbar";
import OpportunityFilter from "./pages/filter";
import OpportunityTable from "./pages/table";
import Footer from "./pages/footer";
import ProcurementHeader from "./pages/cards";
import WalletHome from "./pages/wallet";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <ProcurementHeader />
      <OpportunityFilter />
      <OpportunityTable />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<WalletHome />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;