import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
	return (
		<Router>
			<div className="App">
				<Route />
				<Header />
				<Home />
			</div>
		</Router>
	);
}

export default App;
