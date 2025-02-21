
import CopyToClipboard from "react-copy-to-clipboard";
import "./navbar.css";

function TextInput(props) {
  return (
    <div className="shorted-container">
      <li className="shported-list" style={{ display: "flex",gap:"3rem" }} >
        <p className="mainlink"id={props.id}>{props.mainLink}</p>
        <p className="shortlink">{props.url}</p>
        <p text={props.text}></p>
        <CopyToClipboard text={props.text} onCopy={props.onCopy}>
        <button onClick={props.handlebtnCopy} id={props.id} className={props.id===props.btnCopy ? "copied" : "not-copied"}>
            {props.id===props.btnCopy ?"copied":"copy"}
          </button>
        </CopyToClipboard>

      </li>
    </div>
  );
}


export default TextInput;