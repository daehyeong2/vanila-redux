import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, id, deleteToDo }) => {
  return (
    <li>
      <Link to={`/detail/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, { id }) => {
  return { deleteToDo: () => dispatch(actionCreators.deleteToDo(id)) };
};

export default connect(null, mapDispatchToProps)(ToDo);
