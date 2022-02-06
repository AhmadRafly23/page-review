import "./App.css";
import Deskripsi from "./components/deskripsi";
import Gambar from "./components/gambar";
import Review from "./components/review";

function App() {
  return (
    <div className="Container">
      <div className="Parent-box">
        <Gambar />
        <Deskripsi category="BAG" name="Brown" isDiscount={true} />
        <Review />
      </div>
    </div>
  );
}

export default App;
