import React from "react";
import { Link } from "react-router-dom";
import { CharacterCard } from "../component/card.jsx";
import { PlanetCard } from "../component/planet_card.jsx";
import PropTypes from "prop-types";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			characters: [],
			planets: []
		};
	}

	componentDidMount = () => {
		fetch("https://swapi.co/api/people/?format=json")
			.then(res => res.json())
			.then(response => {
				if (typeof response === typeof {}) {
					this.setState({ characters: response.results });
				} else {
					this.setState({ characters: [] });
				}
			})
			.catch(error => console.error("Error:", error));

		fetch("https://swapi.co/api/planets/?format=json")
			.then(res => res.json())
			.then(response => {
				console.log("Success:", typeof response);
				//console.log(response);
				if (typeof response === typeof {}) {
					this.setState({ planets: response.results });
				} else {
					this.setState({ planets: [] });
				}
			})

			.catch(error => console.error("Error:", error));
	};

	render() {
		return (
			<div className="container">
				<div className="row scroller">
					<h3 className="m-3 text-danger">Characters</h3>
					<div className="card-columns d-flex justify-content-between">
						{this.state.characters.map((elem, index) => {
							return (
								<CharacterCard
									key={index}
									name={elem.name}
									gender={elem.gender}
									eye_color={elem.eye_color}
									hair_color={elem.hair_color}
									index={index}
								/>
							);
						})}
					</div>
				</div>
				<div className="row scroller">
					<h3 className="m-3 text-danger">Planets</h3>
					<div className="card-columns d-flex justify-content-between">
						{this.state.planets.map((elem, index) => {
							return (
								<PlanetCard
									className="textCustom"
									key={index}
									name={elem.name}
									population={elem.population}
									terrain={elem.terrain}
									index={index}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

// Card.propTypes = {
// 	name: PropTypes.string,
// 	species: PropTypes.array,
// 	gender: PropTypes.string,
// 	eye_color: PropTypes.string,
// 	hair_color: PropTypes.string
// };
