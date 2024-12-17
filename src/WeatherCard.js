import React from 'react';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import { FaCloud, FaSun, FaCloudRain, FaWind } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Función para obtener el icono basado en la descripción del clima
const getWeatherIcon = (description) => {
  if (description.includes("clear")) return <FaSun size={50} color="#FFA500" />;
  if (description.includes("cloud")) return <FaCloud size={50} color="#B0C4DE" />;
  if (description.includes("rain")) return <FaCloudRain size={50} color="#4682B4" />;
  return <FaCloud size={50} color="#A9A9A9" />;
};

const WeatherCard = ({ weather }) => {
  const { main, weather: weatherDetails, wind, name } = weather;
  const description = weatherDetails[0].description;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Row className="mt-4 justify-content-center">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="shadow-lg border-light rounded">
            <Card.Body>
              <Card.Title className="text-center">
                <h3>{name}</h3>
                {getWeatherIcon(description)}
              </Card.Title>

              <Card.Text className="text-center text-muted">
                <h5>
                  {description.charAt(0).toUpperCase() + description.slice(1)}
                </h5>
                <Badge pill bg="warning" className="mr-2">Temp: {main.temp}°C</Badge>
                <Badge pill bg="info" className="mr-2">Humedad: {main.humidity}%</Badge>
                <Badge pill bg="success" className="mr-2">Viento: {wind.speed} m/s</Badge>
              </Card.Text>

              <Row>
                <Col>
                  <p className="text-center">Máxima: {main.temp_max}°C</p>
                </Col>
                <Col>
                  <p className="text-center">Mínima: {main.temp_min}°C</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
};

export default WeatherCard;
