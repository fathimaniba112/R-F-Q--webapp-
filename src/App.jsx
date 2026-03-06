 import "./index.css";
 import Navbar from "./pages/navbar";
 import OpportunityFilter from "./pages/filter";
import OpportunityTable from "./pages/table";
import Footer from "./pages/footer";
import ProcurementHeader from "./pages/cards";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

 
   
      <Navbar />
          
       <ProcurementHeader/>
             <OpportunityFilter />
             <OpportunityTable/>
             <Footer/>

    </div>
  );
}

export default App;