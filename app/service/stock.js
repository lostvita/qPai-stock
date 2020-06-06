/**
 * stock service
 */
'use strict';

const StockApi = require('../stock-api');

const Service = require('egg').Service;

class StockService extends Service {
  async interestPeRatio(req) {
    const { ctx } = this;
    const res = await StockApi.queryHistoryKDataPlus(ctx, req);
    return res;
  }
}

module.exports = StockService;
