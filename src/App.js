import styled from 'styled-components';

// components
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``;
