import './App.css';
import { LoginView } from './login/containers/LoginView';
import MainView from './mainView/containers/MainView';
import { useSelector } from 'react-redux';

function App() {
  const selectedUser = useSelector(state => state.users.loggedInUser);
  
  return (
    <div className="App">
      {!selectedUser && <LoginView />}
      {selectedUser && <MainView />}
    </div>
  );
}

export default App;
