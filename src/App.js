// import './App.css';

// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// export default class App extends Component {
//   c = "Harry"
//   render() {
//     return (
//       <div>
//       <Router>
//       <Navbar />
//         <Switch>
//           <Route path="/"><News pageSize={7} country="in" category="general" /></Route>
//           <Route path="/bussiness"><News pageSize={7} country="in" category="business" /></Route>
//           <Route path="/entertainment"><News pageSize={7} country="in" category="entertainment" /></Route>
//           <Route path="/science"><News pageSize={7} country="in" category="science" /></Route>
//           <Route path="/sports"><News pageSize={7} country="in" category="sports" /></Route>
//           <Route path="/technology"><News pageSize={7} country="in" category="technology" /></Route>
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
// }


// // 0ab93df5f76b459bbf9dd9c39dbcc3d5

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element = {<News key="general" pageSize = {7} country = "in" category = "general"/>}/>
            <Route exact path="/business"element= {<News key="business" pageSize={7} country="in" category="business" />}/>
            <Route exact path="/entertainment"element = {<News key="entertainment" pageSize={7} country="in" category="entertainment" />}/>
            <Route exact path="/general"element= {<News key="general" pageSize={7} country="in" category="general"/>}/>
            <Route exact path="/health"element={<News key="health" pageSize={7}  country="in" category="health" />}/>
            <Route exact path="/science"element={<News key="science" pageSize={7}  country="in" category="science" />}/>
            <Route exact path="/sports"element={<News key="sports" pageSize={7}  country="in" category="sports"/>}/>
            <Route exact path="/technology"element={<News key="technology" pageSize={7} country="in"   category="technology"/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App


