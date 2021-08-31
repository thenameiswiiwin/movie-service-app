import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster, genres }) {
	return (
		<Link
			to={{
				pathname: `movie/${id}`,
				state: {
					year,
					title,
					summary,
					poster,
					genres,
				},
			}}
		>
			<div className="flex items-start justify-between bg-white mb-16 font-light p-5 rounded-md text-gray-600 shadow-xl">
				<img
					src={poster}
					alt={title}
					title={title}
					className="relative -top-12 max-w-xs w-full mr-7 shadow-2xl"
				/>
				<div className="movie__data">
					<h1 className="font-light m-0 mb-1.5 text-2xl text-gray-800">{title}</h1>
					<h5 className="font-light m-0 mr-2.5 text-sm">{year}</h5>
					<ul className="p-0 m-0 flex flex-wrap mx-1.5 my-0">
						{genres.map((genre, index) => (
							<li key={index} className="mr-2.5 text-sm">
								{genre}
							</li>
						))}
					</ul>
					<p className="mt-2">{summary}</p>
				</div>
			</div>
		</Link>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
