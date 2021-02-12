import CountryProvider from '../context/CountryContext';
import CountrySearch from './CountrySearch';
import CountrySearchResults from './CountrySearchResults';
import CountryDetails from './CountryDetails';

function App() {
  return (
    <div className="app">
      <CountryProvider>
        <CountrySearch />
        <CountrySearchResults />
        <CountryDetails />
      </CountryProvider>
    </div>
  );
}

export default App;
