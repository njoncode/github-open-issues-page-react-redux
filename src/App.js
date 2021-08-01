import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store'
import Header from './components/Header';
import Navbar from './components/Navbar';
import GithubIssues from './components/GithubIssues';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Navbar />
        <GithubIssues />
      </Provider>
    </div>
  );
}

export default App;
