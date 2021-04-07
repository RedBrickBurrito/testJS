function convert(decimal) {
    const base = 8;
    return parseInt(decimal.toString(base));
}

exports.convert = convert;