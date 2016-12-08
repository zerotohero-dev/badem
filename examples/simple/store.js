/*  ______    ______    _____    ______    __    __
 * /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
 * \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
 *  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
 *   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
 */

const store = {};

const log = console.log;

/**
 *
 */
store.Application = () => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        log( 'Creating an “Application”…' );

        resolve( {
            type: 'Application',
            add: ( component ) => log( `Application is adding “${component.type}”.` )
        } );
    }, 500 );
} );

/**
 *
 */
store.Page = ( props ) => {
    log( 'Creating a “Page”…' );

    void props;

    return {
        type: 'Page',
        add: ( component ) => log( `Page is adding “${component.type}”.` )
    };
};

/**
 *
 */
store.TextButton = ( props ) => {
    log( 'Creating a “TextButton”…' );

    return Object.assign( { type: 'TextButton' }, props );
};

module.exports = store;
