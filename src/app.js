import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import OldEnergyProblems from './OldEnergyProblems';
import SolarPhysics from './SolarPhysics';
import SuccessStories from './SuccessStories';
import StudentsLeadingChange from './StudentsLeadingChange';
import EnergyFuture from './EnergyFuture';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/old-energy-problems" component={OldEnergyProblems} />
        <Route path="/solar-physics" component={SolarPhysics} />
        <Route path="/success-stories" component={SuccessStories} />
        <Route path="/students-leading-change" component={StudentsLeadingChange} />
        <Route path="/energy-future" component={EnergyFuture} />
      </Switch>
    </HashRouter>
  );
}

export default App;
