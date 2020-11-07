import React, { Component } from 'react';

import './FullPost.css';
import axios from '../../axios';

class FullPost extends Component {

    state = {
        loadedStudent: null
    }


    componentDidUpdate() {
        if (this.props.id != null) {
            if ((this.state.loadedStudent && this.state.loadedStudent.Id != this.props.id) || this.state.loadedStudent == null) {
                axios.get("student/get/" + this.props.id).then(response => {
                    console.log("succsess!");
                    console.log({ ...response.data });

                    this.setState({ loadedStudent: { ...response.data } });
                })
            }

        }

    }


    deleteHandler = () => {
        const stu = { ...this.state.loadedStudent }['Id'];

        debugger
        axios.delete("student/delete/" + stu).then(response => {
            console.log(response);
        })
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>בבקשה בחרי תלמידה!</p>;
        if (this.props.id && this.state.loadedStudent) {
            debugger;
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedStudent.firstName + ' ' + this.state.loadedStudent.lastName}</h1>
                    <p>{this.state.loadedStudent.phone} <br /> {this.state.loadedStudent.email} <br /> {this.state.loadedStudent.institutionkod}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deleteHandler}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;