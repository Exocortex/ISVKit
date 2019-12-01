# Introduction

This is a helpful guide for getting started embedding ThreeKit.

# Background

## Clara vs ThreeKit

[Clara](http://clara.io/) is our first generation visualization platform; ThreeKit is our next generation platform.

Most of the differences are around administration and scalability. ThreeKit provides a variety of tools designed for business users with little or no familiarity with 3D to self-administer and manage the complexities of a large product catalog.

For the purposes of this guide, you will find very few differences between the Clara & ThreeKit API. We have many more demos with Clara -- since it's been around for some time -- so you may want to use Clara to get started.

# Integration Patterns

## Dumb Visualizer

Many customers wish to manage their configuration logic in an existing configurator or CPQ system and use ThreeKit solely for visualization. And ThreeKit embraces this approach.

ThreeKit is really good at understanding how to visualize a product configuration. If an external configurator is managing the configuration logic, all you have to do is pass the configuration to ThreeKit's client API. That's it.

# Embedding the Player

## Native Embedding

ThreeKit's Player is 100% JavaScript. That makes it easy to embedded into any web based platform -- it can also be used in native apps, but there's a little more setup required.

```html
<html>
  <body>
    <div id="player-el" style="width: 400px; height: 300px;"></div>
  </body>
  <script src="https://clara.io/js/claraplayer.min.js"></script>
  <script>
    var api = claraplayer("player-el");

    /**
     * Clara uses a 'sceneId' to define the 3D asset associated
     * to a product & a 'form' to define the configurator. The form
     * has a 1:1 mapping to the configurator.
     *
     * Note: ThreeKit has the concept of a product so defining a
     * sceneId & form are not necessary.
     */

    var FORM = "Consumer";
    var SCENEID = "36f47863-c0b9-467f-a64f-78e34e2d894e";

    api.on("loaded", () => {
      api.configuator.initConfigurator({ form: FORM });
    });

    // Fetch and initialize the sceneId
    api.sceneIO.fetchAndUse(SCENEID);
  </script>
</html>
```
