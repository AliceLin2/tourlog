import React, {useState, useContext} from 'react'
import { Button, Comment, Form} from 'semantic-ui-react'
import {UserContext} from "../context/userContext"
import {CommentContext} from "../context/comment"

function CommentComp({comment, view}){
    const [isEditing, setIsEditing] = useState(false);
    const [updateComment, setUpdateComment] = useState(comment)
    const {user} = useContext(UserContext)
    const {comments, setComments} = useContext(CommentContext)

    const userId = () => {
      if(user)
        return user.id
      else
        return false
      }

    function handleEditComment(id){
      if(user)(
        fetch(`/comments/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            view_id: view[0].id,
            description: updateComment
          }),
        })
          .then((r) => r.json())
          .then(updatedComment => {
            const updatedComments = comments.map((c) => {
              if (c.id === updatedComment.id) {
                return updatedComment;
              } else {
                return c;
              }
            })
            setComments(updatedComments)
            setIsEditing(!isEditing)
          }))
    }

  function handleDeleteComment(id){
    if(user)(
      fetch(`/comments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(()=>{
          const updatedComment = comments.filter((c) => c.id !== id);
          setComments(updatedComment)}))
  }

    return(
            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>{comment.user.username}</Comment.Author>
                <Comment.Metadata>
                  <div>{comment.created_at.slice(0, 10)}</div>
                </Comment.Metadata>
                {!isEditing?
                  <Comment.Text>{comment.description}</Comment.Text>
                  :
                  <Form>
                    <Form.TextArea onChange={e=>setUpdateComment(e.target.value)} value={updateComment.description}/>
                    <Button content='Save' labelPosition='left' icon='edit' primary onClick={e=>handleEditComment(comment.id)}/>
                  </Form>
                }
                {comment.user.id===userId()?<Button content='Edit Reply' onClick={() => setIsEditing(!isEditing)}/>:null}
                {comment.user.id===userId()?<Button content='Delete Reply' onClick={e=>handleDeleteComment(comment.id)}/>:null}
              </Comment.Content>
            </Comment>
    )
}

export default CommentComp