import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsGrid from './components/ProductsGrid';

function App() {
  return (
    <div>
    <div className="container">
        <Header></Header>
        <ProductsGrid></ProductsGrid>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
