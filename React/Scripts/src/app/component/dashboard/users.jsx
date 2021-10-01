import React from "react";
import userApi from "../../service/user.js";

export default class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: null
        }
    }

    componentDidMount() {
        userApi.getAllUsers().then((response) => {
            let { data } = response;
            this.setState({
                users: data
            })
        });
    }

    render() {

        let userList = <tr><td colSpan="3">No users </td></tr>;
        if (this.state.users && this.state.users.length > 0) {
            userList = this.state.users.map((key, index) => {
                return (
                    <tr key={index}>
                        <td>{key.Id}</td>
                        <td>{key.Name}</td>
                        <td>{key.Address}</td>
                    </tr>
                );
            })
        }

        return (
            <div>
                <h1>List of User (Called API via AXIOS)</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table>

            </div>
        )
    }
}