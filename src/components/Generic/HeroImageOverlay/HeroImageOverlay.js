import Card from 'react-bootstrap/Card';
import landingHero from "~/assets/landing-page-hero.png";

export default function HeroImageOverlay() {
  return (
    <Card className="hero-card text-light border-0">
      <Card.Img className="hero-card-image" src={landingHero} alt="Card image" />
      <Card.ImgOverlay className="hero-card-overlay">
        <div className='hero-card-overlay-copy'>
          <Card.Title className="hero-card-overlay-title">Life at Goken</Card.Title>
          <Card.Text className="hero-card-overlay-text">
            We hire good people and empower them to do <b><i>great work!</i></b>
          </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}
