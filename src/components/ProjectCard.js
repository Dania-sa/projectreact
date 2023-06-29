import {Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, lin}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={lin}>See the project</a>
                    
                </div>
            </div>
        </Col>
    )
}