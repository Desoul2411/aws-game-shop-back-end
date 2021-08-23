const goods = require('../data/goods.json');

module.exports.getProductsById = async (event, context) => {
  const { prooductId } = event.pathParameters;

  const product = goods.find(item => item.id == prooductId);

  if(!product) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      statusCode: 404,
      body:JSON.stringify({message: "Product is not found!"}),
    };
  };

  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    statusCode: 200,
    body:JSON.stringify(product),
  };
};