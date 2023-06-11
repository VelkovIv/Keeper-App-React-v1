import React from "react";

function Note(props) {
  function deleteClicked() {
    props.onClicked(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteClicked}>DELETE</button>
    </div>
  );
}

export default Note;
