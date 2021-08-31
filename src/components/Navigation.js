import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className="z-10 fixed top-12 left-2.5 flex flex-col bg-white px-2.5 py-5 shadow-xl rounded-md text-blue-700 uppercase text-sm text-center font-semibold">
			<Link to="/" className="mb-3">
				Home
			</Link>
			<Link to="/about">About</Link>
		</div>
	);
}

export default Navigation;
