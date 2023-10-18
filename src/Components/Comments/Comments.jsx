const Comments = (props) => {
  const comments = props.comments.map((comment) => {
    // console.log(comment.text)
    return <p key={comment.id} className="border border-3 p-1 border-primary">Comment : {comment.text}</p>;
  });
  return <div>{comments}</div>;
};
export default Comments;
