const Sex = {
  MALE: "male",
  FEMALE: "female",
  NONE: "none",
};

const fiftinMinutes = 15 * 60 * 1000;
const sixtyMinutes = 60 * 60 * 1000;
const maxLimiter = 100;
const maxCreateAccountLimiter = 2;

const httpCode = {
  UNAUTHORIZED: 409,
  NOTFOUND: 404,
  REJECTED: 404,
  UNAUTHORIZED: 401,
  OK: 200,
  FORBIDDEN: 500,
  CONFLICT: 409,
  CREATE: 201,
  NOCONTENT: 204,
  BADREQUEST: 400,
};

module.exports = {
  Sex,
  httpCode,
  fiftinMinutes,
  sixtyMinutes,
  maxCreateAccountLimiter,
  maxLimiter,
};
