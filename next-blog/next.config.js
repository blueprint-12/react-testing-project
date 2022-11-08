/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  //내가 사용하고 있는 웹팩 버전 5임 node core에 대한 폴리필을 제공하지 않으므로
  //직접 작성해줘야 한다.
  //참고자료: https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };

    return config;
  },
};

module.exports = nextConfig;
