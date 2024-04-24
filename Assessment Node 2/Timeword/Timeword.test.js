const assert = require('assert');

function testConvertTimeToWords() {
    assert.strictEqual(convertTimeToWords('00:00'), 'midnight');
    assert.strictEqual(convertTimeToWords('00:12'), 'twelve twelve am');
    assert.strictEqual(convertTimeToWords('01:00'), 'one o’clock am');
    assert.strictEqual(convertTimeToWords('06:01'), 'six oh one am');
    assert.strictEqual(convertTimeToWords('06:10'), 'six ten am');
    assert.strictEqual(convertTimeToWords('06:18'), 'six eighteen am');
    assert.strictEqual(convertTimeToWords('06:30'), 'six thirty am');
    assert.strictEqual(convertTimeToWords('10:34'), 'ten thirty four am');
    assert.strictEqual(convertTimeToWords('12:00'), 'noon');
    assert.strictEqual(convertTimeToWords('12:09'), 'twelve oh nine pm');
    assert.strictEqual(convertTimeToWords('23:23'), 'eleven twenty three pm');

    // Additional test cases for edge scenarios
    assert.strictEqual(convertTimeToWords('00:01'), 'twelve oh one am');
    assert.strictEqual(convertTimeToWords('00:10'), 'twelve ten am');
    assert.strictEqual(convertTimeToWords('11:00'), 'eleven o’clock am');
    assert.strictEqual(convertTimeToWords('12:01'), 'twelve oh one pm');
    assert.strictEqual(convertTimeToWords('13:30'), 'one thirty pm');
    assert.strictEqual(convertTimeToWords('23:59'), 'eleven fifty nine pm');

    console.log('All tests passed successfully.');
}

// Run the test function
testConvertTimeToWords();
