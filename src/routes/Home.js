import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

const URL = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating';

function Home() {
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
		<section className="container mx-auto flex justify-center items-center">
			{isLoading ? (
				<div className="w-full h-screen	flex justify-center items-center font-light">
					<span className="loader__Text">Loading...</span>
				</div>
			) : (
				<div className="grid sm:grid-cols-1 sm:w-full xl:grid-cols-2 xl:w-10/12 gap-12 p-5 pt-16">
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

export default Home;
