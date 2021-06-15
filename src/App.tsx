import Routes from './routes';

import { GlobalStyles } from './styles/GlobalStyles'
import { SearchProvider } from './contexts/Search';

function App() {

  return (
    <SearchProvider>
      <Routes />
      <GlobalStyles />
    </SearchProvider>
  );
}

export default App;
