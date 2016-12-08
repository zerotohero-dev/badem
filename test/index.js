/*  ______    ______    _____    ______    __    __
 * /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
 * \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
 *  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
 *   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
 */

const assert = require( 'chai' ).assert;
const badem = require( '../dist/nodejs' );
const mount = badem.mount;

describe( 'badem', () => {
    describe( 'badem.mount', () => {
        it( 'should be a function', () => {
            assert(
                typeof mount === 'function',
                `“mount” is expected to be a “function” and it is “${typeof mount}”.`
            );
        } );
    } );
} );
