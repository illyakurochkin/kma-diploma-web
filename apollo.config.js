module.exports = {
  client: {
    service: {
      name: 'gcp-shop-web',
      url: 'http://localhost:8081/graphql',
      skipSSLValidation: true,
      fetchOptions: {
        mode: 'no-cors',
      },
    },
  },
};
