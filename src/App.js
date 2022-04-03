import { Navbar, MainBody, PersonalInfo, Skills } from './components';
import './components/resources/styles/App.css';

function App() {
  return (
    <div className="font-serif h-[400vh]">
      <div className='md:h-screen'>
        <Navbar />
        <MainBody />
      </div>
      <PersonalInfo />
      <Skills />
    </div>
  );
}

export default App;
