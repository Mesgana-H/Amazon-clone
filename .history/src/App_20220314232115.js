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
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

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
						<Route path="/payment" element={
						<>
							<Header />
							<Elements stripe={promise}>
								<Payment />
							</Elements>
						
						</>
					}
					/>


				</Routes>
			</div>
		</Router>
	);
}

export default App;
