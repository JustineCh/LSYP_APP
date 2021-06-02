import './App.css';
import { LoginView } from './login/containers/LoginView';
import MainView from './mainView/containers/MainView';
import { useSelector } from 'react-redux';

function App() {
  const selectedUserId = useSelector(state => state.users.loggedInUserId);
  console.log(selectedUserId);
  return (
    <div className="App">
      {!selectedUserId && <LoginView />}
      {selectedUserId && <MainView />}
    </div>
  );
}

export default App;
