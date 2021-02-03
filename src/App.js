import CountryProvider from './context/CountryContext';
import CountrySearch from './components/CountrySearch';
import CountrySearchResults from './components/CountrySearchResults';
import CountryDetails from './components/CountryDetails';

import './stylesheets/index.scss';

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
