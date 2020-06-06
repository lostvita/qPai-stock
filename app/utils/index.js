'use strict';

function jsonResponse(res) {
  const data = Object.assign({
    code: 200,
    msg: '服务出错了o(╥﹏╥)o',
    data: null,
  }, res);
  return data;
}

function isEmptyObject(obj) {
  let name;
  for (name in obj) {
    return false;
  }
  return true;
}

function jsonParse(data) {
  if (data && typeof data === 'string') {
    data = data.replace(/\'/g, '"');
    data = JSON.parse(data);
  }
  return data;
}

module.exports = {
  jsonResponse,
  jsonParse,
  isEmptyObject,
};
