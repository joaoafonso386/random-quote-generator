import { Store } from './Store';
import { Container } from './components/Container.jsx';
import { QuoteBox } from "./components/QuoteBox.jsx";

function App() {
  return (
    <Store>
      <Container>
        <QuoteBox />
      </Container>
    </Store>
  );
}

export default App;
