import { colors } from "../../styles/theme";

function Button(props) {
  return (
    <>
      <button onClick={props.onClick}>{props.children}</button>

      <style jsx>
        {`
          button {
            border: none;
            background-color: ${colors.secondary};
            color: ${colors.white};
            border-radius: 10px;
            padding: 1rem;
            font-weight: bold;
            transition: opacity 0.3s ease;
          }

          button:hover {
            opacity: 0.5;
          }
        `}
      </style>
    </>
  );
}

export default Button;
