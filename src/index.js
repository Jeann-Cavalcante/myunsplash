const express = require('express');
const routes = require('./routes/routes');
const path = require("path");
const prisma = require('./prisma/index');

const app = express();
app.use(express.json());

const PORT = 3033;

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.urlencoded());

app.use((req, res, next) => {
    try {
        res.on('finish', () => {
            prisma.$disconnect();
        });
        console.log('passou pelo middleware do prisma');
        next();
    } catch (error) {
        console.log(error);
    }
    
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});