import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import ReducerExample from './ReducerExample';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React,{ useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';

function App() {

	const [{ }, dispatch] = useStateValue();
	useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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
						<Route path="/payment" element={<Payment/>}/>


				</Routes>
			</div>
		</Router>
	);
}

export default App;
