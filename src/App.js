import Navbar from "./Components/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from "./Components/Carousel";
import Prathu from "./Components/Prathu";
function App() {
  return (
    <div style={{padding:"20px"}} >
      <Navbar/>
      <Carousel/>
      <Prathu/>
      <Prathu/>
    </div>
  );
}

export default App;
