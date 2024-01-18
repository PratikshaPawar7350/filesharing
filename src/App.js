import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>

          <Routes>
            <Route exactpath="/Health" element={<News key="Sports" pageSize={5} country="In" category="Health" />} />
            <Route exact path="/General" element={<News key="General" pageSize={5} country="In" category="General" />} />
            <Route exact path="/Business" element={<News key="Business" pageSize={5} country="In" category="Business" />} />
            <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={5} country="In" category="Entertainment" />} />
            <Route exact path="/Science" element={<News  key="Science"pageSize={5} country="In" category="Science" />} />
            <Route exact path="/Sports" element={<News key="Sports" pageSize={5} country="In" category="Sports" />} />
            <Route exact path="/Technology" element={<News  key="Technology"pageSize={5} country="In" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
