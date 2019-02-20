'use strict';

/**
 * Draft.js controller
 *
 * @description: A set of functions called "actions" for managing `Draft`.
 */

module.exports = {

  /**
   * Retrieve draft records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.draft.search(ctx.query);
    } else {
      return strapi.services.draft.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a draft record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.draft.fetch(ctx.params);
  },

  /**
   * Count draft records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.draft.count(ctx.query);
  },

  /**
   * Create a/an draft record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.draft.add(ctx.request.body);
  },

  /**
   * Update a/an draft record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.draft.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an draft record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.draft.remove(ctx.params);
  }
};
