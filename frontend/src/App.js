import './App.css';
import Header from './components/Header';
import {AuthProvider} from './context/AuthContext'
import TripsListPage from './pages/TripsListPage';
import BookingPage from './pages/BookingPage';
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
						<Route element={<TripsListPage/>} path='/dashboard/'/>
						<Route element={<BookingPage/>} path='/booking/'/>
					</Routes>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
