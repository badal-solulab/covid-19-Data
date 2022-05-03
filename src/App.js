import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Timer from './pages/Timer';
// import Bgchange from './pages/Bgchange';
// import InputBox from './pages/InputBox';
// import Todolist from './pages/ToDoList';
// import Keepnotes from './pages/KeepNotes';
import CovidData from './pages/CovidData';
// import Pikachu from './pages/Pikachu';

function App() {
  return (
    <div className="App">
    {/* <Switch>
      <Route path='/' exact component={Timer}/>
      <Route path='/pikachu' exact component={Pikachu}/>
    </Switch> */}
     {/* <Timer/> */}
      {/* <Bgchange /> */}
      {/* <InputBox /> */}
      {/* <Todolist /> */}
      {/* <Keepnotes /> */}
      <CovidData />
      {/* <Pikachu /> */}
    </div>
  );
}

export default App;
