import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { remove } from "../store";

const Detail = ({ state, deleteToDo }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const toDo = state.find((toDo) => toDo.id + "" === id);
  const onClick = () => {
    deleteToDo(id);
    navigate("/");
  };
  return (
    <>
      <Link to="/">&larr; Home</Link>
      <h2>{toDo ? toDo.text : <h1>404 Not Found.</h1>}</h2>
      <h3>{toDo && `Created at: ${toDo.id}`}</h3>
      <button onClick={onClick}>Delete</button>
    </>
  );
};

const mapStateProps = (state) => {
  return { state };
};

const mapDispatchProps = (dispatch) => {
  return { deleteToDo: (id) => dispatch(remove(+id)) };
};

export default connect(mapStateProps, mapDispatchProps)(Detail);
