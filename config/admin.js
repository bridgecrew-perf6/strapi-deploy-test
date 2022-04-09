module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '260ee682f083acfa5af364be2d23dca3'),
  },
});
