const express = require("express");

const ExpressError = require("./expressError")
const companionsRoutes = require("./routes/companies");
const invoiceRoutes = require("./routes/invoices");

const app = express();

app.use(express.json());
app.use("/companies", companiesRoutes);
app.use("/invoices", invoicesRoutes);


app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        err: err,
        message: err.message
    });
});

module.exports = app;