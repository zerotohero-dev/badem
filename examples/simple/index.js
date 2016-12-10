/*  ______    ______    _____    ______    __    __
 * /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
 * \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
 *  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
 *   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
 */

const badem = require( '../../dist/nodejs' );
const mount = badem.mount;

const store = require( './store' );
const app = require( './app.json' );

const log = console.log;

log( 'Hello World.' );

mount( store, app )
    .then( () => log( 'All should have been done by now!' ) )
    .catch( () => log( 'Oh poop!' ) );

log( 'Hello stars.' );

/*
    Output:

        Hello World.
        Hello stars.
        Creating an “Application”…
        Creating a “Page”…
        Application is adding “Page”.
        Creating a “TextButton”…
        Page is adding “TextButton”.
        Creating a “TextButton”…
        Page is adding “TextButton”.
        Creating a “TextButton”…
        Page is adding “TextButton”.
        Creating a “Page”…
        Application is adding “Page”.
        Creating a “TextButton”…
        Page is adding “TextButton”.
        Creating a “TextButton”…
        Page is adding “TextButton”.
        Creating a “TextButton”…
        Page is adding “TextButton”.
        All should have been done by now!
 */