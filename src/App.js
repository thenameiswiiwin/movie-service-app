import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './components/Movie';

const URL = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	async function getMovies() {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get(URL);
		setIsLoading(false);
		setMovies(movies);
	}

	useEffect(() => {
		getMovies();
	});

	return (
		<section className="container">
			{isLoading ? (
				<div className="loader">
					<span className="loader__Text">Loading...</span>
				</div>
			) : (
				<div className="movies">
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							year={movie.year}
							title={movie.title}
							summary={movie.summary}
							poster={movie.medium_cover_image}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</section>
	);
}

export default App;
