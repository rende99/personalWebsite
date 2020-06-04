import React, {Component} from 'react';


class First extends Component {
    constructor(props) {
        super(props)
		this.state ={
			data: null
		}
	}

	componentDidMount() {
		// Call our fetch function below once the component mounts
	
    }
    
    render(){
        return (
            <div className="First">
                <h1 class="bp3-heading bp3-dark">Playlist Sync</h1>
            </div>
          );
    }
}

export default First;