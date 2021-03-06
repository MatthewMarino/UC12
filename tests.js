QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});
QUnit.test( "Errors thrown for getAreaCode", function( assert ) {
    assert.throws( function() {
        getAreaCode("(415) 555-5555");
    }, "Missing '('. An error should have been thrown." );
});

QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid line code test passed.");
});
QUnit.test( "Errors thrown for getLineCode", function( assert ) {
    assert.throws( function() {
        getLineCode("(415) 555-5555");
    }, "Missing '('. An error should have been thrown." );
});

QUnit.test("Test the getCoCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getCoCode(num);
    assert.deepEqual(result, "555", "Valid co code test passed.");
});
QUnit.test( "Errors thrown for getCoCode", function( assert ) {
    assert.throws( function() {
        getCoCode("(415) 555-5555");
    }, "Missing '('. An error should have been thrown." );
});
QUnit.test("Test the getCoCode(phoneNum) function.", function (assert) {
    var num = "(415) 521-5555";
    var result = getCoCode(num);
    assert.deepEqual(result, "521", "Valid Cocode test passed.");
});
