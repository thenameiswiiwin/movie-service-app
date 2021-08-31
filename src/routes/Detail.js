function Detail({ location, history }) {
	if (location.state === undefined) {
		history.push('/');
	}

	return location.state ? <h1>{location.state.title}</h1> : null;
}

export default Detail;
