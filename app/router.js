'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('interestPeRatio', '/stock/interest_pe_ratio', controller.stock.interestPeRatio);
};
