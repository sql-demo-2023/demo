//@ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { i18n } = require('./next-i18next.config');
const path = require('path');
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/

const nextConfig = {
  nx: {
    svgr: false,
  },
  i18n,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../..'),
  },
};
// module.exports = {
//   i18n,
// };
module.exports = withNx(nextConfig);
