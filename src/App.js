import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={ItemListContainer} />
                <Route path="/producto/:id" component={ItemDetailContainer} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
        </Router>
    );
}

export default App;
