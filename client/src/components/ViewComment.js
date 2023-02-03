import React, {useState, useContext} from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { useAlert } from 'react-alert'
import {CommentContext} from "../context/comment"
import {UserContext} from "../context/userContext"
import CommentComp from './CommentComp'

function ViewComment({view}){
    const alert = useAlert()
    const [newComment, setNewComment] = useState('')
    const {comments, setComments} = useContext(CommentContext)
    const commentList = comments.filter(c=>c.view_id===view[0].id)
    const {user} = useContext(UserContext)

    function handleAddComment(e){
        e.preventDefault();
        if(user)(
          fetch("/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              view_id: view[0].id,
              description: newComment
            }),
          })
            .then((r) => r.json())
            .then((newComment => {
              setComments([...comments, newComment])
              setNewComment("")
            })))
          else(
            alert.show("Please log in to submit your comments!")
          )
    }

    return(
        <Comment.Group>
          <Header as='h3' dividing>
            Reviews
          </Header>
          {commentList.length>0?commentList.map(c=>
            <CommentComp comment={c} view={view} key={c.id}/>)
            :
            null
          }
          <Form reply>
            <Form.TextArea onChange={e=>setNewComment(e.target.value)} value={newComment}/>
            <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={handleAddComment}/>
          </Form>
        </Comment.Group>
    )
}

export default ViewComment