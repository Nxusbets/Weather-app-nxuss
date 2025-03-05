import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FaShareAlt, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';

const WeatherCard = ({ weather }) => {
    const { main, weather: weatherDetails, wind, name } = weather;
    const shareUrl = window.location.href;

    return (
        <Row className="mt-4">
            <Col md={6} className="mx-auto">
                <Card className="bg-dark text-white shadow"> {/* Agregamos la clase shadow para un efecto de sombra sutil */}
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h3>{name}</h3> {/* Encabezado más grande */}
                        </Card.Title>
                        <Card.Text className="text-center">
                            <h4>{weatherDetails[0].description}</h4>
                            <p><span className="font-weight-bold">Temperature:</span> {main.temp}°C</p> {/* Texto en negrita */}
                            <p><span className="font-weight-bold">Humidity:</span> {main.humidity}%</p>
                            <p><span className="font-weight-bold">Wind:</span> {wind.speed} m/s</p>
                        </Card.Text>

                        <div className="text-center mt-3">
                            <h5>Share:</h5> {/* Etiqueta en mayúscula */}
                            <div className="d-flex justify-content-center"> {/* Centra los botones horizontalmente */}
                                <FacebookShareButton url={shareUrl} quote={`Clima en ${name}: ${weatherDetails[0].description}`}>
                                    <Button variant="primary" className="m-1 rounded-pill"> {/* Botones redondeados */}
                                        <FaFacebook /> Facebook
                                    </Button>
                                </FacebookShareButton>

                                <TwitterShareButton url={shareUrl} title={`Clima en ${name}: ${weatherDetails[0].description}`}>
                                    <Button variant="info" className="m-1 rounded-pill">
                                        <FaTwitter /> Twitter
                                    </Button>
                                </TwitterShareButton>

                                <WhatsappShareButton url={shareUrl} title={`Clima en ${name}: ${weatherDetails[0].description}`}>
                                    <Button variant="success" className="m-1 rounded-pill">
                                        <FaWhatsapp /> WhatsApp
                                    </Button>
                                </WhatsappShareButton>

                                <EmailShareButton url={shareUrl} subject={`Clima en ${name}`} body={`Clima en ${name}: ${weatherDetails[0].description}`}>
                                    <Button variant="danger" className="m-1 rounded-pill">
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