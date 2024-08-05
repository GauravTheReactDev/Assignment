import React from 'react';
import { Card, ListGroup, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: 'Jenny Wilson',
      rating: 5,
      comment:
        'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    },
    {
      name: 'Dianne Russell',
      rating: 4,
      comment:
        'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service!',
    },
    {
      name: 'Devon Lane',
      rating: 4,
      comment:
        'Normally we are wings, but theirs are lean meaty and tender, and not greasy, despite being fried. Very tasty!',
    },
  ];

  return (
    <Card className="bg-dark text-light card-feedback">
      <Card.Title className="mr-auto my-3 ml-4 fw-bold">Customer's Feedback</Card.Title>
      <Card.Body className="text-start card-feedback-body">
        <ListGroup variant="flush">
          {feedbacks.map((feedback, index) => (
            <ListGroup.Item
              key={index}
              className="bg-dark text-light border-0 text-start list-group-item-custom"
              style={{ marginTop: -20 }}
            >

              <div className="feedback-item">
                <Image src="/images/image4.png" roundedCircle className="customer-img" />
                <h6 className="fw-bold">{feedback.name}</h6>
              </div>
              <div className="d-flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < feedback.rating ? 'gold' : 'grey'} />
                ))}
              </div>
              <p>{feedback.comment}</p>
              <hr style={{ color: '#eee' }}></hr>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CustomerFeedback;
