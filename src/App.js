import Navbar from './Navbar';
import Home from './Home';

function App() {
  //burada verilenler teyin etib ashagida {} ichinde chagirmaq olur
  return (
    <div className="App">
      <Navbar />
     <div className="content">
      <Home />
     </div>
    </div>
  );
}

export default App;
