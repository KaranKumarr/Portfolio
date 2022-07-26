import { Navbar, MainBody, PersonalInfo, Skills, ProjectsShowcase, Contact } from './components';
import './components/resources/styles/App.css';

function App() {
  return (
    <div className="font-serif h-[400vh] bg-slate-50">
      <div className='md:h-screen'>
        <Navbar />
        <MainBody />
      </div>
      <PersonalInfo />
      <Skills />
      <ProjectsShowcase />
      <Contact />
    </div>
  );
}

export default App;
