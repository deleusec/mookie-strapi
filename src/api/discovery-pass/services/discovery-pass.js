'use strict';

/**
 * discovery-pass service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::discovery-pass.discovery-pass');
