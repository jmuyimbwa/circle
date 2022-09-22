const express = require("express");
const routes = require("./routes");

// App
const app = express();

//Test comment 2 in all

// Set port
const port = process.env.PORT || "1337";
app.set("port", port);

//Comments just///
//Pull request//

app.use('/', routes);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
