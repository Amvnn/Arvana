import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { 
  Home, 
  Products, 
  ProductDetails, 
  About, 
  HowWeWorkPage, 
  Contact, 
  IdeasList, 
  IdeaDetail 
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="how-we-work" element={<HowWeWorkPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ideas" element={<IdeasList />} />
          <Route path="idea/:ideaId" element={<IdeaDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;