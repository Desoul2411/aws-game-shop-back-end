'use strict';
//import goods from '../data/goods.json';
const goods = require('../data/goods.json');

module.exports.getProductsList = async (event, context) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    statusCode: 200,
    body:JSON.stringify(goods),
  };
};