import './App.css';
import { StreamedChart } from './components/StreamedChart';
import { SprintBarChart } from './components/SprintBarChart';
import { SprintTable } from './components/SprintTable';
import { CardData } from './components/CardData';

function App() {
  return (
    <div className="App">
      <StreamedChart />
      <SprintBarChart />
      <SprintTable />
      <CardData/>
    </div>
  );
}

export default App;
