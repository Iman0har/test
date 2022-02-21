import logo from './logo.svg';
import './App.css';
import { Mainpage } from './components/Mainpage';
import{SearchPage} from './components/SearchPage'
import { Page } from './components/Page';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {/* <Mainpage/> */}

       <Routes>
         <Route  path="/" element ={<Mainpage/>}></Route>
         <Route  path="/search" element ={<SearchPage/>}></Route>
         <Route  path="/page/:id" element ={<Page/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
