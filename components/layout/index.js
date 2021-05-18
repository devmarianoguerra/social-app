import styles, { globalStyles } from "./styles";

function Layout(props) {
  return (
    <>
      <main>{props.children}</main>

      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{styles}</style>
    </>
  );
}

export default Layout;
