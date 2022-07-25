import { Navbar, MainBody, PersonalInfo, Skills } from './components';
import ProjectsShowcase from './components/ProjectsShowcase';
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
    </div>
  );
}

export default App;
