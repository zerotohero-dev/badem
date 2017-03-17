/*  ______    ______    _____    ______    __    __
 * /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
 * \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
 *  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
 *   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
 *
 * This project is a part of the “Byte-Sized JavaScript” videocast.
 *
<<<<<<< HEAD
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
=======
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
>>>>>>> dea3d45e14d9721fcd3ce576851a8b88b8d7c5f8
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
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
