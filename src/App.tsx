import React from 'react';

import {Routes,Route} from "react-router";
import  {Home} from './pages/Home/Home';
import {MonthStatistics} from "./pages/MonthStatistics/components/MonthStatistics";
import {Header} from "./pages/shared/Header/Header";
import {Container} from "./styles/styles"

function App() {
  return (
    <Container>
      <Header/>
        <Routes>
          <Route path = "/" element ={<Home />}/>
          <Route path="/month-statics" element={<MonthStatistics />}/>
        </Routes>
    </Container>
  );
}

export default App;
