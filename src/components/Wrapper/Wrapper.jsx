import React from 'react';
import { Route, Routes} from "react-router-dom";
import Counter from "../Counter/Counter"
import Nav from "../Nav/Nav";
import Api from "../Api/Api";
class Wrapper extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        <Routes>
          <Route path = "counter" element = {<Counter/>}/>
          <Route path = "api" element = {<Api/>}/>
        </Routes>
      </div>
    )
  }
}

export default Wrapper