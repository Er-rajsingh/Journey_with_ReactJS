import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="textUtils" about="About US" />
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyse" />
      </div>
    </>
  );
}

export default App;
