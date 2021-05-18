function Avatar(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      {props.text && <p>{`Bienvenido ${props.text}`}</p>}
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          img {
            border-radius: 9999px;
            height: 50px;
            width: 50px;
          }
        `}
      </style>
    </div>
  );
}

export default Avatar;
