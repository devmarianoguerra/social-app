import Link from "next/link";
import Layout from "../../components/layout/index";

function Timeline(props) {
  return (
    <>
      <Layout>
        <h1>This is the Timeline</h1>
        <h3>Welcome {props.userName}</h3>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Layout>
    </>
  );
}

Timeline.getInitialProps = async () => {
  let url = "http://localhost:3000/api/hello";
  const res = await fetch(url);
  const data = await res.json();
  console.log("DATA: ", data);
  return data;
};

export default Timeline;
