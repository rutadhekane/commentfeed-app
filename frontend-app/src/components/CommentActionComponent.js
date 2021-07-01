import React, { useState, useEffect } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
import { successNotificationConfig, missingParameterConfig } from '../shared/notificationConfig'
import  CommentList  from './DisplayCommentsComponent';
import { store } from 'react-notifications-component';


const CommentActions = () => {
    /* Default states */
    const [textmsg, setTextmsg] = useState('');
    const [textname, setTextname] = useState('');
    const [newListflag, setNewListflag] = useState(false);
    const [list, setList] = useState([]);

    /* useEffect to get new list */
    useEffect(()=>{
        axios(baseUrl+"getComments")
        .then(comments => {
            setList(comments.data)
        })
    }, [newListflag])

    const handleNameChange = event => {
        setTextname(event.target.value);
    }

    const handleMsgChange = event => {
        setTextmsg(event.target.value);
    }

    /* Delete all the comments from DB */
    const deleteAllComments = event => {
        axios.delete(baseUrl + 'deleteComments')
        .then(response =>
            /* Toggle for newListFlag */
            setNewListflag(!newListflag)
        )
        .catch(error => {
            console.log('Delete comments error: ', error.message)
            alert('Comments could not be deleted\nError:'+ error.message)
        })
    }

    /* Add new comment entry */
    const handleSubmit = event => {
        if(textname && textmsg) {
            axios.post(baseUrl + 'createComment', {
                name: textname,
                message: textmsg,
                created: new Date().toString()
            })
            .then(response =>
                /* Toggle for newListFlag */
                setNewListflag(!newListflag),
                store.addNotification(successNotificationConfig),
                /* Reset the input fields */
                setTextmsg(''),
                setTextname('')
            )
            .catch(error => {
                console.log('Post comments', error.message)
                alert('Your comment could not be posted\nError:'+ error.message)
            })
        } else {
            store.addNotification(missingParameterConfig)
        }
        event.preventDefault()
    }

    return(
        <div className="wrapper">
            <div>
                <h1>Post your Comments!!!</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <Row className="formGroup p-1">
                        <label htmlFor="name" className="col-sm-3 col-md-4 col-lg-3 text-center">Name:</label>
                        <input  type="text" value={textname} onChange={handleNameChange}
                        className="form-control form-control-sm col-sm-9 col-md-8 col-lg-9 border border-primary"
                        placeholder="Your name"/>
                    </Row>
                    <Row className="formGroup p-1">
                        <Label htmlFor="comment" className="col-sm-3 col-md-6 col-lg-3 text-center">Comments:</Label>
                        <textarea className="commentarea" value={textmsg} rows={5}
                        placeholder= "Type your comment here" className="form-control col-sm-9 col-md-6 col-lg-9 border border-primary"
                        onChange={handleMsgChange}></textarea>
                    </Row>
                    <Row className="formGroup p-1 text-right col-md-5 offset-md-3">
                        <Col>
                            <Button className="btn btn-success">Comment</Button>
                            <Button className="btn btn-danger"
                            onClick = {() => deleteAllComments()}>Delete All</Button>
                        </Col>
                    </Row>
                </form>
            </div>
            <CommentList list = {list}/>
        </div>  
    );
};

export default CommentActions;
