import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App"
import About from 'views/About';
import Workouts from 'views/Workouts';
import Meals from 'views/Meals';
import Timer from 'views/Timer';

const Router: React.FC = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="about" element={<About />}/>
            <Route path="workouts" element={<Workouts />}/>
            <Route path="meals" element={<Meals />}/>
            <Route path="timer" element={<Timer />}/>
          </Routes>
      </BrowserRouter>
    )
}

export default Router;