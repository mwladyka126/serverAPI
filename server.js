const express = require("express");
const cors = require("cors");
const path = require("path");
const socket = require("socket.io");
const mongoose = require("mongoose");
const helmet = require("helmet");
// import routes
const testimonialsRoutes = require("./routes/testimonials.routes");
const concertsRoutes = require("./routes/concerts.routes");
const seatsRoutes = require("./routes/seats.routes");

const app = express();
const server = app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port: 8000");
});

const io = socket(server, { cors: true });

const determineDbUri = (envType) => {
  switch (envType) {
    case "production":
      return "mongodb+srv://${process.env.userAppName}:${process.env.NewWaveApp}@cluster0.w1mbx.mongodb.net/NewWaveDB?retryWrites=true&w=majority";
    case "test":
      return "mongodb://localhost:27017/NewWaveDBTest";
    default:
      return "mongodb://localhost:27017/NewWaveDB";
  }
};

mongoose.connect(determineDbUri(process.env.NODE_ENV), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
});
db.on("error", (err) => console.log("Error " + err));

io.on("connection", (socket) => {
  console.log("New client! Its id – " + socket.id);
});
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/client/build")));
//add routes
app.use("/api", testimonialsRoutes);
app.use("/api", concertsRoutes);
app.use("/api", seatsRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.use((req, res) => {
  res.status(404).send("404 not found...");
});
module.exports = server;
