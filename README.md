# About

This is a helpful guide for getting started embedding ThreeKit.

## Clara vs ThreeKit

[Clara](http://clara.io/) is our first generation visualization platform; ThreeKit is our next generation platform. Most of the differences are around administration and scalability. ThreeKit provides a variety of tools designed for business users with little or no familiarity with 3D to self-administer and manage the complexities of a large product catalog.

For the purposes of this guide, you will find very few differences between the Clara & ThreeKit API. We have many more demos with Clara -- since it's been around for some time -- so you may want to use Clara to get started.

## Integration Patterns

### ThreeKit as Dumb Visualizer

ThreeKit allows customers to manage some traditional configuration logic. However, many customers wish to manage their configuration logic in an existing configurator or CPQ system and use ThreeKit solely for visualization. And ThreeKit embraces this approach.

This is what is known as a "dumb visualizer." ThreeKit understands how a product configuration translates into a visual representation. We don't
