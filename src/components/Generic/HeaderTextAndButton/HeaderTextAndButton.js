import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

export default function HeaderTextAndButton({element, variant}) {
  const {id, title, videoLink, subtitle, buttonText} = element
  return (
    <Card key={id} className={`header-text-button-wrapper ${variant}`}>
      <Card.Body className="header-text-button-body">
        <Row className="py-4">
            <Card.Title className="header-text-button-title">{title}</Card.Title>
            {subtitle? <Card.Text className="header-text-button-subtitle">{subtitle}</Card.Text> : null}
        </Row>
        {videoLink ? (
            <Row className="header-text-button-content">
                <Col className="header-text-button-content-bottom-gray" sm={0} md={3}><div></div></Col>
                <Col className="header-text-button-content-video" sm={0} md={6}>
                    <Card.Img src={videoLink}></Card.Img>
                </Col>
                <Col className="header-text-button-content-top-gray" sm={0} md={3}><div></div></Col>
            </Row>
        ) : null}
        {buttonText ? <Button className={`button-primary ${variant ? `${variant}` : ""}`}>{buttonText}</Button> : null}
      </Card.Body>
    </Card>
  );
}
