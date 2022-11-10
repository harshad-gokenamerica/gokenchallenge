import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import HeaderTextAndButton from '~/components/Generic/HeaderTextAndButton/HeaderTextAndButton';
import { joinTheTeamButtons } from '~/data/landing-page-data';

export default function BlogPostsSection({sectionTitle, blogPosts}) {
    return (
        <>
            <Row className="blog-section-wrapper">
                <Row className="blog-section-wrapper-row">
                    <h3 className="blog-section-wrapper-row-title">{sectionTitle}</h3>
                    {blogPosts.map(post => {
                        const {id, title, description, image} = post
                        return <Col className="blog-section-post" sm={12} md={4} key={id}>
                            <Card className="blog-section-post-card">
                                <Card.Img className="blog-section-post-image" src={image} alt="Card image" />
                                <Card.ImgOverlay className="blog-section-post-overlay">
                                    <div>
                                        <Card.Title className="blog-section-post-title">{title}</Card.Title>
                                    </div>
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Text className="blog-section-post-description">
                                        {description?.slice(0, 230)}...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Row>
            <HeaderTextAndButton element={joinTheTeamButtons[3]} variant={"footer"}/>
        </>
            
        );
}