import React from "react";
import PropTypes from "prop-types";

export class PlanetDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			planets: null
		};
	}

	componentDidMount = () => {
		fetch(
			"https://swapi.co/api/planets/" +
				this.props.match.params.theid +
				"?format=json"
		)
			.then(res => res.json())
			.then(response => {
				console.log("Success:", typeof response);
				console.log(response);
				if (typeof response === typeof {}) {
					this.setState({ planets: response });
				} else {
					this.setState({ planets: [] });
				}
			})

			.catch(error => console.error("Error:", error));
	};

	render() {
		if (!this.state.planets) return <p>Loading...</p>;
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img
							src="http://via.placeholder.com/800x600"
							className="w-100"
						/>
					</div>
					<div className="col-6 background">
						<div className="text-center m-3">
							<h2>{this.state.planets.name}</h2>
							<p>
								Sed ut perspiciatis unde omnis iste natus error
								sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae
								ab illo inventore veritatis et quasi architecto
								beatae vitae dicta sunt explicabo. Nemo enim
								ipsam voluptatem quia voluptas sit aspernatur
							</p>
						</div>
					</div>
				</div>
				<div className="row ml-1 mr-1 background border-top border-danger">
					<div className="col-12 d-flex justify-content-between text-danger text-center">
						<div className="appearances p-2 m-3">
							<h6>Name</h6>
							<p>{this.state.planets.name}</p>
						</div>
						<div className="affiliations m-3 p-2">
							<h6>Climate</h6>
							<p className="text-center">
								{this.state.planets.climate}
							</p>
						</div>
						<div className="locations p-2 m-3">
							<h6>Population</h6>
							<p>{this.state.planets.population}</p>
						</div>
						<div className="gender p-2 m-3">
							<h6>Orbital Period</h6>
							<p>{this.state.planets.orbital_period}</p>
						</div>
						<div className="dimensions p-2 m-3">
							<h6>Rotation Period</h6>
							<p className="text-center">
								{this.state.planets.rotation_period}
							</p>
						</div>
						<div className="species p-2 m-3">
							<h6>Diameter</h6>
							<p>{this.state.planets.diameter}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

PlanetDetails.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string,
	results: PropTypes.object
};
