import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import StudentGoals from "./components/StudentGoals";
import Timer from "./components/Timer";
import Updates from "./components/Updates";
import WebinarsAndEvents from "./components/WebinarsAndEvents";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <main>
        <Services />
        <StudentGoals />
        <WebinarsAndEvents />
        <Reviews />
        <Updates />
        <Timer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
