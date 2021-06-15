import Routes from './routes';

import Header from './components/Header'
import { GlobalStyles } from './styles/GlobalStyles'
import { SearchProvider } from './contexts/Search';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const signed = localStorage.getItem('signed') === 'true' ? true : false
    setAuthenticated(signed)
  }, [authenticated])

  return (
    <SearchProvider>
      {authenticated && <Header /> }
      <Routes />
      <GlobalStyles />
    </SearchProvider>
  );
}

export default App;
