import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ text, deleteToDo }) => {
  return (
    <li>
      {text} <button onClick={deleteToDo}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, { id }) => {
  return { deleteToDo: () => dispatch(actionCreators.deleteToDo(id)) };
};

export default connect(null, mapDispatchToProps)(ToDo);
