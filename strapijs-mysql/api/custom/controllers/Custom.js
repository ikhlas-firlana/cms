'use strict';

/**
 * A set of functions called "actions" for `Custom`
 */

module.exports = {
  // GET /custom
  index: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
