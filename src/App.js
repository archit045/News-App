import './App.css';
import NavBar from './components/NavBar';
import News from './components/News'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <News/>
   </BrowserRouter>
   </>
  );
}

export default App;
