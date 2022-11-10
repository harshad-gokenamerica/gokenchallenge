import Card from 'react-bootstrap/Card';

export default function ImageAndText({element}) {
  const {id, title, description, image} = element
  return (
    <>
      <Card key={id} className={`image-text-wrapper ${id} ${(id % 2 !== 0) ? "" : "right"}`}>
        <Card.Img className="image-text-img" src={image}/>
        <div className={`image-text-strike ${id} ${(id % 2 !== 0) ? "" : "right"}`}></div>
        <Card.Body className="image-text-body">
          <Card.Title className="image-text-title">{title}</Card.Title>
          <Card.Text className="image-text-copy">{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
