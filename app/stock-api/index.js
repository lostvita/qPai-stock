/**
 * http client
 */
'use strict';

const HttpClient = require('../http');
const { STOCK_API_URL_BASE } = require('../config');

class StockApi {
  constructor() {
    this.$http = new HttpClient(STOCK_API_URL_BASE);
  }

  async queryHistoryKDataPlus(ctx, postData) {
    const result = await this.$http.post(ctx, 'query_history_k_data_plus', postData);
    return result;
  }
}

module.exports = new StockApi();
