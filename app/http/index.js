/**
 * http client
 */
'use strict';


class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  async post(ctx, api, data) {
    const res = await ctx.curl(`${this.baseUrl}/${api}`, {
      method: 'POST',
      contentType: 'json',
      // 自动解析 JSON response
      dataType: 'json',
      data,
      // 3 秒超时
      timeout: 3000,
    });
    return res.data;
  }
}

module.exports = HttpClient;
