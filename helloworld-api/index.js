module.exports.handler = (event, context, callback) => {
  console.log({ event });
  console.log({ context });
  const region = process.env.awsRegion;

  const response = {
    statusCode: 200,
    body: `hello from ${region}`,
  };

  callback(response);
  return response;
};
