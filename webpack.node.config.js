/*  ______    ______    _____    ______    __    __
 * /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
 * \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
 *  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
 *   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
 *
 * This project is a part of the “Byte-Sized JavaScript” videocast.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

const join = require( 'path' ).join;
const validate = require( 'webpack-validator' );

module.exports = validate( {
    entry: { index: join( __dirname, 'src/index.js' ) },
    output: { path: __dirname, filename: 'dist/nodejs/index.js', pathinfo: false, libraryTarget: 'commonjs2' },
    resolve: { extensions: [ '', '.webpack.js', 'web.js', '.js', '.json' ] },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json' }
        ]
    },
    plugins: []
}, {} );
