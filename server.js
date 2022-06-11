//import app
const app = require('./backend/app');


//listen app
app.listen(3001, () => {
    console.log("APP LISTENING ON PORT 3001");
});