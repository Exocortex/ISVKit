const demoAssets = [
  {
    title: "Sofa",
    form: "Consumer",
    sceneId: "390e584c-393f-4cc4-b6e8-5275f40fcf92",
    features: [],
    attributes: [
      {
        name: "Upholstery",
        options: [
          "Mod Velvet",
          "Cross Weave",
          "Satin Weave",
          "Pebble Weave",
          "Vegan Leather",
          "Twilled Weave",
          "Mod Velvet Vanilla"
        ],
        type: "Options"
      },
      {
        name: "Base Upholstery",
        options: [
          "Cross Weave",
          "Satin Weave",
          "Pebble Weave",
          "Vegan Leather",
          "Twilled Weave",
          "Mod Velvet Vanilla",
          "Mod Velvet Linen"
        ],
        type: "Options"
      },
      {
        name: "Seat Upholstery",
        options: [
          "Cross Weave",
          "Satin Weave",
          "Pebble Weave",
          "Vegan Leather",
          "Twilled Weave",
          "Mod Velvet Vanilla",
          "Mod Velvet Linen"
        ],
        type: "Options"
      },
      {
        name: "Pillow Material",
        options: [
          "Cross Weave",
          "Satin Weave",
          "Pebble Weave",
          "Vegan Leather",
          "Twilled Weave",
          "Mod Velvet Vanilla",
          "Mod Velvet Linen"
        ],
        type: "Options"
      },
      {
        name: "Side Upholstery",
        options: [
          "Cross Weave",
          "Satin Weave",
          "Pebble Weave",
          "Vegan Leather",
          "Twilled Weave",
          "Mod Velvet Vanilla",
          "Mod Velvet Linen"
        ],
        type: "Options"
      },
      {
        name: "Wood Finish",
        options: ["Walnut", "Maple"],
        type: "Options"
      },
      {
        name: "Arm Style",
        options: ["Soba", "Jet", "Nox", "Brooklyn"],
        type: "Options"
      },
      {
        name: "Leg Style",
        options: ["Standard", "Wood Flare", "Dowel", "Beveled"],
        type: "Options"
      }
    ]
  },
  {
    title: "Call Booth",
    form: "Consumer",
    sceneId: "c48f9b9b-32e4-468d-953d-b21705093e2a",
    features: ["Animation", "Lighting"],
    attributes: [
      {
        name: "Seating",
        options: ["None", "Stool", "Bench", "Swivel"],
        type: "Options"
      },
      {
        name: "AnimationToggle",
        options: [true, false],
        type: "Boolean"
      },
      { name: "AnimationCounter", type: "Number" },
      { name: "Panel Base Color", type: "Color" },
      { name: "Panel Falloff Color", type: "Color" },
      {
        name: "Wall Material",
        options: ["Standard", "Transparent"],
        type: "Options"
      },
      {
        name: "Wall Color",
        options: ["Cream", "Lemon Grass", "Charcoal", "Purple", "Maverick"],
        type: "Options"
      },
      { name: "Lights On", options: [true, false], type: "Boolean" },
      {
        name: "Table Material",
        options: [
          "Drift Wood",
          "Cherry",
          "Chicago",
          "Ghost Pine",
          "Harbor",
          "Planks"
        ],
        type: "Options"
      },
      {
        name: "Panel Material",
        options: [
          "Grey",
          "Mustard",
          "Vines",
          "Aqua Blue",
          "ForestGreen",
          "Fuschia",
          "Green Burlap",
          "Muave",
          "Navy"
        ],
        type: "Options"
      }
    ]
  },
  {
    title: "Table",
    form: "Consumer",
    sceneId: "9cf68a44-5905-4898-b91f-d9149bc40e5b",
    features: ["Parametic"],
    attributes: [
      { name: "Length", type: "Number" },
      { name: "Width", type: "Number" },
      {
        name: "Finishes",
        options: [
          "Wood",
          "Goldfish",
          "Slate",
          "Concrete",
          "Mushroom",
          "Olive",
          "Mint",
          "Powder"
        ],
        type: "Options"
      }
    ]
  },
  {
    title: "Football Helment",
    form: "Consumer",
    sceneId: "35d1cee9-a67b-4064-8ec2-43ab348e3507",
    features: ["Animation"],
    attributes: [
      {
        name: "Cage Group",
        options: [
          "XRS 21",
          "XRS 21S",
          "XRN 22",
          "XRN 22X",
          "XLN 22",
          "XLN22X",
          "Pride",
          "Prowl",
          "Precept",
          "Predator",
          "Pursuit",
          "Prism",
          "Portal"
        ],
        type: "Options"
      },
      {
        name: "Visor",
        options: [
          "XRS 21",
          "XRS 21S",
          "XRS 22",
          "XRS 22S",
          "XRN 22X",
          "XLN 22X",
          "Pride",
          "Prowl",
          "Predator",
          "Pursuit",
          "Prism",
          "No Visor"
        ],
        type: "Options"
      },
      {
        name: "Chin Cup",
        options: ["Standard", "Sleeve"],
        type: "Options"
      },
      { name: "Shell Base Color", type: "Color" },
      {
        name: "Shell Style",
        options: ["Solid", "Left and Right", "Gradient", "Stripe"],
        type: "Options"
      },
      { name: "Shell 2nd Color", type: "Color" },
      { name: "Visor Base Color", type: "Color" },
      { name: "Visor Falloff Color", type: "Color" },
      { name: "Visor Opacity", type: "Number" },
      { name: "Straps Base Color", type: "Color" },
      { name: "Straps Falloff Color", type: "Color" },
      { name: "Cage Color", type: "Color" },
      { name: "ChinNeck Color", type: "Color" },
      { name: "Cage Metallic", type: "Number" },
      { name: "Logo Text Color", type: "Color" },
      {
        name: "Mask Material",
        options: ["Titanium", "Stainless", "Carbon Steel"],
        type: "Options"
      },
      { name: "Clips Color", type: "Color" },
      {
        name: "Face Mask",
        options: [
          "XRS 21",
          "XRS 21S",
          "XRN 22X",
          "XLN22X",
          "Pride",
          "Prowl",
          "Precept",
          "Predator",
          "Pursuit",
          "Prism",
          "Portal"
        ],
        type: "Options"
      },
      {
        name: "Mask Color",
        options: [
          "Black",
          "White",
          "Grey",
          "Navy",
          "Royal Blue",
          "Scarlet",
          "Maroon",
          "Gold",
          "Dark Green",
          "Silver",
          "Purple"
        ],
        type: "Options"
      },
      {
        name: "Strap Color",
        options: ["Black", "White"],
        type: "Options"
      },
      {
        name: "Eyeshield",
        options: ["Transparent", "Black", "Mirrored"],
        type: "Options"
      },
      { name: "Visor 2nd Color", type: "Color" },
      { name: "Padding Color", type: "Color" },
      {
        name: "Logo Color",
        options: ["Black", "White"],
        type: "Options"
      },
      {
        name: "Common Base Colors",
        options: [
          "Black",
          "White",
          "Grey",
          "Navy",
          "Royal Blue",
          "Scarlet",
          "Maroon",
          "Gold",
          "Dark Green",
          "Silver",
          "Purple"
        ],
        type: "Options"
      },
      {
        name: "Accessory Color",
        options: [
          "Black",
          "White",
          "Gray",
          "Navy",
          "Royal Blue",
          "Scarlet",
          "Maroon",
          "Gold",
          "Dark Green",
          "Silver",
          "Purple"
        ],
        type: "Options"
      }
    ]
  },
  {
    title: "Silq Office Chair",
    form: "Consumer",
    sceneId: "ef35df3f-c1ec-4856-8257-cf1fb74b5049",
    features: ["Image Upload"],
    attributes: [
      { name: "UpholsteryImage", type: "Image" },
      {
        name: "Upholstery",
        options: [
          "Crystal Field",
          "BlazerQuilt",
          "Hallingdal",
          "Melange",
          "Reflex",
          "Masai",
          "Canvas",
          "Balder",
          "Storey Time",
          "Dark Glitch",
          "Orange Massaud"
        ],
        type: "Options"
      },
      {
        name: "FrameFinish",
        options: [
          "6527 Merle/ 4144 Gloss Black",
          "6249 Platinum Solid/ 7360 Merle",
          "6053 Seagull / 7245 Carbon Metallic",
          "6053 Seagull / 4140 Arctic White Gloss",
          "6053 Seagull / 7360 Merle",
          "6527 Merle / Carbon Fiber",
          "6249 Platinum Solid / Carbon Fiber"
        ],
        type: "Options"
      },
      {
        name: "Height",
        options: ["Standard Height", "Stool Height"],
        type: "Options"
      },
      { name: "Arms", options: ["Arms", "Armless"], type: "Options" },
      {
        name: "Casters",
        options: ["Casters", "Glides"],
        type: "Options"
      },
      {
        name: "render",
        options: ["Casters", "Glide", "initial"],
        type: "Options"
      },
      {
        name: "PremiumOptions",
        options: [
          "None",
          "Polished Aluminum",
          "Obsidian Lux Finish",
          "Matte Brass Lux Finish",
          "Burnished Bronze Lux Finish",
          "Night Bronze Lux Finish",
          "Matte Copper Lux Finish"
        ],
        type: "Options"
      }
    ]
  }
];
