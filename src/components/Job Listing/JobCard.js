import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function JobCard({jobs}) {
  return (
    <Row xs={12} md={4} className="g-4">
      {jobs.map((job) => {
        const {text} = job
        return <Col>
          <Card>
            <Card.Body>
              <Card.Title>{text}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      })}
    </Row>
  );
}

export default JobCard;