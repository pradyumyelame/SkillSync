const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-auenyydunpksxpdm.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://dev-auenyydunpksxpdm.us.auth0.com/api/v2/',
  issuer: 'https://dev-auenyydunpksxpdm.us.auth0.com/',
  algorithms: ['RS256']
});

module.exports = checkJwt;
