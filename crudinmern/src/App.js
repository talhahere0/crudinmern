
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import EditDelete from './Pages/EditDelete/EditDelete';
import Home from './Pages/Home/Home';
import Update from './Pages/Update/Update';
import TopNavbar from './Pages/Navbar/TopNavbar';

function App() {
  return (
    <>
      
      <Router>
      <TopNavbar/>
        <Switch>
       
          
          <Route  exact path="/" component={Home}/>
          <Route  exact path="/EditDelete" component={EditDelete}/>
          <Route  exact path="/Update/:id" component={Update}/>
           
          
        </Switch>
      
      </Router>
 
    </>
  );
}

export default App;
