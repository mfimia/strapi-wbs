'use strict';

/**
 *  test-single-type controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-single-type.test-single-type');
