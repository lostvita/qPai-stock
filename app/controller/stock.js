'use strict';

const Controller = require('egg').Controller;
const { jsonResponse } = require('../utils');

class HomeController extends Controller {
  async interestPeRatio() {
    const { ctx, service } = this;
    let errorObj = null;
    // 调用 Service 进行业务处理
    let res = await service.stock.interestPeRatio(ctx.request.body).catch(() => {
      errorObj = {
        code: 500,
      };
    });
    if (!res) {
      res = Object.assign({}, errorObj);
    }
    // 设置响应内容和响应状态码
    ctx.body = jsonResponse(res);
    ctx.status = res.code;
  }
}

module.exports = HomeController;
