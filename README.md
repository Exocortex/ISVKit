# Download & Open

Download the repo and open `index.html`

```
git clone https://github.com/Exocortex/ISVKit.git
cd isvkit
open index.html
```

# Helpful Resources

You will find detailed documentation here: [Documentation](https://clara.io/docs/).

There are many low-level apis available but the most important ones for integration are listed under the [configuration module](https://clara.io/docs/module-configuration.html).

**[setConfiguration](https://clara.io/docs/module-configuration.html#.setConfiguration)** passes a configuration or BOM into the Player.

**[getConfiguration](https://clara.io/docs/module-configuration.html#.setConfiguration)** retrieves the configuration from the Player.

**[onChange](https://clara.io/docs/module-configuration.html#.onChange)** is a subscriber function that is called every time the Player's configuration is updated. This can be helpful when there are interactive elements to the configuration, such as drag & drop.

# Sections

**Tutorial**

This is a step-by-step guide that will show you how to embed the Player into a webpage with an existing configurator.

**Use Cases**

These are purpose built examples showing how to build common functionality.

**Demo Assets**

This is a list of pre-built demo assets. You will find the sceneId, form and a list of attributes for each example.

# Files

```
.
├── Preview
│   ├── index.html
│   └── style.css
├── Tutorial
│   ├── 1_AppWNoPlayer.html
│   ├── 2_EmbedPlayer.html
│   ├── 3_ConnectConfig.html
├── UseCases
│   ├── Animations.html
│   ├── InitializePlayer.html
│   ├── StandardForm.html
│   ├── StandardFormStyled.html
│   ├── iFrame
│   │   ├── iframe.html
│   │   └── index.html
├── demo-assets.js
└── index.html
```
