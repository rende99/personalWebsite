import React, {Component} from 'react';
import { Card, Elevation, Overlay} from "@blueprintjs/core";
import { Fade } from 'react-slideshow-image';
import AOS from 'aos'
import 'aos/dist/aos.css';
import './projectCard.css';

class ProjectCard extends Component {
    constructor(props) {
        super(props)
		this.state ={
            isOpen: false
        }
        this.technologies = this.props.technologies.map((item, key) => 
            <li key={key}>{item}</li>
        )
        this.images = this.props.images.map((item, key) => 
            <div className="each-fade" key={key}>
                <img className="image" src={item} alt="screenshot" />
            </div>
        )
        this.toggleOverlay = this.toggleOverlay.bind(this)
    }
    
    componentDidMount() {
        AOS.init()
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    toggleOverlay(){
        this.setState( {isOpen: !this.state.isOpen} )
    }
    
    render(){
       
        return (
            <div>
                <Card className="bp3-dark projectCard" onClick={this.toggleOverlay} interactive={false} elevation={Elevation.ZERO} data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                    <div className="cardHeader">
                        <h2 className="bp3-heading bp3-dark projectName"><b>{this.props.name}</b></h2>
                        <h6 className="bp3-heading bp3-dark projectDate">{this.props.date}</h6>
                    </div>
                    <div className="cardContent">
                        <div className="imageDiv">
                            <img className="projectImage" src={'./img/' + this.props.imgName}  alt="Screenshot of project"></img>
                        </div>
                        <div className="descriptionDiv">
                            <h3 className="bp3-heading bp3-dark projectHeader">Brief</h3>
                            <p>{this.props.brief}</p>
                        </div>
                        <div className="techDiv">
                            <h3 className="bp3-heading bp3-dark projectHeader">Technologies</h3>
                            <ul className="techList">
                                {this.technologies}
                            </ul>
                        </div>
                    </div>
                </Card>
                <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay} canEscapeKeyClose={true} canOutsideClickClose={true} className="overlay">
                    <Fade className="fadeParent" autoplay={false} transitionDuration={300}>
                        {this.images}
                    </Fade>
                </Overlay>
            </div>


        );
    }
}

export default ProjectCard;