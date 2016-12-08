/*  ______    ______    _____    ______    __    __
 * /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
 * \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
 *  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
 *   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
 */

const warn = console.warn;

const createNew = ( componentStore, type ) => {
    if ( !componentStore ) { return null; }
    if ( !type ) { return null; }

    const creator = componentStore[ type ];

    if ( !creator ) { return null; }

    const instance = creator();

    return instance;
};

const mountInstanceChildren = ( componentStore, parentInstance, instance, childDescriptors ) => {
    if ( parentInstance && parentInstance.add ) {
        parentInstance.add( instance );
    }

    if ( !childDescriptors ) { return; }

    childDescriptors.forEach( ( childDescriptor ) => {

        /* eslint-disable no-use-before-define */
        createAndMount( componentStore, instance, childDescriptor );
        /* eslint-enable no-use-before-define */

    } );
};

const createAndMount = ( componentStore, parentInstance, descriptor ) => {
    if ( !descriptor ) {
        warn( 'No descriptor found. Bailing out.' );
        return;
    }

    const type = descriptor.type;
    const childDescriptors = descriptor.children;

    const futureInstance = createNew( componentStore, type );

    if ( !futureInstance ) {
        warn( `
            No future instance found for type “${type}”; bailing out.
            Make sure your component store has a “${type}” attribute
            that is a “Promise” or “function”; and also make sure that you
            export your component store.
        ` );

        return;
    }

    const isPromise = !!futureInstance.then;

    if ( isPromise ) {
        futureInstance.then( ( instance ) => {
            mountInstanceChildren( componentStore, parentInstance, instance, childDescriptors );
        } );

        return;
    }

    mountInstanceChildren( componentStore, parentInstance, futureInstance, childDescriptors );
};

/**
 * Runs a mount plan on the `componentStore` based on the `descriptor`.
 *
 * See the `./examples` folder to get an idea of how this method can be used.
 *
 * @param {object} componentStore — A store that contains component constructors or promises that
 *     eventually yield component constructors.
 * @param {object} descriptor — A mount descriptor, which is most commonly parsed from a JSON file.
 *
 * @returns {undefined} — nothing.
 *
 * The descriptor is the JSON representation of a tree, which vaguely resembles a DOM tree.
 *
 * Here’s roughly how the JSON schema of the descriptor is defined:
 *
 * * Each node on the JSON should have a `type` attribute that corresponds to a component.
 * * Each node on the JSON should have a `name` attribute.
 * * A node may or may not have `children` (which is an array of nodes).
 */
const mount = ( componentStore, descriptor ) => {
    createAndMount( componentStore, null, descriptor );
};

export { mount };
