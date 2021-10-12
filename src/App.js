import { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
    //console.log(eventData);
  }, []);

  return (
    <>
    <Router>
      <Navbar>
        <Route path='/'/>
        <Header />
        <Sidebar />
        {!loading ? <Map eventData={eventData} /> : <Loader />}
      </Navbar>
    </Router>
    </>
  );
}

export default App;
