const resolveURL = require('resolve-url');
const { devDependencies } = require('../../package.json');

/*
 * Default options for browser environment
 */
module.exports = {
  corePath: typeof process !== 'undefined' && process.env.NODE_ENV === 'development'
    ? resolveURL('/node_modules/@jeffreyca/ffmpeg.wasm-core/dist/ffmpeg-core.js')
    : `https://unpkg.com/@jeffreyca/ffmpeg.wasm-core@${devDependencies['@jeffreyca/ffmpeg.wasm-core'].substring(1)}/dist/ffmpeg-core.js`,
};
