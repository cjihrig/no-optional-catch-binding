/**
 * @fileoverview Rule to flag CatchClauses with no error variable binding
 * @author Colin Ihrig
 */

"use strict";


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require `catch` error variable binding",
            category: "Best Practices",
            recommended: false,
            // Hopefully this will be the URL one day.
            // url: "https://eslint.org/docs/rules/no-optional-catch-binding"
        },

        schema: []
    },
    create(context) {
        return {
            CatchClause(node) {
                if (node.param === null) {
                    context.report({
                        node,
                        message: "Catch clause must include an error variable binding."
                    });
                }
            }
        };
    }
};
