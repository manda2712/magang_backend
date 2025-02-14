const express = require('express');
const app = express();
const dotenv = require('dotenv');
const multer = require('multer')
// const adminAuthorization = require("./middleware/adminAuthorization");
// const cors = require("cors")



dotenv.config();

const PORT = process.env.PORT || 3000;  // Fallback to 3000 if undefined


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));

const authController = require("./auth/auth.controller");
app.use("/api/auth", authController);

const userFormController = require("./userform/userform.controller")
app.use("/api/userform", userFormController)


app.listen(PORT, () => {
    console.log(`App listening on port ` + PORT);

});
