import React, { useState, useEffect} from "react";

function Comments () {

  const [comments, setComments] = useState([{
    username: '',
    comments: ''
  }])

  useEffect(() => {
    fetch('/').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setComments(jsonRes));
  })

    return (<div>
      {comments.map(comment => 
        <div>
        <h3>{comment.username}</h3>
        <h4>{comment.comments}</h4>
        </div>
      )}
      </div>
    )
}

export default Comments;