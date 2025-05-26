'use strict';

/**
 * user-resumes service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-resumes.user-resumes');
