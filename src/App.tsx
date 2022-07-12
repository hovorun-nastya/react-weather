import React from 'react';
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'



function App() {
  const element = useRoutes(routes);
  console.log(element)
  return element

}
export default App;
