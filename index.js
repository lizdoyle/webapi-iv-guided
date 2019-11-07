require('dotenv').config();
const server = require('./api/server.js');


//const PORT  = process.env.PORT

const {PORT} = process.env

// server.listen(4000, () => {
//   console.log('\n*** Server Running on http://localhost:4000 ***\n');
// });

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});


