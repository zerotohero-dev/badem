/*  ______    ______    _____    ______    __    __
 * /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
 * \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
 *  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
 *   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
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