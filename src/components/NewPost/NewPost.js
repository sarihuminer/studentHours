import React, { Component } from 'react';
import axios from '../../axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        student: {
            Id: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            institutionkod: '',
        }

    }
    addStudentHandler = () => {
        debugger;
        const stu = { ...this.state.student };
        if (stu['firstName'] != '') {
            const student = {
                Id: stu['Id'],
                firstName: stu['firstName'],
                lastName: stu['lastName'],
                phone: stu['phone'],
                email: stu['email'],
                institutionkod: stu['institutionkod'],
            }

            axios.post("student/addNew", student).then(response => {
                console.log("succsess");
                err => { console.log("erorr!") }
            });
        }


    }

    ChangeHandler = (event) => {
        debugger;
        const id = event.target.id;

        const newStudent = { ...this.state.student }
        newStudent[id] = event.target.value;

        this.setState({ student: newStudent });
        console.log(this.state.student)
    }
    render() {
        return (
            <div className="NewPost">
                <h1>הוספת תלמידה</h1>
                <label>שם פרטי</label>
                <input type="text" id="firstName" value={this.state.firstName} onChange={(event) => this.ChangeHandler(event)} />
                <label>שם משפחה</label>
                <input type="text" id="lastName" value={this.state.lastName} onChange={(event) => this.ChangeHandler(event)} />
                <label>טלפון</label>
                <input type="text" id="phone" value={this.state.phone} onChange={(event) => this.ChangeHandler(event)} />
                <label>מייל</label>
                <input type="text" id="email" value={this.state.email} onChange={(event) => this.ChangeHandler(event)} />
                <label>מוסד</label>
                <input type="text" id="institutionkod" value={this.state.institutionkod} onChange={(event) => this.ChangeHandler(event)} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.ChangeHandler(event)} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.ChangeHandler(event)}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.addStudentHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;