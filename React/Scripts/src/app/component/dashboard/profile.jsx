import React from "react";
import { toast } from 'react-toastify';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Sunil Maharjan"
        }
    }

    componentDidMount = () => {
        toast("Redirecting to profile", {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-info',
            progressClassName: 'error-progress-bar',
            autoClose: 2000,
        });
    }

    render() {
        return (
            <div>
                <h1>Hello <span className="profile">{this.state.name}</span></h1>
            </div>
        )
    }
}