import { Store } from './Store';
import { Container } from './components/Container.jsx';
import { QuoteBox } from "./components/QuoteBox.jsx";
import { CreditBox } from "./components/Credits";

function App() {
  return (
    <Store>
      <Container>
        <QuoteBox />
        <CreditBox />
      </Container>
    </Store>
  );
}

export default App;
