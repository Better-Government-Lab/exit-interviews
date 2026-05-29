/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    output: "export",
    // basePath: "/exit-interviews",
    reactStrictMode: true,
    images: { unoptimized: true },
    sassOptions: {
      loadPaths: [
        path.join(__dirname, "node_modules", "@uswds", "uswds", "packages"),
      ],
      prependData: "@forward 'uswds-theme'; @forward 'uswds';",
      quietDeps: true,
    }
  };
  
  module.exports = nextConfig;