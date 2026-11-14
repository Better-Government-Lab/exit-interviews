/** @type {import('next').NextConfig} */
const path = require("path");

const repoName = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '';

const nextConfig = {
    output: "export",
    assetPrefix: repoName,
    basePath: repoName,
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