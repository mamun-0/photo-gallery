const Comments = (props) => {
  const comments = props.comments.map((comment) => {
    return (
      <div key={comment.id} className="border border-3 p-1 border-primary my-2">
        <p className="lead"><em>Author :</em> {comment.author}</p>
        <p className="lead">
          <em>Comment :</em> {comment.text}
        </p>
      </div>
    );
  });
  return <div>{comments}</div>;
};
export default Comments;
