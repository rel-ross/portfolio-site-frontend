import './App.css';

import NavSection from './Containers/NavSection/NavSection'
import PhotoSection from './Containers/PhotoSection/PhotoSection'
import BodySection from './Containers/BodySection/BodySection'


function App() {
  return (
    <div className="App">
      <PhotoSection />
      <NavSection />
      <BodySection />
     
    </div>
  );
}

export default App;
