/**
 * @param {Object} args
 * @param {MapOfRegexValidate | RegExp} args.regexp
 * @param {any} args.stringToValidate
 * @return {boolean}
 */
export const regexValidate = (args) => {
    const { regexp = /[]/, stringToValidate = '' } = args;
    const regexpValid = new RegExp(regexp);
    const valuesOfRegexpValid = regexpValid.exec(stringToValidate);

    // Es necesaria esta validación por como funciona el metodo ".exec" de una expresión regular
    // Ya que si se introduce un valor que no coincida con la RegExp, la funcion ".exec" retornara null
    if (!valuesOfRegexpValid) return false;

    // Se valida si el texto introducido contiene caracteres diferentes a los caracteres numericos
    const isValid = valuesOfRegexpValid[0] === valuesOfRegexpValid.input;
    return isValid;
};