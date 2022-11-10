import { Row, Col, Image } from "react-bootstrap"
import { capitalize } from "lodash"
import jobDetailsImage from "~/assets/jobDetailsImage.png"
const parse = require("html-react-parser")

export default function JobCard({job}){
    const{id, text, categories, description, lists, workplaceType, applyUrl} = job
    return(
        <>
            <Row className="p-5 pb-0">
                    <Col sm={12} lg={6} className="d-flex justify-content-center flex-column text-center">
                        <Row>
                            <p>Work with Us</p>
                            <b>
                                <h4>{text}</h4>
                                <i>{categories.location}</i>
                            </b>
                            <i>{capitalize(workplaceType)}</i>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <a className="button-primary small my-4 text-decoration-none"  href={applyUrl}>Apply Here</a>
                        </Row>
                        <Row className="fst-italic">
                            <Col sm={6}>
                                <b>Job ID</b> 
                                <p>{id}</p>
                            </Col>
                            <Col sm={6}>
                                <b>Department</b> 
                                <p>{categories.department}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} lg={6}>
                            <Image className="img-fluid" src={jobDetailsImage}/>
                    </Col>
            </Row>
            <Row className="p-5 pb-0">
                    <Col sm={12} className="bg-light p-5 mb-5">
                        <Row>
                            <Row className="job-card-description">
                                {parse(description)}
                            </Row>
                            {lists.map(element => {
                                return(
                                    <>
                                        <Row className="job-card-lists">
                                            <h4>{element.text}</h4>
                                            <div>{parse(element.content)}</div>
                                        </Row>
                                    </>
                                )
                            })}
                        </Row>
                        <Row className="d-flex justify-content-center">
                           <a className="button-primary small my-4 text-decoration-none"  href={applyUrl}>Apply Here</a>
                        </Row>
                    </Col>
            </Row>
        </>
    )
}