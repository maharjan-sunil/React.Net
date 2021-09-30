import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import commonjs from '../../js/site.js';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }

    componentDidMount = () => {
      
    }

    render() {
        return (
            <div>
                <h1>hy sunil</h1>
                <h1>This is dashboard of {this.state.name} by me</h1>
                <button className="btn btn-error btnspace" onClick={() => commonjs.showErrorToast('invalid code ')}>Error</button>
                <button className="btn btn-success btnspace" onClick={() => toast.success("Success Message", { autoClose: 1000 })}>AutoClose</button>
                <button className="btn btn-success btnspace" onClick={() => toast.success("Success Message", { autoClose: 1000 })}>AutoClose</button>
                <ToastContainer />
            </div>
        )
    }
}