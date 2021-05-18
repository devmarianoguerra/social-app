const timeline = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=12",
    user: "John Doe",
    msg: "lorem ipsum dolor bla bla bla",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=28",
    user: "John Doe",
    msg: "lorem ipsum dolor bla bla bla",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=18",
    user: "John Doe",
    msg: "lorem ipsum dolor bla bla bla",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify(timeline));
};
