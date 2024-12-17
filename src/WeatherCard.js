import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FaShareAlt, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';  // Icons de compartir
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share'; // Componentes de compartir

const WeatherCard = ({ weather }) => {
  const { main, weather: weatherDetails, wind, name } = weather;

  // URL para compartir
  const shareUrl = window.location.href;  // Puede ser cualquier URL que desees compartir

  return (
    <Row className="mt-4">
      <Col md={6} className="mx-auto">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
            <Card.Text className="text-center">
              <h4>{weatherDetails[0].description}</h4>
              <p>Temperatura: {main.temp}°C</p>
              <p>Humedad: {main.humidity}%</p>
              <p>Viento: {wind.speed} m/s</p>
            </Card.Text>

            {/* Botones de compartir */}
            <div className="text-center mt-3">
              <h5>Compartir:</h5>
              <div>
                <FacebookShareButton url={shareUrl} quote={`Clima en ${name}: ${weatherDetails[0].description}`}>
                  <Button variant="primary" className="m-1">
                    <FaFacebook /> Facebook
                  </Button>
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl} title={`Clima en ${name}: ${weatherDetails[0].description}`}>
                  <Button variant="info" className="m-1">
                    <FaTwitter /> Twitter
                  </Button>
                </TwitterShareButton>

                <WhatsappShareButton url={shareUrl} title={`Clima en ${name}: ${weatherDetails[0].description}`}>
                  <Button variant="success" className="m-1">
                    <FaWhatsapp /> WhatsApp
                  </Button>
                </WhatsappShareButton>

                <EmailShareButton url={shareUrl} subject={`Clima en ${name}`} body={`Clima en ${name}: ${weatherDetails[0].description}`}>
                  <Button variant="danger" className="m-1">
                    <FaShareAlt /> Email
                  </Button>
                </EmailShareButton>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default WeatherCard;
