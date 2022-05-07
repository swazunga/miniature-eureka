const express = require("express");
const htmlRoutes = require("./Routes/html_routes");
const apiRoutes = require("./Routes/api_routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
