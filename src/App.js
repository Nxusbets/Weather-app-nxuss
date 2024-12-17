import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion'; 
import WeatherCard from './WeatherCard';
import ErrorMessage from './ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: 'b1a2c097c64758112a22cb02be60dae1', 
          units: 'metric',
          lang: 'es'
        }
      });

      setWeather(response.data);
    } catch (err) {
      setError('No se pudo obtener el clima. Por favor, verifica el nombre de la ciudad.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="mx-auto">
          <motion.h1 
            className="text-center" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Clima Global NxuS
          </motion.h1>
          
          <motion.div 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Form.Control 
              type="text" 
              placeholder="Ingresa una ciudad" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Button 
              className="mt-3 w-100" 
              onClick={fetchWeather} 
              disabled={loading}
            >
              {loading ? <Spinner animation="border" size="sm" /> : 'Obtener Clima'}
            </Button>
          </motion.div>
        </Col>
      </Row>
      
      {error && <ErrorMessage message={error} />}
      
      {/* Animación en la tarjeta de clima */}
      {weather && !loading && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ type: 'spring', stiffness: 120, damping: 25 }}
        >
          <WeatherCard weather={weather} />
        </motion.div>
      )}
    </Container>
  );
};

export default App;

