function validateZip(req, res, next) {
    const { zip } = req.params;
// Check if zip is 5 digits exactly with \d5
    if (/^\d{5}$/.test(zip)) {
        next();
    } else {
        res.status(400).send(`Zip (${zip}) is invalid!`); //punctuation and wording check
    }
}

module.exports = validateZip;
