const app = require("express")();
const ogs = require("open-graph-scraper-lite");
const cors = require("cors");

app.use(json());
app.use(cors());

app.post("/api", (req, res) => {
  ogs({
    url: req.body?.url,
  })
    .then((r) => res.send(r))
    .catch((err) => res.send(err));
});

module.exports = app;
