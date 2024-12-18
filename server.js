const express = require('express');

const app = express();

// the `dist` directory contains the RNAcanvas Code app to distribute
app.use(express.static('dist'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
