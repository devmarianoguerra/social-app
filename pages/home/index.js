import { useState, useEffect } from "react";
import Layout from "../../components/layout/index";
import Avatar from "../../components/avatar/index";
import styles from "../../styles/Home.module.css";
import Post from "../../components/post/index";

const Home = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const getTimeline = async () => {
      try {
        const url = "http://localhost:3000/api/status/home_timeline";
        const res = await fetch(url);
        const data = await res.json();

        //console.log("TIMELINE DATA: ", data);
        setTimeline(data);
      } catch (error) {
        console.error(error);
      }
    };

    getTimeline();
  }, []);

  //console.log("TIMELINE: ", timeline);

  return (
    <div className={styles.container}>
      <header>
        <Avatar />
        <h2>Inicio</h2>
      </header>
      <Layout>
        <section>
          {timeline.map((item) => (
            <article key={item.id}>
              <Post
                id={item.id}
                user={item.user}
                msg={item.msg}
                img={item.avatar}
              />
            </article>
          ))}
        </section>
      </Layout>
      <footer>
        <h2>footer</h2>
      </footer>

      <style jsx>
        {`
          header {
            height: 50px;
            position: fixed;
            top: 0;
            border-bottom: 2px solid #bfbfbf;
            width: 100%;
            display: flex;
            align-items: center;
          }

          h2 {
            font-weight: bold;
          }

          section {
            padding-top: 0px;
          }

          article {
            border-top: 1px solid #bfbfbf;
            display: flex;
            padding: 0px 10px;
          }

          footer {
            border-top: 2px solid #bfbfbf;
            bottom: 0;
            position: fixed;
            height: 50px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
