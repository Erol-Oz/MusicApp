import './App.css';
import Routing from './components/Routing';
import { GettopArtistProvider } from './context/getTopArtistContext';
import { ThemeProvider } from './context/ThemeContext';
import { FilteredProvider } from './context/Filtered';


function App() {
  
  return (
    <div id='container' className="App">
      <GettopArtistProvider>
      <ThemeProvider>
      <FilteredProvider>
        <Routing/>
        </FilteredProvider>
      </ThemeProvider>
      </GettopArtistProvider>
    </div>
  );
}

export default App;
