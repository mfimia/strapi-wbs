'use strict';

/**
 * test-single-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-single-type.test-single-type');
