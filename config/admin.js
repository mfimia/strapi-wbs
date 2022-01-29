module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '369015f04a844ec8a6ae5742a01a3365'),
  },
});
