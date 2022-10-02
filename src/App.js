import Header from './Pages/Header';
import SideLeftDesign from './Pages/SideLeftDesign';
import SideRightDesign from './Pages/SideRightDesign';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Skills from './Pages/Skills';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import SidebarModal from './Pages/SidebarModal';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <SidebarModal />
        <SideLeftDesign />
        <SideRightDesign />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/services'>
            <Service />
          </Route>
          <Route path='/skills'>
            <Provider store={store}>
              <Skills />
            </Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
