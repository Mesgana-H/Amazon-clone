import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import ReducerExample from './ReducerExample';
import Login from './Login';
function App() {
	return (
		// <div>
		// 	<ReducerExample />
		// </div>
		<Router>
			<div className="App">
				<Routes>
						{/*First route  */}
					<Route path="/" element={
						<>
						<Header />
						<Home />
						</>
					}
					/>
						{/*Second route  */}
					<Route path="/checkout" element={
						<>
						<Header />
						<Checkout />
						</>
					}
					/>
						<Route path="/login" element={<Login/>}/>

				</Routes>
			</div>
		</Router>
	);
}

export default App;
