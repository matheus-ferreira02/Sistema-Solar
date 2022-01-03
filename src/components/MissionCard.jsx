import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div className="mission-card" data-testid="mission-card">
        <h3 className="mission-name" data-testid="mission-name">{ name }</h3>
        <ul className="details-mission">
          <li data-testid="mission-year">{ year }</li>
          <li data-testid="mission-country">{ country }</li>
          <li data-testid="mission-destination">{ destination }</li>
        </ul>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
