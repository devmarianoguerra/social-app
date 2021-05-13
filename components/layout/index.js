import styles, { globalStyles } from "./styles";

function Layout(props) {
  return (
    <>
      <h1>Social App</h1>
      <main>{props.children}</main>

      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{styles}</style>
    </>
  );
}

export default Layout;
