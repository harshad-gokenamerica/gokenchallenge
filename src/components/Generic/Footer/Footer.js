import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { footerLinks } from '~/data/landing-page-data';


export default function Footer(){
    return (
            <Row className="footer px-5 py-2 d-md-flex">
                {footerLinks.map(section => {
                    const {id, category, subcategories, quickLinks, companyText} = section

                    return <Col key={id} xs={6} md={4} className="p-2 p-md-5">
                        <h3><b>{category}</b></h3>
                        {subcategories ? <div className="footer-subcategories-wrapper d-flex flex-column flex-wrap">
                            {subcategories?.map(cat => {
                                return <Link className="footer-subcategories-link" to={"/"}>{cat}</Link>
                            })}
                        </div> : ""}
                        {quickLinks ? <Row className="g-0 mx-2 my-4">
                            {quickLinks?.map(element => {
                                return <Col xs={6} lg={2}>
                                    <a href={element.link} target="_blank">{element.component}</a>
                                </Col>
                            })}
                        </Row> : ""}
                        <div className="footer-company-info">{companyText}</div>
                    </Col>
                })}
            </Row>
    )
}