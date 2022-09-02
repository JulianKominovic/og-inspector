const ogs = require("open-graph-scraper-lite");

export default function og(req, res) {
  ogs({
    url: req.body?.url,
  })
    .then((r) => res.status(200).send(r))
    .catch((err) => res.status(500).send(err));
}
