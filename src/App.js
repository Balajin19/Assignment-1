import './App.css';
import { StreamedChart } from './components/StreamedChart/StreamedChart';
import { SprintBarChart } from './components/SprintBarChart/SprintBarChart';
import { SprintTable } from './components/SprintTable/SprintTable';
import { CardData } from './components/CardData/CardData';
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
