import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StepOne from './components/registationFrom/StepOne';
import StepTwo from './components/registationFrom/StepTwo';
import StepThree from './components/registationFrom/StepThree';



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<StepOne />}/>
        <Route path="/step_two" element={<StepTwo />} />
        <Route path="/step_three" element={<StepThree />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
