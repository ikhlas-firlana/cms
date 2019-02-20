'use strict';

/**
 * Temporary.js controller
 *
 * @description: A set of functions called "actions" for managing `Temporary`.
 */

module.exports = {

  /**
   * Retrieve temporary records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.temporary.search(ctx.query);
    } else {
      return strapi.services.temporary.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a temporary record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.temporary.fetch(ctx.params);
  },

  /**
   * Count temporary records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.temporary.count(ctx.query);
  },

  /**
   * Create a/an temporary record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.temporary.add(ctx.request.body);
  },

  /**
   * Update a/an temporary record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.temporary.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an temporary record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.temporary.remove(ctx.params);
  }
};
