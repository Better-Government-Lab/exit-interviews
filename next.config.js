/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    output: "export",
    assetPrefix: '/exit-interviews',
    basePath: "/exit-interviews",
    images: {
      unoptimized: true,
    },
    sassOptions: {
      loadPaths: [
        path.join(__dirname, "node_modules", "@uswds", "uswds", "packages"),
      ],
      prependData: "@forward 'uswds-theme'; @forward 'uswds';",
      quietDeps: true,
    }
  };
  
  module.exports = nextConfig;