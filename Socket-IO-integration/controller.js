const io=require("./server1")

const notify = (req, res) => {
  const content = "Savi, Lakshman and 156 others liked your post!";
  io.emit("notifyClient", content);
  res.status(200).json({ message: "Client has been notified." });
};
