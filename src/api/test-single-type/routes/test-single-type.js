'use strict';

/**
 * test-single-type router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-single-type.test-single-type');
