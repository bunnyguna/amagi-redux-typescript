import { Provider } from 'react-redux';
import './App.css';
import { store } from '../src/store';
import VideoStore from './VideoStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <VideoStore />
      </div>
    </Provider>
  );
}

export default App;
