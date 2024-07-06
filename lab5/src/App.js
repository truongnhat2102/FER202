import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Menu from './component/Menu.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

const Home = lazy(() => import('./page/Home'));
const News = lazy(() => import('./page/News'));
const Quiz = lazy(() => import('./page/Quiz'));
const Contact = lazy(() => import('./page/Contact'));

function App() {
  return (
    <Router>
      <Menu/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;