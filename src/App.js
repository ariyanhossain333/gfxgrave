import './App.css';
import Header from './components/Header';
import FirstPage from './components/FirstPage';
import BestDesignes from './components/BestDesignes';
import NftCollection from './components/NftCollection';
import TrendingPage from './components/TrendingPage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='*:m-0 p-0 bg-gradient-to-r from-purple-600 to-indigo-950 font-xyz text-[25px] '>
      <Header/>
      <FirstPage/>
      <BestDesignes/>
      <NftCollection/>
      <TrendingPage/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;