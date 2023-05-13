import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0
        }
    }

    componentDidMount(){
        console.log("API call")
    }
    
    
    render() {
        console.log("render");
        return (
            <div>
                <h3>My Profile</h3>
                <h4>{this.props.name}</h4>
                <div>{this.state.count}, {this.state.count2}</div>
                <button
                    onClick={() => {
                        this.setState({
                            count: 1,
                            count2: 2
                        })
                    }
                    }>Counter
                </button>

                <div>Welcome to the Class Based Component in React!</div>
            </div>
        );
    }
}

export default Profile;

/**
 * class component = new Component(props); this.props = {}
 */
