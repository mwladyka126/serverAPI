import React from "react";
import { Row, Col } from "reactstrap";
import io from "socket.io/client-dist/socket.io";

import "./Concert.scss";

class Concert extends React.Component {
  componentDidMount() {
    const { loadSeats, loadSeatsData } = this.props;
    loadSeats();

    this.socket = io.connect();
    this.socket.on("seatsUpdated", (seats) => loadSeatsData(seats));
  }
  freeTicketsForDay = (day) => {
    const { seats } = this.props;

    const takenSeats = seats.filter((seat) => seat.day === day).length;
    const freeSeats = 50 - takenSeats;
    return freeSeats;
  };

  render() {
    const { performer, price, genre, day, image } = this.props;

    return (
      <article className="concert">
        <Row noGutters>
          <Col xs="6">
            <div className="concert__image-container">
              <img
                className="concert__image-container__img"
                src={image}
                alt={performer}
              />
            </div>
          </Col>
          <Col xs="6">
            <div className="concert__info">
              <img
                className="concert__info__back"
                src={image}
                alt={performer}
              />
              <h2 className="concert__info__performer">{performer}</h2>
              <h3 className="concert__info__genre">{genre}</h3>
              <p className="concert__info__day-n-price">
                Day: {day}, Price: {price}$
              </p>
              <p className="concert__info__tickets">
                Only {this.freeTicketsForDay(day)} tickets left
              </p>
            </div>
          </Col>
        </Row>
      </article>
    );
  }
}

export default Concert;
