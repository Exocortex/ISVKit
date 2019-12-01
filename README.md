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
    <div
      id="player-el"
      style="height: 100%; position: absolute; width: 100%;"
    ></div>
  </body>
  <script src="https://clara.io/js/claraplayer.min.js"></script>
  <script>
    /** Initialize Player */
    var api = claraplayer("player-el");
    var FORM = "Consumer";
    var SCENEID = "ef35df3f-c1ec-4856-8257-cf1fb74b5049";

    api.on("preloaded", () => {
      // initConfigurator must be called on either 'preloaded' or 'loaded'
      api.configuator.initConfigurator({ form: FORM });
    });

    // Fetch and initialize the sceneId
    api.sceneIO.fetchAndUse(SCENEID);
  </script>
</html>
```
