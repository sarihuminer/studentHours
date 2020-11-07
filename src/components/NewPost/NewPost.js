import React, { Component } from 'react';
import axios from '../../axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        Id: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        institutionkod: '',
    }
    addStudentHandler() {
        if (this.state && this.state.id != null && this.state.firstName != null) {
            const student = {
                Id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phone,
                email: this.state.email,
                institutionkod: this.state.institutionkod,
            }

            axios.post("student/addNew", student).then(response => {
                console.log("succsess");
                err => { console.log("erorr!") }
            });
        }


    }
    render() {
        return (
            <div className="NewPost">
                <h1>הוספת תלמידה</h1>
                <label>שם פרטי</label>
                <input type="text" value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value })} />
                <label>שם משפחה</label>
                <input type="text" value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value })} />
                <label>טלפון</label>
                <input type="text" value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })} />
                <label>מייל</label>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                <label>מוסד</label>
                <input type="text" value={this.state.institutionkod} onChange={(event) => this.setState({ institutionkod: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.addStudentHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;