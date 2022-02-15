import { Navbar, MainBody } from './components';
import PersonalInfo from './components/PersonalInfo';

function App() {
  return (
    <div className="font-serif p-6">
      <div className='h-screen'>
        <Navbar />
        <MainBody />
      </div>
      <PersonalInfo />
    </div>
  );
}

export default App;
