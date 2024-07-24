/** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.pdf$/,
//       use: {
//         loader: 'file-loader',
//         options: {
//           name: '[path][name].[ext]',
//         },
//       },
//     });
//     return config;
//   },
// };

const nextConfig = {
  output: 'standalone',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
    });
    return config;
  },
};
export default nextConfig;
