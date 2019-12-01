const api = claraplayer("player-el");

/**
 * Clara uses a 'sceneId' to define the 3D asset associated
 * to a product & a 'form' to define the configurator. The form
 * has a 1:1 mapping to the configurator.
 *
 * Note: ThreeKit has the concept of a product so defining a
 * sceneId & form are not necessary.
 */

const FORM = "Consumer";
const SCENEID = "36f47863-c0b9-467f-a64f-78e34e2d894e";

api.on("loaded", () => {
  api.configuator.initConfigurator({ form: FORM });
});

// Fetch and initialize the sceneId
api.sceneIO.fetchAndUse(SCENEID);
