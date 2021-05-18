import Avatar from "../../components/avatar/index";

const Post = (props) => {
  return (
    <>
      <Avatar img={props.img} />
      <div>
        <h4 key={props.id}>{props.user}</h4>
        <p>{props.msg}</p>
      </div>
      <style jsx>
        {`
          div {
            width: 100%;
            margin: 1rem 0;
          }

          h4,
          p {
            margin: 0.3rem 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Post;
