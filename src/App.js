import './App.css';
import Products from './pages/Products/Products';
import apples from './assets/images/apple.jpg';
import papaya from './assets/images/papaya.jpg';
import berries from './assets/images/berries.jpg';

const productsData = [{
  id: 1,
  title: 'Sweet Shimla Apples',
  price: '$20',
  image: apples,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
},
{
  id: 2,
  title: 'Papaya',
  price: '$45',
  image: papaya,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
},
{
  id: 3,
  title: 'Sweet Strawberry',
  price: '$52',
  image: berries,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
}];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex'}}>
        {productsData.map(k => <Products key={k.id} item={k} />)}
        </div>
      </header>
    </div>
  );
}

export default App;
