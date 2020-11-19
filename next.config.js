module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'googleapis.com'],
  },
  webpack: (config, {isServer}) => {
    if (isServer) {
      require('./utils/generateSiteMap');
    }
    return config;
  },
};
