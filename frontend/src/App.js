import './App.css';
import Header from './components/Header';
import {AuthProvider} from './context/AuthContext'
import Dashboard from './pages/Dashboard';
import BookingPage from './pages/BookingPage';
import UpcomingTripDetails from './pages/UpcomingTripDetailsPage';
import PastTripDetails from './pages/PastTripDetailsPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<AuthProvider>
					<Header/>
					<Routes>
						<Route element={<HomePage/>} path='/' exact/>
						<Route element={<LoginPage/>} path='/login/'/>
						<Route element={<Dashboard/>} path='/dashboard/'/>
						<Route element={<BookingPage/>} path='/booking/'/>
						<Route element={<UpcomingTripDetails/>} path='/upcomingTripDetails/'/>
						<Route element={<PastTripDetails/>} path='/pastTripDetails/'/>
					</Routes>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
