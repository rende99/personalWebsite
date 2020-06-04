import React, {Component} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import './awardCard.css';

class AwardCard extends Component {
    constructor(props) {
        super(props)
		this.state ={
        }
    }
    
    componentDidMount() {
        AOS.init()
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render(){
       
        return ( 
            <div className="awContainer">
                <div className="awContent">
                    <div className="awHeader">
                        <h2 className="awName">{this.props.name}</h2>
                        <h4 className="awDate">{this.props.date}</h4>
                    </div>
                    <p className="awDesc">{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default AwardCard;