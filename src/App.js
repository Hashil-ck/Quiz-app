import {  Routes,Route } from 'react-router-dom';
import Quiz from './Quiz';
import LandingPage from './LandingPage';


function App() {
  return (
   <>
      <Routes>
       
          <Route path={'/'} element={<LandingPage/>}/>
          <Route path={'/quiz'} element={<Quiz/>}/>
      
      </Routes>
      
   </>
  );
}

export default App;
