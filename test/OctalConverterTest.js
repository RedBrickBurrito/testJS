var assert = require('assert');
var OctalConverter = require('../OctalConverter');

describe('givenDecimalWhenConvertThenOctal1', function () {
    it('convert(1) = 1', function() {
        //Given
        var a = 1;
        var expectedResult = 1;

        //When
        var actualResult = OctalConverter.convert(a);

        //Then
        assert.strictEqual(expectedResult, actualResult);
    })
})
