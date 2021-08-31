import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
	return (
		<HashRouter>
			<Route path="/" exact={true}>
				<h1>Home</h1>
			</Route>
			<Route path="/about">
				<h1>About</h1>
			</Route>
		</HashRouter>
	);
}

export default App;
