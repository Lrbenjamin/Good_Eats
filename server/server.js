const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
