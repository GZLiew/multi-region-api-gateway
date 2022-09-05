"use strict";

module.exports.handler = async (_, _, callback) => {
  const healthCheckStatus = process.env.checkStatus;

  const response = {
    status: healthCheckStatus,
  };

  callback(response);

  return response;
};
