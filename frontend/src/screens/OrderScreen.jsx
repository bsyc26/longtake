import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message.jsx';
import Loader from '../components/Loader.jsx';
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice.js';

const OrderScreen = () => {
  return (
    <h1>OrderScreen</h1>
  );
};

export default OrderScreen;
