import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import commonjs from '../../../js/site.js';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Sunil Maharjan"
        }
    }

    render() {
        return (
            <div>
                <h1>This is dashboard of <Link to="/profile">{this.state.name}</Link></h1>
                <button className="btn btn-error btnspace margin-left" onClick={() => commonjs.showErrorToast('Custom Js implementation')}>Custom Js </button>
                <button className="btn btn-success btnspace" onClick={() => toast.success("Toastr Plugin", { autoClose: 2000 })}>Plugin</button>
            </div>
        )
    }
}