import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';


class Blog extends Component {

    state = {
        students: [],
        selectedStudentId: null
    }

    componentDidMount() {
        axios.get("student/getall").then(response => {
            console.log("succsess!");
            console.log([...response.data]);
            this.setState({ students: [...response.data] });
            //חיתוך איברי מערך
            const studs = [...response.data].slice(0, 3);
            const updateStu = studs.map(s => {
                return {
                    ...s,
                    institution: "סמינר"
                }
            });
            this.setState({ students: updateStu });
        })
    }
    studentSelectedHandler(id, index) {
        this.setState({ selectedStudentId: id });
    }


    render() {
        const studentList = this.state.students.map((s, index) => {
            return <Post clicked={() => this.studentSelectedHandler(s.Id, index)} changeHandler={this.ChangeHandler} institution={s.institution} name={s.firstName} lname={s.lastName} institutionkod={s.institutionkod} phone={s.phone} idstudent={s.Id} id={index} email={s.email} key={index}></Post>
        });
        return (
            <div>
                <section className="Posts">
                    {studentList}
                </section>
                <section>
                    <FullPost id={this.state.selectedStudentId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;