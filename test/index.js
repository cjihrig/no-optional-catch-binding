/**
 * @fileoverview Tests for no-optional-catch-binding
 * @author Colin Ihrig
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../lib"),
    RuleTester = require("eslint/lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-optional-catch-binding", rule, {
    valid: [
        "var foo = function() { try { throw new Error() } catch(err) { } }"
    ],
    invalid: [
        {
            code: "var foo = function() { try { throw new Error() } catch { } }",
            parser: "babel-eslint",
            errors: [{ message: "Catch clause must include an error variable binding.", type: "CatchClause", line: 1, column: 50 }]
        }
    ]
});
