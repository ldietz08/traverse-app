import "./EditModal.scss";

const Message = ({ closeMessage }) => {
  const [updatedPost, setUpdatedPost] = useState([]);

  const updatePostContent = async (id) => {
    const postDoc = doc(db, "posts", id);
    await updateDoc(postDoc, { content: updatedPost });
  };
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__close-wrapper">
            <button
              className="modal__close"
              onClick={() => closeMessage(false)}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Send a message</h1>
          </div>
          <form className="modal__form">
            <div className="body">
              <textarea
                className="modal__body"
                placeholder="Type your message here"
              ></textarea>
              <input
                placeholder="New content"
                onChange={(e) => setUpdatedPost(e.target.value)}
              ></input>
            </div>
            <div className="modal__btn-wrapper">
              <button
                className="modal__btn modal__btn--cancel"
                onClick={() => closeMessage(false)}
              >
                Cancel
              </button>
              <button
                className="modal__btn"
                // onClick={() => closeMessage(false)}
                onClick={() => updatePostContent(post.id)}
              >
                Update post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Message;
