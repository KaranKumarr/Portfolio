import { Navbar, MainBody } from './components';
import PersonalInfo from './components/PersonalInfo';

function App() {
  return (
    <div className="font-serif h-screen">
      <div className='md:h-screen sm:h-4/5 h-4/6'>
        <Navbar />
        <MainBody />
      </div>
      <PersonalInfo />
    </div>
  );
}

export default App;
