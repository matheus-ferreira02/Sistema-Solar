import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const alt = `Planeta ${planetName}`;

    return (
      <div className="planet" data-testid="planet-card">
        <img className={ planetName } src={ planetImage } alt={ alt } />
        <h3 data-testid="planet-name">{planetName}</h3>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
