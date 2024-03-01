import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/widgets';

function App() {
  return (
    <div className="App">
     <Sidebar/>
     {/* feed */}
<Feed/>
<Widgets/>
    </div>
  );
}

export default App;
