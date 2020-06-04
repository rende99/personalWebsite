import React, {Component} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import './knowledgeCard.css';

class KnowledgeCard extends Component {
    constructor(props) {
        super(props)
		this.state ={
        }
        this.list = this.props.list.map((item, key) => 
            <span key={key} className="item">&nbsp;&nbsp;&nbsp;&nbsp;  {item}   &nbsp;&nbsp;&nbsp;&nbsp;</span>
        )
    }
    
    componentDidMount() {
        AOS.init()
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render(){
       
        return ( 
            <div className="programmingDiv">
                <div className="proContentDiv bp3-dark">
                    <h2 className="programmingHeader bp3-dark">{this.props.header}</h2>
                    <div className="items">
                        {this.list}
                    </div>
                </div>
            </div>
        );
    }
}

export default KnowledgeCard;