/**
 * Data copied out of the original game exactly as it stores it. Field names are renamed for
 * readability; values are not touched.
 *
 * Two sources, with different confidence:
 *
 *   From the original's own JSON files (its tileset and level maps). A plain parse, nothing to
 *   misread: `tileset` entries and each level's map file name.
 *
 *   Lifted out of the original's compiled script and its page. Matched by pattern, so an exact
 *   copy when the pattern is right and silently wrong when it is not: `colours`, `workspaces`,
 *   `atlasSprites`, `clips`, `audioFile`, `sheetFiles`, every `toolboxXml` and
 *   `workspaceXml`, and `locales`.
 *
 * Anything worked out rather than copied lives in derived.ts. The translations are one file per
 * language in ./locales/, so only the two a visitor needs are downloaded.
 *
 * Generated - do not edit by hand.
 */

/** Block and chrome colours. */
export const colours = {
  "motion": {
    "primary": "#A4DD4A",
    "secondary": "#009444",
    "tertiary": "#A4DD4A",
    "turn": "#26A2F6",
    "turnSecondary": "#007ec4"
  },
  "looks": {
    "primary": "#9966FF",
    "secondary": "#855CD6",
    "tertiary": "#774DCB"
  },
  "sounds": {
    "primary": "#CF63CF",
    "secondary": "#C94FC9",
    "tertiary": "#BD42BD"
  },
  "control": {
    "primary": "#F7941D",
    "secondary": "#c16500",
    "tertiary": "#c16500"
  },
  "event": {
    "primary": "#14A795",
    "secondary": "#338c7b",
    "tertiary": "#338c7b"
  },
  "sensing": {
    "primary": "#5CB1D6",
    "secondary": "#47A8D1",
    "tertiary": "#2E8EB8"
  },
  "pen": {
    "primary": "#0fBD8C",
    "secondary": "#0DA57A",
    "tertiary": "#0B8E69"
  },
  "operators": {
    "primary": "#59C059",
    "secondary": "#46B946",
    "tertiary": "#389438"
  },
  "data": {
    "primary": "#FF8C1A",
    "secondary": "#FF8000",
    "tertiary": "#DB6E00"
  },
  "more": {
    "primary": "#FF6680",
    "secondary": "#FF4D6A",
    "tertiary": "#FF3355"
  },
  "text": "#575E75",
  "workspace": "#F9F9F9",
  "topBorder": "transparent",
  "toolboxHover": "#4C97FF",
  "toolboxSelected": "#e9eef2",
  "toolboxText": "#575E75",
  "toolbox": "#FFFFFF",
  "flyout": "#F9F9F9",
  "scrollbar": "#CECDCE",
  "scrollbarHover": "#CECDCE",
  "textField": "#FFFFFF",
  "insertionMarker": "#000000",
  "insertionMarkerOpacity": 0.2,
  "dragShadowOpacity": 0.3,
  "stackGlow": "#FFF200",
  "stackGlowOpacity": 1,
  "replacementGlow": "#FFFFFF",
  "replacementGlowOpacity": 1,
  "colourPickerStroke": "#FFFFFF",
  "fieldShadow": "rgba(0,0,0,0.1)",
  "dropDownShadow": "rgba(0, 0, 0, .3)",
  "numPadBackground": "#547AB2",
  "numPadBorder": "#435F91",
  "numPadActiveBackground": "#435F91",
  "numPadText": "#FFFFFF",
  "valueReportBackground": "#FFFFFF",
  "valueReportBorder": "#AAAAAA"
};

/** Options the original passes when it creates each workspace. */
export const workspaces = {
  "coding": {
    "comments": false,
    "disable": false,
    "collapse": false,
    "media": "/logos/2017/logo17/",
    "hasSounds": true,
    "readOnly": false,
    "rtl": false,
    "scrollbars": true,
    "toolbox": "<xml id=\"toolbox-simple\" style=\"display: none\">\n      <block type=\"logo17_for_loop\">\n        <value name=\"TIMES\">\n          <shadow type=\"math_whole_number\">\n            <field name=\"NUM\">4</field>\n          </shadow>\n        </value>\n      </block>\n      <block type=\"logo17_move_forward\"></block>\n      <block type=\"logo17_turn_right\"></block>\n      <block type=\"logo17_turn_left\"></block>\n    </xml>",
    "trashcan": false,
    "horizontalLayout": true,
    "toolboxPosition": "end",
    "sounds": true,
    "grid": {
      "spacing": 16,
      "length": 1,
      "colour": "transparent",
      "snap": false
    },
    "colours": {
      "workspace": "#72d4c8",
      "flyout": "transparent",
      "scrollbar": "rgba(50, 139, 122, 0.6)",
      "scrollbarHover": "#0c111a",
      "insertionMarker": "#ffffff",
      "insertionMarkerOpacity": 0.3,
      "fieldShadow": "rgba(255, 255, 255, 0.3)",
      "dragShadowOpacity": 0.6
    },
    "zoom": {
      "startScale": 0.7,
      "maxScale": 0.7,
      "minScale": 0.7
    }
  },
  "tutorial": {
    "comments": false,
    "disable": false,
    "collapse": false,
    "media": "/logos/2017/logo17/",
    "hasSounds": true,
    "readOnly": false,
    "rtl": false,
    "scrollbars": true,
    "toolbox": "{{spec.toolboxXml}}",
    "trashcan": false,
    "horizontalLayout": true,
    "toolboxPosition": "end",
    "sounds": true,
    "grid": {
      "spacing": 16,
      "length": 1,
      "colour": "#8b5192",
      "snap": false
    },
    "colours": {
      "workspace": "#8b5192",
      "flyout": "#9d60a4",
      "scrollbar": "transparent",
      "scrollbarHover": "#0c111a",
      "insertionMarker": "#ffffff",
      "insertionMarkerOpacity": 0.3,
      "fieldShadow": "rgba(255, 255, 255, 0.3)",
      "dragShadowOpacity": 0.6
    },
    "zoom": {
      "startScale": "{{spec.workspaceScale}}",
      "maxScale": "{{spec.workspaceScale}}",
      "minScale": "{{spec.workspaceScale}}"
    }
  }
};

/** Per level, the parts the original stores directly. */
export const levels = [
  {
    "targetBlockCount": 2,
    "spriteSheetIds": [
      2,
      3
    ],
    "toolboxXml": "<xml id=\"toolbox-simple\" style=\"display: none\">\n    <block type=\"logo17_move_forward\"></block>\n  </xml>"
  },
  {
    "targetBlockCount": 5,
    "spriteSheetIds": [
      4
    ],
    "toolboxXml": "<xml id=\"toolbox-simple\" style=\"display: none\">\n    <block type=\"logo17_move_forward\"></block>\n    <block type=\"logo17_turn_right\"></block>\n  </xml>"
  },
  {
    "targetBlockCount": 4,
    "spriteSheetIds": [
      5,
      6
    ],
    "toolboxXml": "<xml id=\"toolbox-simple\" style=\"display: none\">\n    <block type=\"logo17_for_loop\">\n      <value name=\"TIMES\">\n        <shadow type=\"math_whole_number\">\n          <field name=\"NUM\">4</field>\n        </shadow>\n      </value>\n    </block>\n    <block type=\"logo17_move_forward\"></block>\n    <block type=\"logo17_turn_right\"></block>\n  </xml>"
  },
  {
    "targetBlockCount": 7,
    "spriteSheetIds": [
      7,
      8,
      9
    ],
    "toolboxXml": "<xml id=\"toolbox-simple\" style=\"display: none\">\n      <block type=\"logo17_for_loop\">\n        <value name=\"TIMES\">\n          <shadow type=\"math_whole_number\">\n            <field name=\"NUM\">4</field>\n          </shadow>\n        </value>\n      </block>\n      <block type=\"logo17_move_forward\"></block>\n      <block type=\"logo17_turn_right\"></block>\n      <block type=\"logo17_turn_left\"></block>\n    </xml>"
  },
  {
    "targetBlockCount": 6,
    "spriteSheetIds": [
      10,
      6,
      8
    ],
    "toolboxXml": "<xml id=\"toolbox-simple\" style=\"display: none\">\n      <block type=\"logo17_for_loop\">\n        <value name=\"TIMES\">\n          <shadow type=\"math_whole_number\">\n            <field name=\"NUM\">4</field>\n          </shadow>\n        </value>\n      </block>\n      <block type=\"logo17_move_forward\"></block>\n      <block type=\"logo17_turn_right\"></block>\n      <block type=\"logo17_turn_left\"></block>\n    </xml>"
  },
  {
    "targetBlockCount": 6,
    "spriteSheetIds": [
      11,
      3,
      9
    ],
    "toolboxXml": "<xml id=\"toolbox-simple\" style=\"display: none\">\n      <block type=\"logo17_for_loop\">\n        <value name=\"TIMES\">\n          <shadow type=\"math_whole_number\">\n            <field name=\"NUM\">4</field>\n          </shadow>\n        </value>\n      </block>\n      <block type=\"logo17_move_forward\"></block>\n      <block type=\"logo17_turn_right\"></block>\n      <block type=\"logo17_turn_left\"></block>\n    </xml>"
  }
];

/** Per tutorial, the parts the original stores directly. */
export const tutorials = [
  {
    "workspaceScale": 1,
    "workspaceXml": "<xml>\n      <block type=\"logo17_run_code\"\n             id=\"tutorial_start_block_id\"\n             deletable=\"false\"\n             movable=\"false\"\n             x=\"10\"\n             y=\"96\">\n      </block>\n    </xml>",
    "toolboxXml": "<xml id=\"toolbox-simple\" style=\"display: none\">\n    <block\n        id=\"logo17_move_forward\"\n        type=\"logo17_move_forward\"></block>\n  </xml>",
    "screens": [
      {
        "textTemplate": "<div><h1>{{Tutorial 1 - Title}}</h1><p>{{Tutorial 1 - Intro}}</p></div>",
        "textKeys": [
          "Tutorial 1 - Title",
          "Tutorial 1 - Intro"
        ],
        "showBlocklyDiv": false,
        "blockPickupPredicate": null,
        "astMatchPattern": null,
        "disableBlockTypes": [],
        "enableBlockTypes": []
      },
      {
        "textTemplate": "<p>{{Tutorial 1 - Prompt (Alt)}}</p>",
        "textKeys": [
          "Tutorial 1 - Prompt (Alt)"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": [
          "logo17_run_code",
          "logo17_move_forward"
        ],
        "disableBlockTypes": [],
        "enableBlockTypes": []
      },
      {
        "textTemplate": "<p>{{Tutorial 1 - Play (Alt)}}</p>",
        "textKeys": [
          "Tutorial 1 - Play (Alt)"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": null,
        "disableBlockTypes": [],
        "enableBlockTypes": []
      },
      {
        "textTemplate": "{{Tutorial 1 - Done}}",
        "textKeys": [
          "Tutorial 1 - Done"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": null,
        "disableBlockTypes": [],
        "enableBlockTypes": []
      }
    ]
  },
  {
    "workspaceScale": 1,
    "workspaceXml": "<xml>\n      <block type=\"logo17_run_code\"\n             id=\"tutorial_start_block_id\"\n             deletable=\"false\"\n             movable=\"false\"\n             x=\"10\"\n             y=\"96\">\n      </block>\n    </xml>",
    "toolboxXml": "<xml id=\"toolbox-simple\" style=\"display: none\">\n    <block\n        id=\"logo17_turn_right\"\n        type=\"logo17_turn_right\"></block>\n    <block\n        id=\"logo17_move_forward\"\n        type=\"logo17_move_forward\"></block>\n  </xml>",
    "screens": [
      {
        "textTemplate": "<div><h1>{{Tutorial 2 - Carrots}}</h1><p>{{Tutorial 2 - Turn (Alt)}}</p></div>",
        "textKeys": [
          "Tutorial 2 - Carrots",
          "Tutorial 2 - Turn (Alt)"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": [
          "logo17_run_code",
          "logo17_turn_right"
        ],
        "disableBlockTypes": [
          "logo17_move_forward"
        ],
        "enableBlockTypes": []
      },
      {
        "textTemplate": "<p>{{Tutorial 2 - Forward (Alt)}}</p>",
        "textKeys": [
          "Tutorial 2 - Forward (Alt)"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": [
          "logo17_run_code",
          "logo17_turn_right",
          "logo17_move_forward"
        ],
        "disableBlockTypes": [],
        "enableBlockTypes": [
          "logo17_move_forward"
        ]
      },
      {
        "textTemplate": "<p>{{Tutorial 2 - Play (Alt)}}</p>",
        "textKeys": [
          "Tutorial 2 - Play (Alt)"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": null,
        "disableBlockTypes": [],
        "enableBlockTypes": [
          "logo17_turn_right"
        ]
      },
      {
        "textTemplate": "{{Tutorial 2 - Done}}",
        "textKeys": [
          "Tutorial 2 - Done"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": null,
        "disableBlockTypes": [],
        "enableBlockTypes": []
      }
    ]
  },
  {
    "workspaceScale": 0.7,
    "workspaceXml": "<xml>\n      <block type=\"logo17_run_code\"\n             id=\"tutorial_start_block_id\"\n             deletable=\"false\"\n             movable=\"false\"\n             x=\"20\"\n             y=\"149\">\n        <next>\n          <block type=\"logo17_move_forward\"></block>\n        </next>\n      </block>\n    </xml>",
    "toolboxXml": "<xml id=\"toolbox-simple\" style=\"display: none\">\n    <block\n        id=\"logo17_for_loop\"\n        type=\"logo17_for_loop\">\n      <value name=\"TIMES\">\n        <shadow type=\"math_whole_number\">\n          <field name=\"NUM\">2</field>\n        </shadow>\n      </value>\n    </block>\n    <block\n        id=\"logo17_move_forward\"\n        type=\"logo17_move_forward\"></block>\n  </xml>",
    "screens": [
      {
        "textTemplate": "<div><h1>{{Tutorial 3 - Try Loops}}</h1><p>{{Tutorial 3 - Loops (Alt)}}</p></div>",
        "textKeys": [
          "Tutorial 3 - Try Loops",
          "Tutorial 3 - Loops (Alt)"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": [
          "logo17_run_code",
          [
            "logo17_for_loop",
            "logo17_move_forward"
          ]
        ],
        "disableBlockTypes": [],
        "enableBlockTypes": []
      },
      {
        "textTemplate": "<p>{{Tutorial 3 - Bravo (Alt)}}</p>",
        "textKeys": [
          "Tutorial 3 - Bravo (Alt)"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": null,
        "disableBlockTypes": [],
        "enableBlockTypes": []
      },
      {
        "textTemplate": "{{Tutorial Complete}}",
        "textKeys": [
          "Tutorial Complete"
        ],
        "showBlocklyDiv": true,
        "blockPickupPredicate": null,
        "astMatchPattern": null,
        "disableBlockTypes": [],
        "enableBlockTypes": []
      }
    ]
  }
];

/** Sprite sheet file names, indexed as the original indexes them. */
export const sheetFiles = [
  {
    "index": 0,
    "filename": "loading-sprite.svg"
  },
  {
    "index": 1,
    "filename": "shared-sprite.svg"
  },
  {
    "index": 2,
    "filename": "one-sprite.svg"
  },
  {
    "index": 3,
    "filename": "one-six-sprite.svg"
  },
  {
    "index": 4,
    "filename": "two-sprite.svg"
  },
  {
    "index": 5,
    "filename": "three-sprite.svg"
  },
  {
    "index": 6,
    "filename": "three-five-sprite.svg"
  },
  {
    "index": 7,
    "filename": "four-sprite.svg"
  },
  {
    "index": 8,
    "filename": "four-five-sprite.svg"
  },
  {
    "index": 9,
    "filename": "four-six-sprite.svg"
  },
  {
    "index": 10,
    "filename": "five-sprite.svg"
  },
  {
    "index": 11,
    "filename": "six-sprite.svg"
  }
];

/** Tile definitions, from the original's tileset file and its frame table. */
export const tileset = [
  {
    "type": "player",
    "orientation": "left",
    "image": "bunny_west_0.svg",
    "imageDir": "images/bunny",
    "imageWidth": 128,
    "imageHeight": 170,
    "frames": [
      "BUNNY_WEST_0"
    ]
  },
  {
    "type": "player",
    "orientation": "up",
    "image": "bunny_north_0.svg",
    "imageDir": "images/bunny",
    "imageWidth": 128,
    "imageHeight": 170,
    "frames": [
      "BUNNY_NORTH_0"
    ]
  },
  {
    "type": "player",
    "orientation": "down",
    "image": "bunny_south_0.svg",
    "imageDir": "images/bunny",
    "imageWidth": 128,
    "imageHeight": 170,
    "frames": [
      "BUNNY_SOUTH_0"
    ]
  },
  {
    "type": "player",
    "orientation": "right",
    "image": "bunny_east_0.svg",
    "imageDir": "images/bunny",
    "imageWidth": 128,
    "imageHeight": 169,
    "frames": [
      "BUNNY_EAST_0"
    ]
  },
  {
    "type": null,
    "image": "gate.svg",
    "imageDir": "images/L1",
    "imageWidth": 153,
    "imageHeight": 195,
    "frames": [
      "GATE"
    ]
  },
  {
    "type": "passable",
    "image": "cube_1.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "CUBE_1"
    ]
  },
  {
    "type": "passable",
    "image": "cube_2.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "CUBE_2"
    ]
  },
  {
    "type": "passable",
    "image": "cube_3.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "CUBE_3"
    ]
  },
  {
    "type": "carrot",
    "image": "carrot.svg",
    "imageDir": "images/carrot",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "CARROT"
    ]
  },
  {
    "type": "triggerable",
    "image": "plant_018.svg",
    "imageDir": "images/L1L6",
    "imageWidth": 41,
    "imageHeight": 51,
    "frames": [
      "PLANT_001",
      "PLANT_002",
      "PLANT_003",
      "PLANT_004",
      "PLANT_005",
      "PLANT_006",
      "PLANT_007",
      "PLANT_008",
      "PLANT_009",
      "PLANT_010",
      "PLANT_011",
      "PLANT_012",
      "PLANT_013",
      "PLANT_014",
      "PLANT_015",
      "PLANT_016",
      "PLANT_017",
      "PLANT_018"
    ]
  },
  {
    "type": "triggerable",
    "image": "tree_21.svg",
    "imageDir": "images/L1",
    "imageWidth": 114,
    "imageHeight": 182,
    "frames": [
      "TREE_0",
      "TREE_1",
      "TREE_2",
      "TREE_3",
      "TREE_4",
      "TREE_5",
      "TREE_6",
      "TREE_7",
      "TREE_8",
      "TREE_9",
      "TREE_10",
      "TREE_11",
      "TREE_12",
      "TREE_13",
      "TREE_14",
      "TREE_15",
      "TREE_16",
      "TREE_17",
      "TREE_18",
      "TREE_19",
      "TREE_20",
      "TREE_21"
    ]
  },
  {
    "type": null,
    "image": "carrot_1.svg",
    "imageDir": "images/loading_screen",
    "imageWidth": 55,
    "imageHeight": 90,
    "frames": [
      "CARROT_1",
      "CARROT_2",
      "CARROT_3",
      "CARROT_4",
      "CARROT_5",
      "CARROT_6",
      "CARROT_7",
      "CARROT_8",
      "CARROT_9",
      "CARROT_10",
      "CARROT_11",
      "CARROT_12",
      "CARROT_13",
      "CARROT_14",
      "CARROT_15",
      "CARROT_16",
      "CARROT_17",
      "CARROT_18",
      "CARROT_19",
      "CARROT_20",
      "CARROT_21",
      "CARROT_22",
      "CARROT_23",
      "CARROT_24",
      "CARROT_25",
      "CARROT_26",
      "CARROT_27",
      "CARROT_28",
      "CARROT_29",
      "CARROT_30",
      "CARROT_31",
      "CARROT_32",
      "CARROT_33",
      "CARROT_34",
      "CARROT_35",
      "CARROT_36",
      "CARROT_37",
      "CARROT_38",
      "CARROT_39",
      "CARROT_40",
      "CARROT_41",
      "CARROT_42",
      "CARROT_43",
      "CARROT_44",
      "CARROT_45",
      "CARROT_46",
      "CARROT_47",
      "CARROT_48"
    ]
  },
  {
    "type": "triggerable",
    "image": "flower_013.svg",
    "imageDir": "images/L1",
    "imageWidth": 24,
    "imageHeight": 14,
    "frames": [
      "FLOWER_001",
      "FLOWER_002",
      "FLOWER_003",
      "FLOWER_004",
      "FLOWER_005",
      "FLOWER_006",
      "FLOWER_007",
      "FLOWER_008",
      "FLOWER_009",
      "FLOWER_010",
      "FLOWER_011",
      "FLOWER_012",
      "FLOWER_013"
    ]
  },
  {
    "type": "triggerable",
    "image": "flower_tall_014.svg",
    "imageDir": "images/L1",
    "imageWidth": 90,
    "imageHeight": 61,
    "frames": [
      "FLOWER_TALL_001",
      "FLOWER_TALL_002",
      "FLOWER_TALL_003",
      "FLOWER_TALL_004",
      "FLOWER_TALL_005",
      "FLOWER_TALL_006",
      "FLOWER_TALL_007",
      "FLOWER_TALL_008",
      "FLOWER_TALL_009",
      "FLOWER_TALL_010",
      "FLOWER_TALL_011",
      "FLOWER_TALL_012",
      "FLOWER_TALL_013",
      "FLOWER_TALL_014"
    ]
  },
  {
    "type": "triggerable",
    "image": "flower_yellow_010.svg",
    "imageDir": "images/L1",
    "imageWidth": 18,
    "imageHeight": 10,
    "frames": [
      "FLOWER_YELLOW_001",
      "FLOWER_YELLOW_002",
      "FLOWER_YELLOW_003",
      "FLOWER_YELLOW_004",
      "FLOWER_YELLOW_005",
      "FLOWER_YELLOW_006",
      "FLOWER_YELLOW_007",
      "FLOWER_YELLOW_008",
      "FLOWER_YELLOW_009",
      "FLOWER_YELLOW_010"
    ]
  },
  {
    "type": null,
    "image": "fountain_ripple_015.svg",
    "imageDir": "images/L1",
    "imageWidth": 44,
    "imageHeight": 20,
    "frames": [
      "FOUNTAIN_RIPPLE_001",
      "FOUNTAIN_RIPPLE_002",
      "FOUNTAIN_RIPPLE_003",
      "FOUNTAIN_RIPPLE_004",
      "FOUNTAIN_RIPPLE_005",
      "FOUNTAIN_RIPPLE_006",
      "FOUNTAIN_RIPPLE_007",
      "FOUNTAIN_RIPPLE_008",
      "FOUNTAIN_RIPPLE_009",
      "FOUNTAIN_RIPPLE_010",
      "FOUNTAIN_RIPPLE_011",
      "FOUNTAIN_RIPPLE_012",
      "FOUNTAIN_RIPPLE_013",
      "FOUNTAIN_RIPPLE_014",
      "FOUNTAIN_RIPPLE_015",
      "FOUNTAIN_RIPPLE_016",
      "FOUNTAIN_RIPPLE_017",
      "FOUNTAIN_RIPPLE_018",
      "FOUNTAIN_RIPPLE_019",
      "FOUNTAIN_RIPPLE_020",
      "FOUNTAIN_RIPPLE_021"
    ]
  },
  {
    "type": null,
    "image": "fountain_water_0.svg",
    "imageDir": "images/L1",
    "imageWidth": 80,
    "imageHeight": 80,
    "frames": [
      "FOUNTAIN_WATER_0",
      "FOUNTAIN_WATER_1",
      "FOUNTAIN_WATER_2",
      "FOUNTAIN_WATER_3",
      "FOUNTAIN_WATER_4",
      "FOUNTAIN_WATER_5",
      "FOUNTAIN_WATER_6",
      "FOUNTAIN_WATER_7",
      "FOUNTAIN_WATER_8",
      "FOUNTAIN_WATER_9",
      "FOUNTAIN_WATER_10",
      "FOUNTAIN_WATER_11",
      "FOUNTAIN_WATER_12",
      "FOUNTAIN_WATER_13",
      "FOUNTAIN_WATER_14",
      "FOUNTAIN_WATER_15",
      "FOUNTAIN_WATER_16",
      "FOUNTAIN_WATER_17",
      "FOUNTAIN_WATER_18",
      "FOUNTAIN_WATER_19",
      "FOUNTAIN_WATER_20",
      "FOUNTAIN_WATER_21",
      "FOUNTAIN_WATER_22",
      "FOUNTAIN_WATER_23",
      "FOUNTAIN_WATER_24",
      "FOUNTAIN_WATER_25",
      "FOUNTAIN_WATER_26",
      "FOUNTAIN_WATER_27",
      "FOUNTAIN_WATER_28"
    ]
  },
  {
    "type": null,
    "image": "fountain_alt.svg",
    "imageDir": "images/L1",
    "imageWidth": 133,
    "imageHeight": 152,
    "frames": [
      "FOUNTAIN_ALT"
    ]
  },
  {
    "type": null,
    "image": "fountain.svg",
    "imageDir": "images/L1",
    "imageWidth": 150,
    "imageHeight": 156,
    "frames": [
      "FOUNTAIN"
    ]
  },
  {
    "type": "cloud",
    "image": "cloud_01.svg",
    "imageDir": "images/L1",
    "imageWidth": 97,
    "imageHeight": 84,
    "frames": [
      "CLOUD_01"
    ]
  },
  {
    "type": "cloud",
    "image": "cloud_02.svg",
    "imageDir": "images/L1",
    "imageWidth": 47,
    "imageHeight": 33,
    "frames": [
      "CLOUD_02"
    ]
  },
  {
    "type": "cloud",
    "image": "cloud_03.svg",
    "imageDir": "images/L1",
    "imageWidth": 57,
    "imageHeight": 34,
    "frames": [
      "CLOUD_03"
    ]
  },
  {
    "type": "cloud",
    "image": "cloud_04.svg",
    "imageDir": "images/L1",
    "imageWidth": 115,
    "imageHeight": 71,
    "frames": [
      "CLOUD_04"
    ]
  },
  {
    "type": "triggerable",
    "image": "027_L2_Block01_018.svg",
    "imageDir": "images/L2",
    "imageWidth": 99,
    "imageHeight": 174,
    "frames": [
      "N027_L2_BLOCK01_001",
      "N027_L2_BLOCK01_002",
      "N027_L2_BLOCK01_003",
      "N027_L2_BLOCK01_004",
      "N027_L2_BLOCK01_005",
      "N027_L2_BLOCK01_006",
      "N027_L2_BLOCK01_007",
      "N027_L2_BLOCK01_008",
      "N027_L2_BLOCK01_009",
      "N027_L2_BLOCK01_010",
      "N027_L2_BLOCK01_011",
      "N027_L2_BLOCK01_012",
      "N027_L2_BLOCK01_013",
      "N027_L2_BLOCK01_014",
      "N027_L2_BLOCK01_015",
      "N027_L2_BLOCK01_016",
      "N027_L2_BLOCK01_017",
      "N027_L2_BLOCK01_018"
    ]
  },
  {
    "type": "triggerable",
    "image": "028_L2_Block02_018.svg",
    "imageDir": "images/L2",
    "imageWidth": 52,
    "imageHeight": 65,
    "frames": [
      "N028_L2_BLOCK02_001",
      "N028_L2_BLOCK02_002",
      "N028_L2_BLOCK02_003",
      "N028_L2_BLOCK02_004",
      "N028_L2_BLOCK02_005",
      "N028_L2_BLOCK02_006",
      "N028_L2_BLOCK02_007",
      "N028_L2_BLOCK02_008",
      "N028_L2_BLOCK02_009",
      "N028_L2_BLOCK02_010",
      "N028_L2_BLOCK02_011",
      "N028_L2_BLOCK02_012",
      "N028_L2_BLOCK02_013",
      "N028_L2_BLOCK02_014",
      "N028_L2_BLOCK02_015",
      "N028_L2_BLOCK02_016",
      "N028_L2_BLOCK02_017",
      "N028_L2_BLOCK02_018"
    ]
  },
  {
    "type": "triggerable",
    "image": "029_L2_Block03_018.svg",
    "imageDir": "images/L2",
    "imageWidth": 123,
    "imageHeight": 202,
    "frames": [
      "N029_L2_BLOCK03_001",
      "N029_L2_BLOCK03_002",
      "N029_L2_BLOCK03_003",
      "N029_L2_BLOCK03_004",
      "N029_L2_BLOCK03_005",
      "N029_L2_BLOCK03_006",
      "N029_L2_BLOCK03_007",
      "N029_L2_BLOCK03_008",
      "N029_L2_BLOCK03_009",
      "N029_L2_BLOCK03_010",
      "N029_L2_BLOCK03_011",
      "N029_L2_BLOCK03_012",
      "N029_L2_BLOCK03_013",
      "N029_L2_BLOCK03_014",
      "N029_L2_BLOCK03_015",
      "N029_L2_BLOCK03_016",
      "N029_L2_BLOCK03_017",
      "N029_L2_BLOCK03_018"
    ]
  },
  {
    "type": "triggerable",
    "image": "030_L2_Block04_019.svg",
    "imageDir": "images/L2",
    "imageWidth": 77,
    "imageHeight": 42,
    "frames": [
      "N030_L2_BLOCK04_001",
      "N030_L2_BLOCK04_002",
      "N030_L2_BLOCK04_003",
      "N030_L2_BLOCK04_004",
      "N030_L2_BLOCK04_005",
      "N030_L2_BLOCK04_006",
      "N030_L2_BLOCK04_007",
      "N030_L2_BLOCK04_008",
      "N030_L2_BLOCK04_009",
      "N030_L2_BLOCK04_010",
      "N030_L2_BLOCK04_011",
      "N030_L2_BLOCK04_012",
      "N030_L2_BLOCK04_013",
      "N030_L2_BLOCK04_014",
      "N030_L2_BLOCK04_015",
      "N030_L2_BLOCK04_016",
      "N030_L2_BLOCK04_017",
      "N030_L2_BLOCK04_018",
      "N030_L2_BLOCK04_019"
    ]
  },
  {
    "type": null,
    "image": "033_L2_AppleTreeSpin_1.svg",
    "imageDir": "images/L2",
    "imageWidth": 119,
    "imageHeight": 103,
    "frames": [
      "N033_L2_APPLETREESPIN_1",
      "N033_L2_APPLETREESPIN_2",
      "N033_L2_APPLETREESPIN_3",
      "N033_L2_APPLETREESPIN_4",
      "N033_L2_APPLETREESPIN_5",
      "N033_L2_APPLETREESPIN_6",
      "N033_L2_APPLETREESPIN_7",
      "N033_L2_APPLETREESPIN_8",
      "N033_L2_APPLETREESPIN_9",
      "N033_L2_APPLETREESPIN_10",
      "N033_L2_APPLETREESPIN_11",
      "N033_L2_APPLETREESPIN_12",
      "N033_L2_APPLETREESPIN_13",
      "N033_L2_APPLETREESPIN_14",
      "N033_L2_APPLETREESPIN_15",
      "N033_L2_APPLETREESPIN_16",
      "N033_L2_APPLETREESPIN_17",
      "N033_L2_APPLETREESPIN_18",
      "N033_L2_APPLETREESPIN_19",
      "N033_L2_APPLETREESPIN_20",
      "N033_L2_APPLETREESPIN_21",
      "N033_L2_APPLETREESPIN_22",
      "N033_L2_APPLETREESPIN_23",
      "N033_L2_APPLETREESPIN_24",
      "N033_L2_APPLETREESPIN_25",
      "N033_L2_APPLETREESPIN_26",
      "N033_L2_APPLETREESPIN_27",
      "N033_L2_APPLETREESPIN_28",
      "N033_L2_APPLETREESPIN_29",
      "N033_L2_APPLETREESPIN_30",
      "N033_L2_APPLETREESPIN_31",
      "N033_L2_APPLETREESPIN_32",
      "N033_L2_APPLETREESPIN_33",
      "N033_L2_APPLETREESPIN_34",
      "N033_L2_APPLETREESPIN_35",
      "N033_L2_APPLETREESPIN_36",
      "N033_L2_APPLETREESPIN_37",
      "N033_L2_APPLETREESPIN_38",
      "N033_L2_APPLETREESPIN_39",
      "N033_L2_APPLETREESPIN_40",
      "N033_L2_APPLETREESPIN_41",
      "N033_L2_APPLETREESPIN_42",
      "N033_L2_APPLETREESPIN_43",
      "N033_L2_APPLETREESPIN_44",
      "N033_L2_APPLETREESPIN_45",
      "N033_L2_APPLETREESPIN_46",
      "N033_L2_APPLETREESPIN_47",
      "N033_L2_APPLETREESPIN_48"
    ]
  },
  {
    "type": null,
    "image": "032_L2_island01_Apple.svg",
    "imageDir": "images/L2",
    "imageWidth": 128,
    "imageHeight": 201,
    "frames": [
      "N032_L2_ISLAND01_APPLE"
    ]
  },
  {
    "type": null,
    "image": "034_L2_island02_Pear_1.svg",
    "imageDir": "images/L2",
    "imageWidth": 128,
    "imageHeight": 141,
    "frames": [
      "N034_L2_ISLAND02_PEAR_1"
    ]
  },
  {
    "type": null,
    "image": "035_L2_island03_Stairs.svg",
    "imageDir": "images/L2",
    "imageWidth": 128,
    "imageHeight": 149,
    "frames": [
      "N035_L2_ISLAND03_STAIRS"
    ]
  },
  {
    "type": null,
    "image": "036_L2_island06_Cherry.svg",
    "imageDir": "images/L2",
    "imageWidth": 133,
    "imageHeight": 233,
    "frames": [
      "N036_L2_ISLAND06_CHERRY"
    ]
  },
  {
    "type": "passable",
    "image": "043_L2_Tile01_002.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N043_L2_TILE01_002"
    ]
  },
  {
    "type": "passable",
    "image": "045_L2_Tile03_008.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N045_L2_TILE03_008"
    ]
  },
  {
    "type": "cloud",
    "image": "039_L2_Cloud01.svg",
    "imageDir": "images/L2",
    "imageWidth": 108,
    "imageHeight": 69,
    "frames": [
      "N039_L2_CLOUD01"
    ]
  },
  {
    "type": "cloud",
    "image": "040_L2_Cloud02.svg",
    "imageDir": "images/L2",
    "imageWidth": 52,
    "imageHeight": 58,
    "frames": [
      "N040_L2_CLOUD02"
    ]
  },
  {
    "type": "cloud",
    "image": "041_L2_Cloud03.svg",
    "imageDir": "images/L2",
    "imageWidth": 100,
    "imageHeight": 77,
    "frames": [
      "N041_L2_CLOUD03"
    ]
  },
  {
    "type": "cloud",
    "image": "042_L2_Cloud04.svg",
    "imageDir": "images/L2",
    "imageWidth": 110,
    "imageHeight": 99,
    "frames": [
      "N042_L2_CLOUD04"
    ]
  },
  {
    "type": null,
    "image": "037_L2_StrawberrySpin_020.svg",
    "imageDir": "images/L2",
    "imageWidth": 68,
    "imageHeight": 65,
    "frames": [
      "N037_L2_STRAWBERRYSPIN_001",
      "N037_L2_STRAWBERRYSPIN_002",
      "N037_L2_STRAWBERRYSPIN_003",
      "N037_L2_STRAWBERRYSPIN_004",
      "N037_L2_STRAWBERRYSPIN_005",
      "N037_L2_STRAWBERRYSPIN_006",
      "N037_L2_STRAWBERRYSPIN_007",
      "N037_L2_STRAWBERRYSPIN_008",
      "N037_L2_STRAWBERRYSPIN_009",
      "N037_L2_STRAWBERRYSPIN_010",
      "N037_L2_STRAWBERRYSPIN_011",
      "N037_L2_STRAWBERRYSPIN_012",
      "N037_L2_STRAWBERRYSPIN_013",
      "N037_L2_STRAWBERRYSPIN_014",
      "N037_L2_STRAWBERRYSPIN_015",
      "N037_L2_STRAWBERRYSPIN_016",
      "N037_L2_STRAWBERRYSPIN_017",
      "N037_L2_STRAWBERRYSPIN_018",
      "N037_L2_STRAWBERRYSPIN_019",
      "N037_L2_STRAWBERRYSPIN_020",
      "N037_L2_STRAWBERRYSPIN_021",
      "N037_L2_STRAWBERRYSPIN_022",
      "N037_L2_STRAWBERRYSPIN_023",
      "N037_L2_STRAWBERRYSPIN_024",
      "N037_L2_STRAWBERRYSPIN_025",
      "N037_L2_STRAWBERRYSPIN_026",
      "N037_L2_STRAWBERRYSPIN_027",
      "N037_L2_STRAWBERRYSPIN_028",
      "N037_L2_STRAWBERRYSPIN_029",
      "N037_L2_STRAWBERRYSPIN_030",
      "N037_L2_STRAWBERRYSPIN_031",
      "N037_L2_STRAWBERRYSPIN_032",
      "N037_L2_STRAWBERRYSPIN_033",
      "N037_L2_STRAWBERRYSPIN_034",
      "N037_L2_STRAWBERRYSPIN_035",
      "N037_L2_STRAWBERRYSPIN_036",
      "N037_L2_STRAWBERRYSPIN_037",
      "N037_L2_STRAWBERRYSPIN_038",
      "N037_L2_STRAWBERRYSPIN_039",
      "N037_L2_STRAWBERRYSPIN_040"
    ]
  },
  {
    "type": null,
    "image": "037_L2_island05_Strawberry.svg",
    "imageDir": "images/L2",
    "imageWidth": 128,
    "imageHeight": 98,
    "frames": [
      "N037_L2_ISLAND05_STRAWBERRY"
    ]
  },
  {
    "type": "triggerable",
    "image": "049_L3_Block01_017.svg",
    "imageDir": "images/L3",
    "imageWidth": 88,
    "imageHeight": 46,
    "frames": [
      "N049_L3_BLOCK01_001",
      "N049_L3_BLOCK01_002",
      "N049_L3_BLOCK01_003",
      "N049_L3_BLOCK01_004",
      "N049_L3_BLOCK01_005",
      "N049_L3_BLOCK01_006",
      "N049_L3_BLOCK01_007",
      "N049_L3_BLOCK01_008",
      "N049_L3_BLOCK01_009",
      "N049_L3_BLOCK01_010",
      "N049_L3_BLOCK01_011",
      "N049_L3_BLOCK01_012",
      "N049_L3_BLOCK01_013",
      "N049_L3_BLOCK01_014",
      "N049_L3_BLOCK01_015",
      "N049_L3_BLOCK01_016",
      "N049_L3_BLOCK01_017"
    ]
  },
  {
    "type": "triggerable",
    "image": "050_L3_Block02_018.svg",
    "imageDir": "images/L3",
    "imageWidth": 33,
    "imageHeight": 59,
    "frames": [
      "N050_L3_BLOCK02_001",
      "N050_L3_BLOCK02_002",
      "N050_L3_BLOCK02_003",
      "N050_L3_BLOCK02_004",
      "N050_L3_BLOCK02_005",
      "N050_L3_BLOCK02_006",
      "N050_L3_BLOCK02_007",
      "N050_L3_BLOCK02_008",
      "N050_L3_BLOCK02_009",
      "N050_L3_BLOCK02_010",
      "N050_L3_BLOCK02_011",
      "N050_L3_BLOCK02_012",
      "N050_L3_BLOCK02_013",
      "N050_L3_BLOCK02_014",
      "N050_L3_BLOCK02_015",
      "N050_L3_BLOCK02_016",
      "N050_L3_BLOCK02_017",
      "N050_L3_BLOCK02_018"
    ]
  },
  {
    "type": "triggerable",
    "image": "051_L3_Block03_012.svg",
    "imageDir": "images/L3",
    "imageWidth": 76,
    "imageHeight": 206,
    "frames": [
      "N051_L3_BLOCK03_001",
      "N051_L3_BLOCK03_002",
      "N051_L3_BLOCK03_003",
      "N051_L3_BLOCK03_004",
      "N051_L3_BLOCK03_005",
      "N051_L3_BLOCK03_006",
      "N051_L3_BLOCK03_007",
      "N051_L3_BLOCK03_008",
      "N051_L3_BLOCK03_009",
      "N051_L3_BLOCK03_010",
      "N051_L3_BLOCK03_011",
      "N051_L3_BLOCK03_012"
    ]
  },
  {
    "type": "triggerable",
    "image": "056_L3_Waterfall_Block07_025.svg",
    "imageDir": "images/L3",
    "imageWidth": 132,
    "imageHeight": 152,
    "frames": [
      "N056_L3_WATERFALL_BLOCK07_001",
      "N056_L3_WATERFALL_BLOCK07_002",
      "N056_L3_WATERFALL_BLOCK07_003",
      "N056_L3_WATERFALL_BLOCK07_004",
      "N056_L3_WATERFALL_BLOCK07_005",
      "N056_L3_WATERFALL_BLOCK07_006",
      "N056_L3_WATERFALL_BLOCK07_007",
      "N056_L3_WATERFALL_BLOCK07_008",
      "N056_L3_WATERFALL_BLOCK07_009",
      "N056_L3_WATERFALL_BLOCK07_010",
      "N056_L3_WATERFALL_BLOCK07_011",
      "N056_L3_WATERFALL_BLOCK07_012",
      "N056_L3_WATERFALL_BLOCK07_013",
      "N056_L3_WATERFALL_BLOCK07_014",
      "N056_L3_WATERFALL_BLOCK07_015",
      "N056_L3_WATERFALL_BLOCK07_016",
      "N056_L3_WATERFALL_BLOCK07_017",
      "N056_L3_WATERFALL_BLOCK07_018",
      "N056_L3_WATERFALL_BLOCK07_019",
      "N056_L3_WATERFALL_BLOCK07_020",
      "N056_L3_WATERFALL_BLOCK07_021",
      "N056_L3_WATERFALL_BLOCK07_022",
      "N056_L3_WATERFALL_BLOCK07_023",
      "N056_L3_WATERFALL_BLOCK07_024",
      "N056_L3_WATERFALL_BLOCK07_025"
    ]
  },
  {
    "type": "triggerable",
    "image": "055_L3_Waterfall_Block06_021.svg",
    "imageDir": "images/L3",
    "imageWidth": 90,
    "imageHeight": 107,
    "frames": [
      "N055_L3_WATERFALL_BLOCK06_001",
      "N055_L3_WATERFALL_BLOCK06_002",
      "N055_L3_WATERFALL_BLOCK06_003",
      "N055_L3_WATERFALL_BLOCK06_004",
      "N055_L3_WATERFALL_BLOCK06_005",
      "N055_L3_WATERFALL_BLOCK06_006",
      "N055_L3_WATERFALL_BLOCK06_007",
      "N055_L3_WATERFALL_BLOCK06_008",
      "N055_L3_WATERFALL_BLOCK06_009",
      "N055_L3_WATERFALL_BLOCK06_010",
      "N055_L3_WATERFALL_BLOCK06_011",
      "N055_L3_WATERFALL_BLOCK06_012",
      "N055_L3_WATERFALL_BLOCK06_013",
      "N055_L3_WATERFALL_BLOCK06_014",
      "N055_L3_WATERFALL_BLOCK06_015",
      "N055_L3_WATERFALL_BLOCK06_016",
      "N055_L3_WATERFALL_BLOCK06_017",
      "N055_L3_WATERFALL_BLOCK06_018",
      "N055_L3_WATERFALL_BLOCK06_019",
      "N055_L3_WATERFALL_BLOCK06_020",
      "N055_L3_WATERFALL_BLOCK06_021"
    ]
  },
  {
    "type": "triggerable",
    "image": "057_L3_Waterfall_Block08_020.svg",
    "imageDir": "images/L3",
    "imageWidth": 70,
    "imageHeight": 59,
    "frames": [
      "N057_L3_WATERFALL_BLOCK08_001",
      "N057_L3_WATERFALL_BLOCK08_002",
      "N057_L3_WATERFALL_BLOCK08_003",
      "N057_L3_WATERFALL_BLOCK08_004",
      "N057_L3_WATERFALL_BLOCK08_005",
      "N057_L3_WATERFALL_BLOCK08_006",
      "N057_L3_WATERFALL_BLOCK08_007",
      "N057_L3_WATERFALL_BLOCK08_008",
      "N057_L3_WATERFALL_BLOCK08_009",
      "N057_L3_WATERFALL_BLOCK08_010",
      "N057_L3_WATERFALL_BLOCK08_011",
      "N057_L3_WATERFALL_BLOCK08_012",
      "N057_L3_WATERFALL_BLOCK08_013",
      "N057_L3_WATERFALL_BLOCK08_014",
      "N057_L3_WATERFALL_BLOCK08_015",
      "N057_L3_WATERFALL_BLOCK08_016",
      "N057_L3_WATERFALL_BLOCK08_017",
      "N057_L3_WATERFALL_BLOCK08_018",
      "N057_L3_WATERFALL_BLOCK08_019",
      "N057_L3_WATERFALL_BLOCK08_020"
    ]
  },
  {
    "type": null,
    "image": "072_L3_island01.svg",
    "imageDir": "images/L3",
    "imageWidth": 98,
    "imageHeight": 78,
    "frames": [
      "N072_L3_ISLAND01"
    ]
  },
  {
    "type": null,
    "image": "074_L3_island03.svg",
    "imageDir": "images/L3",
    "imageWidth": 98,
    "imageHeight": 78,
    "frames": [
      "N074_L3_ISLAND03"
    ]
  },
  {
    "type": null,
    "image": "075_L3_island04.svg",
    "imageDir": "images/L3",
    "imageWidth": 98,
    "imageHeight": 188,
    "frames": [
      "N075_L3_ISLAND04"
    ]
  },
  {
    "type": null,
    "image": "076_L3_island05.svg",
    "imageDir": "images/L3",
    "imageWidth": 98,
    "imageHeight": 94,
    "frames": [
      "N076_L3_ISLAND05"
    ]
  },
  {
    "type": null,
    "image": "077_L3_island06.svg",
    "imageDir": "images/L3",
    "imageWidth": 98,
    "imageHeight": 78,
    "frames": [
      "N077_L3_ISLAND06"
    ]
  },
  {
    "type": null,
    "image": "070_L3_WindmillBuilding.svg",
    "imageDir": "images/L3",
    "imageWidth": 146,
    "imageHeight": 271,
    "frames": [
      "N070_L3_WINDMILLBUILDING"
    ]
  },
  {
    "type": null,
    "image": "071_L3_Windmill_Propeller_001.svg",
    "imageDir": "images/L3",
    "imageWidth": 137,
    "imageHeight": 178,
    "frames": [
      "N071_L3_WINDMILL_PROPELLER_001",
      "N071_L3_WINDMILL_PROPELLER_002",
      "N071_L3_WINDMILL_PROPELLER_003",
      "N071_L3_WINDMILL_PROPELLER_004",
      "N071_L3_WINDMILL_PROPELLER_005",
      "N071_L3_WINDMILL_PROPELLER_006",
      "N071_L3_WINDMILL_PROPELLER_007",
      "N071_L3_WINDMILL_PROPELLER_008",
      "N071_L3_WINDMILL_PROPELLER_009",
      "N071_L3_WINDMILL_PROPELLER_010",
      "N071_L3_WINDMILL_PROPELLER_011",
      "N071_L3_WINDMILL_PROPELLER_012",
      "N071_L3_WINDMILL_PROPELLER_013",
      "N071_L3_WINDMILL_PROPELLER_014",
      "N071_L3_WINDMILL_PROPELLER_015",
      "N071_L3_WINDMILL_PROPELLER_016",
      "N071_L3_WINDMILL_PROPELLER_017",
      "N071_L3_WINDMILL_PROPELLER_018",
      "N071_L3_WINDMILL_PROPELLER_019",
      "N071_L3_WINDMILL_PROPELLER_020",
      "N071_L3_WINDMILL_PROPELLER_021",
      "N071_L3_WINDMILL_PROPELLER_022",
      "N071_L3_WINDMILL_PROPELLER_023",
      "N071_L3_WINDMILL_PROPELLER_024",
      "N071_L3_WINDMILL_PROPELLER_025",
      "N071_L3_WINDMILL_PROPELLER_026",
      "N071_L3_WINDMILL_PROPELLER_027",
      "N071_L3_WINDMILL_PROPELLER_028",
      "N071_L3_WINDMILL_PROPELLER_029",
      "N071_L3_WINDMILL_PROPELLER_030",
      "N071_L3_WINDMILL_PROPELLER_031",
      "N071_L3_WINDMILL_PROPELLER_032",
      "N071_L3_WINDMILL_PROPELLER_033",
      "N071_L3_WINDMILL_PROPELLER_034",
      "N071_L3_WINDMILL_PROPELLER_035",
      "N071_L3_WINDMILL_PROPELLER_036",
      "N071_L3_WINDMILL_PROPELLER_037",
      "N071_L3_WINDMILL_PROPELLER_038",
      "N071_L3_WINDMILL_PROPELLER_039",
      "N071_L3_WINDMILL_PROPELLER_040",
      "N071_L3_WINDMILL_PROPELLER_041",
      "N071_L3_WINDMILL_PROPELLER_042",
      "N071_L3_WINDMILL_PROPELLER_043",
      "N071_L3_WINDMILL_PROPELLER_044",
      "N071_L3_WINDMILL_PROPELLER_045",
      "N071_L3_WINDMILL_PROPELLER_046",
      "N071_L3_WINDMILL_PROPELLER_047",
      "N071_L3_WINDMILL_PROPELLER_048"
    ]
  },
  {
    "type": "triggerable",
    "image": "052_L3_Block04_042.svg",
    "imageDir": "images/L3",
    "imageWidth": 111,
    "imageHeight": 73,
    "frames": [
      "N052_L3_BLOCK04_001",
      "N052_L3_BLOCK04_002",
      "N052_L3_BLOCK04_003",
      "N052_L3_BLOCK04_004",
      "N052_L3_BLOCK04_005",
      "N052_L3_BLOCK04_006",
      "N052_L3_BLOCK04_007",
      "N052_L3_BLOCK04_008",
      "N052_L3_BLOCK04_009",
      "N052_L3_BLOCK04_010",
      "N052_L3_BLOCK04_011",
      "N052_L3_BLOCK04_012",
      "N052_L3_BLOCK04_013",
      "N052_L3_BLOCK04_014",
      "N052_L3_BLOCK04_015",
      "N052_L3_BLOCK04_016",
      "N052_L3_BLOCK04_017",
      "N052_L3_BLOCK04_018",
      "N052_L3_BLOCK04_019",
      "N052_L3_BLOCK04_020",
      "N052_L3_BLOCK04_021",
      "N052_L3_BLOCK04_022",
      "N052_L3_BLOCK04_023",
      "N052_L3_BLOCK04_024",
      "N052_L3_BLOCK04_025",
      "N052_L3_BLOCK04_026",
      "N052_L3_BLOCK04_027",
      "N052_L3_BLOCK04_028",
      "N052_L3_BLOCK04_029",
      "N052_L3_BLOCK04_030",
      "N052_L3_BLOCK04_031",
      "N052_L3_BLOCK04_032",
      "N052_L3_BLOCK04_033",
      "N052_L3_BLOCK04_034",
      "N052_L3_BLOCK04_035",
      "N052_L3_BLOCK04_036",
      "N052_L3_BLOCK04_037",
      "N052_L3_BLOCK04_038",
      "N052_L3_BLOCK04_039",
      "N052_L3_BLOCK04_040",
      "N052_L3_BLOCK04_041",
      "N052_L3_BLOCK04_042"
    ]
  },
  {
    "type": "triggerable",
    "image": "080_L3_BirdLoop_001.svg",
    "imageDir": "images/L3",
    "imageWidth": 51,
    "imageHeight": 100,
    "frames": [
      "N080_L3_BIRDLOOP_001",
      "N080_L3_BIRDLOOP_002",
      "N080_L3_BIRDLOOP_003",
      "N080_L3_BIRDLOOP_004",
      "N080_L3_BIRDLOOP_005",
      "N080_L3_BIRDLOOP_006",
      "N080_L3_BIRDLOOP_007",
      "N080_L3_BIRDLOOP_008",
      "N080_L3_BIRDLOOP_009",
      "N080_L3_BIRDLOOP_010",
      "N080_L3_BIRDLOOP_011",
      "N080_L3_BIRDLOOP_012",
      "N080_L3_BIRDLOOP_013",
      "N080_L3_BIRDLOOP_014",
      "N080_L3_BIRDLOOP_015",
      "N080_L3_BIRDLOOP_016",
      "N080_L3_BIRDLOOP_017",
      "N080_L3_BIRDLOOP_018",
      "N080_L3_BIRDLOOP_019",
      "N080_L3_BIRDLOOP_020",
      "N080_L3_BIRDLOOP_021",
      "N080_L3_BIRDLOOP_022",
      "N080_L3_BIRDLOOP_023",
      "N080_L3_BIRDLOOP_024",
      "N080_L3_BIRDLOOP_025",
      "N080_L3_BIRDLOOP_026",
      "N080_L3_BIRDLOOP_027",
      "N080_L3_BIRDLOOP_028",
      "N080_L3_BIRDLOOP_029",
      "N080_L3_BIRDLOOP_030",
      "N080_L3_BIRDLOOP_031",
      "N080_L3_BIRDLOOP_032",
      "N080_L3_BIRDLOOP_033",
      "N080_L3_BIRDLOOP_034",
      "N080_L3_BIRDLOOP_035",
      "N080_L3_BIRDLOOP_036",
      "N080_L3_BIRDLOOP_037",
      "N080_L3_BIRDLOOP_038",
      "N080_L3_BIRDLOOP_039",
      "N080_L3_BIRDLOOP_040",
      "N080_L3_BIRDLOOP_041",
      "N080_L3_BIRDLOOP_042",
      "N080_L3_BIRDLOOP_043",
      "N080_L3_BIRDLOOP_044",
      "N080_L3_BIRDLOOP_045",
      "N080_L3_BIRDLOOP_046",
      "N080_L3_BIRDLOOP_047",
      "N080_L3_BIRDLOOP_048",
      "N080_L3_BIRDLOOP_049",
      "N080_L3_BIRDLOOP_050",
      "N080_L3_BIRDLOOP_051",
      "N080_L3_BIRDLOOP_052",
      "N080_L3_BIRDLOOP_053",
      "N080_L3_BIRDLOOP_054",
      "N080_L3_BIRDLOOP_055",
      "N080_L3_BIRDLOOP_056",
      "N080_L3_BIRDLOOP_057",
      "N080_L3_BIRDLOOP_058",
      "N080_L3_BIRDLOOP_059",
      "N080_L3_BIRDLOOP_060",
      "N080_L3_BIRDLOOP_061",
      "N080_L3_BIRDLOOP_062",
      "N080_L3_BIRDLOOP_063",
      "N080_L3_BIRDLOOP_064",
      "N080_L3_BIRDLOOP_065"
    ]
  },
  {
    "type": null,
    "image": "078_L3_Leaves_001.svg",
    "imageDir": "images/L3",
    "imageWidth": 86,
    "imageHeight": 78,
    "frames": [
      "N078_L3_LEAVES_001",
      "N078_L3_LEAVES_002",
      "N078_L3_LEAVES_003",
      "N078_L3_LEAVES_004",
      "N078_L3_LEAVES_005",
      "N078_L3_LEAVES_006",
      "N078_L3_LEAVES_007",
      "N078_L3_LEAVES_008",
      "N078_L3_LEAVES_009",
      "N078_L3_LEAVES_010",
      "N078_L3_LEAVES_011",
      "N078_L3_LEAVES_012",
      "N078_L3_LEAVES_013",
      "N078_L3_LEAVES_014",
      "N078_L3_LEAVES_015",
      "N078_L3_LEAVES_016",
      "N078_L3_LEAVES_017",
      "N078_L3_LEAVES_018",
      "N078_L3_LEAVES_019",
      "N078_L3_LEAVES_020",
      "N078_L3_LEAVES_021",
      "N078_L3_LEAVES_022",
      "N078_L3_LEAVES_023"
    ]
  },
  {
    "type": "cloud",
    "image": "066_L3_Cloud01.svg",
    "imageDir": "images/L3",
    "imageWidth": 52,
    "imageHeight": 40,
    "frames": [
      "N066_L3_CLOUD01"
    ]
  },
  {
    "type": "cloud",
    "image": "067_L3_Cloud02.svg",
    "imageDir": "images/L3",
    "imageWidth": 101,
    "imageHeight": 67,
    "frames": [
      "N067_L3_CLOUD02"
    ]
  },
  {
    "type": "cloud",
    "image": "068_L3_Cloud03.svg",
    "imageDir": "images/L3",
    "imageWidth": 62,
    "imageHeight": 54,
    "frames": [
      "N068_L3_CLOUD03"
    ]
  },
  {
    "type": "cloud",
    "image": "069_L3_Cloud04.svg",
    "imageDir": "images/L3",
    "imageWidth": 122,
    "imageHeight": 95,
    "frames": [
      "N069_L3_CLOUD04"
    ]
  },
  {
    "type": "passable",
    "image": "063_L3_Tile06_013.svg",
    "imageDir": "images/L3",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N063_L3_TILE06_013"
    ]
  },
  {
    "type": "passable",
    "image": "064_L3_Tile07_009.svg",
    "imageDir": "images/L3",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N064_L3_TILE07_009"
    ]
  },
  {
    "type": "passable",
    "image": "065_L3_Tile08_010.svg",
    "imageDir": "images/L3",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N065_L3_TILE08_010"
    ]
  },
  {
    "type": "passable",
    "image": "062_L3_Tile05_012.svg",
    "imageDir": "images/L3",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N062_L3_TILE05_012"
    ]
  },
  {
    "type": "triggerable",
    "image": "054_L3_Waterfall_Block05_020.svg",
    "imageDir": "images/L3",
    "imageWidth": 91,
    "imageHeight": 77,
    "frames": [
      "N054_L3_WATERFALL_BLOCK05_001",
      "N054_L3_WATERFALL_BLOCK05_002",
      "N054_L3_WATERFALL_BLOCK05_003",
      "N054_L3_WATERFALL_BLOCK05_004",
      "N054_L3_WATERFALL_BLOCK05_005",
      "N054_L3_WATERFALL_BLOCK05_006",
      "N054_L3_WATERFALL_BLOCK05_007",
      "N054_L3_WATERFALL_BLOCK05_008",
      "N054_L3_WATERFALL_BLOCK05_009",
      "N054_L3_WATERFALL_BLOCK05_010",
      "N054_L3_WATERFALL_BLOCK05_011",
      "N054_L3_WATERFALL_BLOCK05_012",
      "N054_L3_WATERFALL_BLOCK05_013",
      "N054_L3_WATERFALL_BLOCK05_014",
      "N054_L3_WATERFALL_BLOCK05_015",
      "N054_L3_WATERFALL_BLOCK05_016",
      "N054_L3_WATERFALL_BLOCK05_017",
      "N054_L3_WATERFALL_BLOCK05_018",
      "N054_L3_WATERFALL_BLOCK05_019",
      "N054_L3_WATERFALL_BLOCK05_020"
    ]
  },
  {
    "type": "passable",
    "image": "111_L4_Tile13_007.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N111_L4_TILE13_007"
    ]
  },
  {
    "type": "passable",
    "image": "110_L4_Tile12_012.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N110_L4_TILE12_012"
    ]
  },
  {
    "type": "passable",
    "image": "109_L4_Tile11_010.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N109_L4_TILE11_010"
    ]
  },
  {
    "type": "passable",
    "image": "107_L4_Tile09_013.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N107_L4_TILE09_013"
    ]
  },
  {
    "type": "passable",
    "image": "106_L4_Tile08_010.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N106_L4_TILE08_010"
    ]
  },
  {
    "type": "passable",
    "image": "105_L4_Tile07_009.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N105_L4_TILE07_009"
    ]
  },
  {
    "type": "passable",
    "image": "101_L4_Tile03_007.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N101_L4_TILE03_007"
    ]
  },
  {
    "type": "passable",
    "image": "099_L4_Tile01_002.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 128,
    "frames": [
      "N099_L4_TILE01_002"
    ]
  },
  {
    "type": "cloud",
    "image": "093_L4_Cloud01.svg",
    "imageDir": "images/L4",
    "imageWidth": 110,
    "imageHeight": 78,
    "frames": [
      "N093_L4_CLOUD01"
    ]
  },
  {
    "type": "cloud",
    "image": "094_L4_CLoud02.svg",
    "imageDir": "images/L4",
    "imageWidth": 130,
    "imageHeight": 66,
    "frames": [
      "N094_L4_CLOUD02"
    ]
  },
  {
    "type": "cloud",
    "image": "095_L4_Cloud03.svg",
    "imageDir": "images/L4",
    "imageWidth": 84,
    "imageHeight": 62,
    "frames": [
      "N095_L4_CLOUD03"
    ]
  },
  {
    "type": null,
    "image": "096_L4_Owl_Tree.svg",
    "imageDir": "images/L4",
    "imageWidth": 140,
    "imageHeight": 190,
    "frames": [
      "N096_L4_OWL_TREE"
    ]
  },
  {
    "type": null,
    "image": "097_L4_Squirrel_Tree.svg",
    "imageDir": "images/L4",
    "imageWidth": 144,
    "imageHeight": 346,
    "frames": [
      "N097_L4_SQUIRREL_TREE"
    ]
  },
  {
    "type": "unpassable",
    "image": "098_L4_Water.svg",
    "imageDir": "images/tile",
    "imageWidth": 128,
    "imageHeight": 108,
    "frames": [
      "N098_L4_WATER"
    ]
  },
  {
    "type": null,
    "image": "130_L4_Owl_Head_011.svg",
    "imageDir": "images/L4",
    "imageWidth": 92,
    "imageHeight": 83,
    "frames": [
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_004",
      "N130_L4_OWL_HEAD_005",
      "N130_L4_OWL_HEAD_006",
      "N130_L4_OWL_HEAD_007",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_012",
      "N130_L4_OWL_HEAD_013",
      "N130_L4_OWL_HEAD_014",
      "N130_L4_OWL_HEAD_015",
      "N130_L4_OWL_HEAD_014",
      "N130_L4_OWL_HEAD_013",
      "N130_L4_OWL_HEAD_012",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_019",
      "N130_L4_OWL_HEAD_020",
      "N130_L4_OWL_HEAD_019",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_028",
      "N130_L4_OWL_HEAD_029",
      "N130_L4_OWL_HEAD_030",
      "N130_L4_OWL_HEAD_031",
      "N130_L4_OWL_HEAD_032",
      "N130_L4_OWL_HEAD_033",
      "N130_L4_OWL_HEAD_034",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_037",
      "N130_L4_OWL_HEAD_038",
      "N130_L4_OWL_HEAD_037",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_037",
      "N130_L4_OWL_HEAD_038",
      "N130_L4_OWL_HEAD_037",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_035",
      "N130_L4_OWL_HEAD_034",
      "N130_L4_OWL_HEAD_033",
      "N130_L4_OWL_HEAD_032",
      "N130_L4_OWL_HEAD_031",
      "N130_L4_OWL_HEAD_030",
      "N130_L4_OWL_HEAD_029",
      "N130_L4_OWL_HEAD_028",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_019",
      "N130_L4_OWL_HEAD_020",
      "N130_L4_OWL_HEAD_019",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_019",
      "N130_L4_OWL_HEAD_020",
      "N130_L4_OWL_HEAD_019",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_011",
      "N130_L4_OWL_HEAD_007",
      "N130_L4_OWL_HEAD_006",
      "N130_L4_OWL_HEAD_005",
      "N130_L4_OWL_HEAD_004",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001",
      "N130_L4_OWL_HEAD_001"
    ]
  },
  {
    "type": "triggerable",
    "image": "116_L4_Block03_Mole_057.svg",
    "imageDir": "images/L4",
    "imageWidth": 78,
    "imageHeight": 115,
    "frames": [
      "N116_L4_BLOCK03_MOLE_001",
      "N116_L4_BLOCK03_MOLE_002",
      "N116_L4_BLOCK03_MOLE_003",
      "N116_L4_BLOCK03_MOLE_004",
      "N116_L4_BLOCK03_MOLE_005",
      "N116_L4_BLOCK03_MOLE_006",
      "N116_L4_BLOCK03_MOLE_007",
      "N116_L4_BLOCK03_MOLE_008",
      "N116_L4_BLOCK03_MOLE_009",
      "N116_L4_BLOCK03_MOLE_010",
      "N116_L4_BLOCK03_MOLE_011",
      "N116_L4_BLOCK03_MOLE_012",
      "N116_L4_BLOCK03_MOLE_013",
      "N116_L4_BLOCK03_MOLE_014",
      "N116_L4_BLOCK03_MOLE_015",
      "N116_L4_BLOCK03_MOLE_016",
      "N116_L4_BLOCK03_MOLE_017",
      "N116_L4_BLOCK03_MOLE_018",
      "N116_L4_BLOCK03_MOLE_019",
      "N116_L4_BLOCK03_MOLE_020",
      "N116_L4_BLOCK03_MOLE_021",
      "N116_L4_BLOCK03_MOLE_022",
      "N116_L4_BLOCK03_MOLE_023",
      "N116_L4_BLOCK03_MOLE_024",
      "N116_L4_BLOCK03_MOLE_025",
      "N116_L4_BLOCK03_MOLE_026",
      "N116_L4_BLOCK03_MOLE_027",
      "N116_L4_BLOCK03_MOLE_028",
      "N116_L4_BLOCK03_MOLE_029",
      "N116_L4_BLOCK03_MOLE_030",
      "N116_L4_BLOCK03_MOLE_031",
      "N116_L4_BLOCK03_MOLE_032",
      "N116_L4_BLOCK03_MOLE_033",
      "N116_L4_BLOCK03_MOLE_034",
      "N116_L4_BLOCK03_MOLE_035",
      "N116_L4_BLOCK03_MOLE_036",
      "N116_L4_BLOCK03_MOLE_037",
      "N116_L4_BLOCK03_MOLE_038",
      "N116_L4_BLOCK03_MOLE_039",
      "N116_L4_BLOCK03_MOLE_040",
      "N116_L4_BLOCK03_MOLE_041",
      "N116_L4_BLOCK03_MOLE_042",
      "N116_L4_BLOCK03_MOLE_043",
      "N116_L4_BLOCK03_MOLE_044",
      "N116_L4_BLOCK03_MOLE_045",
      "N116_L4_BLOCK03_MOLE_046",
      "N116_L4_BLOCK03_MOLE_047",
      "N116_L4_BLOCK03_MOLE_048",
      "N116_L4_BLOCK03_MOLE_049",
      "N116_L4_BLOCK03_MOLE_050",
      "N116_L4_BLOCK03_MOLE_051",
      "N116_L4_BLOCK03_MOLE_052",
      "N116_L4_BLOCK03_MOLE_053",
      "N116_L4_BLOCK03_MOLE_054",
      "N116_L4_BLOCK03_MOLE_055",
      "N116_L4_BLOCK03_MOLE_056",
      "N116_L4_BLOCK03_MOLE_057"
    ]
  },
  {
    "type": "triggerable",
    "image": "117_L4_Block04_Flower_015.svg",
    "imageDir": "images/L4L5",
    "imageWidth": 92,
    "imageHeight": 50,
    "frames": [
      "N117_L4_BLOCK04_FLOWER_001",
      "N117_L4_BLOCK04_FLOWER_002",
      "N117_L4_BLOCK04_FLOWER_003",
      "N117_L4_BLOCK04_FLOWER_004",
      "N117_L4_BLOCK04_FLOWER_005",
      "N117_L4_BLOCK04_FLOWER_006",
      "N117_L4_BLOCK04_FLOWER_007",
      "N117_L4_BLOCK04_FLOWER_008",
      "N117_L4_BLOCK04_FLOWER_009",
      "N117_L4_BLOCK04_FLOWER_010",
      "N117_L4_BLOCK04_FLOWER_011",
      "N117_L4_BLOCK04_FLOWER_012",
      "N117_L4_BLOCK04_FLOWER_013",
      "N117_L4_BLOCK04_FLOWER_014",
      "N117_L4_BLOCK04_FLOWER_015"
    ]
  },
  {
    "type": "triggerable",
    "image": "118_L4_Block05_Logs_23.svg",
    "imageDir": "images/L4",
    "imageWidth": 58,
    "imageHeight": 86,
    "frames": [
      "N118_L4_BLOCK05_LOGS_0",
      "N118_L4_BLOCK05_LOGS_1",
      "N118_L4_BLOCK05_LOGS_2",
      "N118_L4_BLOCK05_LOGS_3",
      "N118_L4_BLOCK05_LOGS_4",
      "N118_L4_BLOCK05_LOGS_5",
      "N118_L4_BLOCK05_LOGS_6",
      "N118_L4_BLOCK05_LOGS_7",
      "N118_L4_BLOCK05_LOGS_8",
      "N118_L4_BLOCK05_LOGS_9",
      "N118_L4_BLOCK05_LOGS_10",
      "N118_L4_BLOCK05_LOGS_11",
      "N118_L4_BLOCK05_LOGS_12",
      "N118_L4_BLOCK05_LOGS_13",
      "N118_L4_BLOCK05_LOGS_14",
      "N118_L4_BLOCK05_LOGS_15",
      "N118_L4_BLOCK05_LOGS_16",
      "N118_L4_BLOCK05_LOGS_17",
      "N118_L4_BLOCK05_LOGS_18",
      "N118_L4_BLOCK05_LOGS_19",
      "N118_L4_BLOCK05_LOGS_20",
      "N118_L4_BLOCK05_LOGS_21",
      "N118_L4_BLOCK05_LOGS_22",
      "N118_L4_BLOCK05_LOGS_23"
    ]
  },
  {
    "type": "triggerable",
    "image": "119_L4_Block06_Flower_018.svg",
    "imageDir": "images/L4",
    "imageWidth": 91,
    "imageHeight": 63,
    "frames": [
      "N119_L4_BLOCK06_FLOWER_001",
      "N119_L4_BLOCK06_FLOWER_002",
      "N119_L4_BLOCK06_FLOWER_003",
      "N119_L4_BLOCK06_FLOWER_004",
      "N119_L4_BLOCK06_FLOWER_005",
      "N119_L4_BLOCK06_FLOWER_006",
      "N119_L4_BLOCK06_FLOWER_007",
      "N119_L4_BLOCK06_FLOWER_008",
      "N119_L4_BLOCK06_FLOWER_009",
      "N119_L4_BLOCK06_FLOWER_010",
      "N119_L4_BLOCK06_FLOWER_011",
      "N119_L4_BLOCK06_FLOWER_012",
      "N119_L4_BLOCK06_FLOWER_013",
      "N119_L4_BLOCK06_FLOWER_014",
      "N119_L4_BLOCK06_FLOWER_015",
      "N119_L4_BLOCK06_FLOWER_016",
      "N119_L4_BLOCK06_FLOWER_017",
      "N119_L4_BLOCK06_FLOWER_018"
    ]
  },
  {
    "type": "triggerable",
    "image": "123_L4_Block10_Flower_Tree_020.svg",
    "imageDir": "images/L4L6",
    "imageWidth": 60,
    "imageHeight": 175,
    "frames": [
      "N123_L4_BLOCK10_FLOWER_TREE_001",
      "N123_L4_BLOCK10_FLOWER_TREE_002",
      "N123_L4_BLOCK10_FLOWER_TREE_003",
      "N123_L4_BLOCK10_FLOWER_TREE_004",
      "N123_L4_BLOCK10_FLOWER_TREE_005",
      "N123_L4_BLOCK10_FLOWER_TREE_006",
      "N123_L4_BLOCK10_FLOWER_TREE_007",
      "N123_L4_BLOCK10_FLOWER_TREE_008",
      "N123_L4_BLOCK10_FLOWER_TREE_009",
      "N123_L4_BLOCK10_FLOWER_TREE_010",
      "N123_L4_BLOCK10_FLOWER_TREE_011",
      "N123_L4_BLOCK10_FLOWER_TREE_012",
      "N123_L4_BLOCK10_FLOWER_TREE_013",
      "N123_L4_BLOCK10_FLOWER_TREE_014",
      "N123_L4_BLOCK10_FLOWER_TREE_015",
      "N123_L4_BLOCK10_FLOWER_TREE_016",
      "N123_L4_BLOCK10_FLOWER_TREE_017",
      "N123_L4_BLOCK10_FLOWER_TREE_018",
      "N123_L4_BLOCK10_FLOWER_TREE_019",
      "N123_L4_BLOCK10_FLOWER_TREE_020"
    ]
  },
  {
    "type": "triggerable",
    "image": "125_L4_Block11_Pond_024.svg",
    "imageDir": "images/L4L6",
    "imageWidth": 68,
    "imageHeight": 77,
    "frames": [
      "N125_L4_BLOCK11_POND_001",
      "N125_L4_BLOCK11_POND_002",
      "N125_L4_BLOCK11_POND_003",
      "N125_L4_BLOCK11_POND_004",
      "N125_L4_BLOCK11_POND_005",
      "N125_L4_BLOCK11_POND_006",
      "N125_L4_BLOCK11_POND_007",
      "N125_L4_BLOCK11_POND_008",
      "N125_L4_BLOCK11_POND_009",
      "N125_L4_BLOCK11_POND_010",
      "N125_L4_BLOCK11_POND_011",
      "N125_L4_BLOCK11_POND_012",
      "N125_L4_BLOCK11_POND_013",
      "N125_L4_BLOCK11_POND_014",
      "N125_L4_BLOCK11_POND_015",
      "N125_L4_BLOCK11_POND_016",
      "N125_L4_BLOCK11_POND_017",
      "N125_L4_BLOCK11_POND_018",
      "N125_L4_BLOCK11_POND_019",
      "N125_L4_BLOCK11_POND_020",
      "N125_L4_BLOCK11_POND_021",
      "N125_L4_BLOCK11_POND_022",
      "N125_L4_BLOCK11_POND_023",
      "N125_L4_BLOCK11_POND_024"
    ]
  },
  {
    "type": "triggerable",
    "image": "127_L4_Block13_Flower010.svg",
    "imageDir": "images/L4",
    "imageWidth": 59,
    "imageHeight": 62,
    "frames": [
      "N127_L4_BLOCK13_FLOWER001",
      "N127_L4_BLOCK13_FLOWER002",
      "N127_L4_BLOCK13_FLOWER003",
      "N127_L4_BLOCK13_FLOWER004",
      "N127_L4_BLOCK13_FLOWER005",
      "N127_L4_BLOCK13_FLOWER006",
      "N127_L4_BLOCK13_FLOWER007",
      "N127_L4_BLOCK13_FLOWER008",
      "N127_L4_BLOCK13_FLOWER009",
      "N127_L4_BLOCK13_FLOWER010"
    ]
  },
  {
    "type": "triggerable",
    "image": "128_L4_Block14_Flower_Tree_021.svg",
    "imageDir": "images/L4L6",
    "imageWidth": 60,
    "imageHeight": 167,
    "frames": [
      "N128_L4_BLOCK14_FLOWER_TREE_001",
      "N128_L4_BLOCK14_FLOWER_TREE_002",
      "N128_L4_BLOCK14_FLOWER_TREE_003",
      "N128_L4_BLOCK14_FLOWER_TREE_004",
      "N128_L4_BLOCK14_FLOWER_TREE_005",
      "N128_L4_BLOCK14_FLOWER_TREE_006",
      "N128_L4_BLOCK14_FLOWER_TREE_007",
      "N128_L4_BLOCK14_FLOWER_TREE_008",
      "N128_L4_BLOCK14_FLOWER_TREE_009",
      "N128_L4_BLOCK14_FLOWER_TREE_010",
      "N128_L4_BLOCK14_FLOWER_TREE_011",
      "N128_L4_BLOCK14_FLOWER_TREE_012",
      "N128_L4_BLOCK14_FLOWER_TREE_013",
      "N128_L4_BLOCK14_FLOWER_TREE_014",
      "N128_L4_BLOCK14_FLOWER_TREE_015",
      "N128_L4_BLOCK14_FLOWER_TREE_016",
      "N128_L4_BLOCK14_FLOWER_TREE_017",
      "N128_L4_BLOCK14_FLOWER_TREE_018",
      "N128_L4_BLOCK14_FLOWER_TREE_019",
      "N128_L4_BLOCK14_FLOWER_TREE_020",
      "N128_L4_BLOCK14_FLOWER_TREE_021"
    ]
  },
  {
    "type": null,
    "image": "129_L4_Squirrel_018.svg",
    "imageDir": "images/L4",
    "imageWidth": 59,
    "imageHeight": 111,
    "frames": [
      "N129_L4_SQUIRREL_001",
      "N129_L4_SQUIRREL_002",
      "N129_L4_SQUIRREL_003",
      "N129_L4_SQUIRREL_004",
      "N129_L4_SQUIRREL_005",
      "N129_L4_SQUIRREL_006",
      "N129_L4_SQUIRREL_007",
      "N129_L4_SQUIRREL_008",
      "N129_L4_SQUIRREL_009",
      "N129_L4_SQUIRREL_010",
      "N129_L4_SQUIRREL_011",
      "N129_L4_SQUIRREL_012",
      "N129_L4_SQUIRREL_005",
      "N129_L4_SQUIRREL_006",
      "N129_L4_SQUIRREL_007",
      "N129_L4_SQUIRREL_008",
      "N129_L4_SQUIRREL_009",
      "N129_L4_SQUIRREL_010",
      "N129_L4_SQUIRREL_011",
      "N129_L4_SQUIRREL_012",
      "N129_L4_SQUIRREL_005",
      "N129_L4_SQUIRREL_006",
      "N129_L4_SQUIRREL_007",
      "N129_L4_SQUIRREL_008",
      "N129_L4_SQUIRREL_009",
      "N129_L4_SQUIRREL_010",
      "N129_L4_SQUIRREL_011",
      "N129_L4_SQUIRREL_012",
      "N129_L4_SQUIRREL_013",
      "N129_L4_SQUIRREL_014",
      "N129_L4_SQUIRREL_015",
      "N129_L4_SQUIRREL_016",
      "N129_L4_SQUIRREL_017",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018",
      "N129_L4_SQUIRREL_018"
    ]
  },
  {
    "type": "triggerable",
    "image": "115_L4_Block02_08_Flower_16.svg",
    "imageDir": "images/L4",
    "imageWidth": 65,
    "imageHeight": 33,
    "frames": [
      "N115_L4_BLOCK02_08_FLOWER_0",
      "N115_L4_BLOCK02_08_FLOWER_1",
      "N115_L4_BLOCK02_08_FLOWER_2",
      "N115_L4_BLOCK02_08_FLOWER_3",
      "N115_L4_BLOCK02_08_FLOWER_4",
      "N115_L4_BLOCK02_08_FLOWER_5",
      "N115_L4_BLOCK02_08_FLOWER_6",
      "N115_L4_BLOCK02_08_FLOWER_7",
      "N115_L4_BLOCK02_08_FLOWER_8",
      "N115_L4_BLOCK02_08_FLOWER_9",
      "N115_L4_BLOCK02_08_FLOWER_10",
      "N115_L4_BLOCK02_08_FLOWER_11",
      "N115_L4_BLOCK02_08_FLOWER_12",
      "N115_L4_BLOCK02_08_FLOWER_13",
      "N115_L4_BLOCK02_08_FLOWER_14",
      "N115_L4_BLOCK02_08_FLOWER_15",
      "N115_L4_BLOCK02_08_FLOWER_16"
    ]
  },
  {
    "type": "triggerable",
    "image": "121_L4_Block09_15_Mush01_014.svg",
    "imageDir": "images/L4",
    "imageWidth": 37,
    "imageHeight": 57,
    "frames": [
      "N121_L4_BLOCK09_15_MUSH01_001",
      "N121_L4_BLOCK09_15_MUSH01_002",
      "N121_L4_BLOCK09_15_MUSH01_003",
      "N121_L4_BLOCK09_15_MUSH01_004",
      "N121_L4_BLOCK09_15_MUSH01_005",
      "N121_L4_BLOCK09_15_MUSH01_006",
      "N121_L4_BLOCK09_15_MUSH01_007",
      "N121_L4_BLOCK09_15_MUSH01_008",
      "N121_L4_BLOCK09_15_MUSH01_009",
      "N121_L4_BLOCK09_15_MUSH01_010",
      "N121_L4_BLOCK09_15_MUSH01_011",
      "N121_L4_BLOCK09_15_MUSH01_012",
      "N121_L4_BLOCK09_15_MUSH01_013",
      "N121_L4_BLOCK09_15_MUSH01_014"
    ]
  },
  {
    "type": "triggerable",
    "image": "122_L4_Block09_15_Mush02_014.svg",
    "imageDir": "images/L4",
    "imageWidth": 19,
    "imageHeight": 25,
    "frames": [
      "N122_L4_BLOCK09_15_MUSH02_001",
      "N122_L4_BLOCK09_15_MUSH02_002",
      "N122_L4_BLOCK09_15_MUSH02_003",
      "N122_L4_BLOCK09_15_MUSH02_004",
      "N122_L4_BLOCK09_15_MUSH02_005",
      "N122_L4_BLOCK09_15_MUSH02_006",
      "N122_L4_BLOCK09_15_MUSH02_007",
      "N122_L4_BLOCK09_15_MUSH02_008",
      "N122_L4_BLOCK09_15_MUSH02_009",
      "N122_L4_BLOCK09_15_MUSH02_010",
      "N122_L4_BLOCK09_15_MUSH02_011",
      "N122_L4_BLOCK09_15_MUSH02_012",
      "N122_L4_BLOCK09_15_MUSH02_013",
      "N122_L4_BLOCK09_15_MUSH02_014"
    ]
  },
  {
    "type": "triggerable",
    "image": "124_L4_Fish_001.svg",
    "imageDir": "images/L4L6",
    "imageWidth": 97,
    "imageHeight": 94,
    "frames": [
      "N124_L4_FISH_001",
      "N124_L4_FISH_002",
      "N124_L4_FISH_003",
      "N124_L4_FISH_004",
      "N124_L4_FISH_005",
      "N124_L4_FISH_006",
      "N124_L4_FISH_007",
      "N124_L4_FISH_008",
      "N124_L4_FISH_009",
      "N124_L4_FISH_010",
      "N124_L4_FISH_011",
      "N124_L4_FISH_012",
      "N124_L4_FISH_013",
      "N124_L4_FISH_014",
      "N124_L4_FISH_015",
      "N124_L4_FISH_016",
      "N124_L4_FISH_017",
      "N124_L4_FISH_018",
      "N124_L4_FISH_019",
      "N124_L4_FISH_020",
      "N124_L4_FISH_021",
      "N124_L4_FISH_022",
      "N124_L4_FISH_023",
      "N124_L4_FISH_024",
      "N124_L4_FISH_025",
      "N124_L4_FISH_026",
      "N124_L4_FISH_027",
      "N124_L4_FISH_028",
      "N124_L4_FISH_029",
      "N124_L4_FISH_030",
      "N124_L4_FISH_031",
      "N124_L4_FISH_032",
      "N124_L4_FISH_033",
      "N124_L4_FISH_034"
    ]
  },
  {
    "type": "triggerable",
    "image": "126_L4_Block11_Deco_014.svg",
    "imageDir": "images/L4",
    "imageWidth": 59,
    "imageHeight": 12,
    "frames": [
      "N126_L4_BLOCK11_DECO_001",
      "N126_L4_BLOCK11_DECO_002",
      "N126_L4_BLOCK11_DECO_003",
      "N126_L4_BLOCK11_DECO_004",
      "N126_L4_BLOCK11_DECO_005",
      "N126_L4_BLOCK11_DECO_006",
      "N126_L4_BLOCK11_DECO_007",
      "N126_L4_BLOCK11_DECO_008",
      "N126_L4_BLOCK11_DECO_009",
      "N126_L4_BLOCK11_DECO_010",
      "N126_L4_BLOCK11_DECO_011",
      "N126_L4_BLOCK11_DECO_012",
      "N126_L4_BLOCK11_DECO_013",
      "N126_L4_BLOCK11_DECO_014"
    ]
  },
  {
    "type": "triggerable",
    "image": "120_L4_Block07_Flower_045.svg",
    "imageDir": "images/L4L5",
    "imageWidth": 93,
    "imageHeight": 85,
    "frames": [
      "N120_L4_BLOCK07_FLOWER_001",
      "N120_L4_BLOCK07_FLOWER_002",
      "N120_L4_BLOCK07_FLOWER_003",
      "N120_L4_BLOCK07_FLOWER_004",
      "N120_L4_BLOCK07_FLOWER_005",
      "N120_L4_BLOCK07_FLOWER_006",
      "N120_L4_BLOCK07_FLOWER_007",
      "N120_L4_BLOCK07_FLOWER_008",
      "N120_L4_BLOCK07_FLOWER_009",
      "N120_L4_BLOCK07_FLOWER_010",
      "N120_L4_BLOCK07_FLOWER_011",
      "N120_L4_BLOCK07_FLOWER_012",
      "N120_L4_BLOCK07_FLOWER_013",
      "N120_L4_BLOCK07_FLOWER_014",
      "N120_L4_BLOCK07_FLOWER_015",
      "N120_L4_BLOCK07_FLOWER_016",
      "N120_L4_BLOCK07_FLOWER_017",
      "N120_L4_BLOCK07_FLOWER_018",
      "N120_L4_BLOCK07_FLOWER_019",
      "N120_L4_BLOCK07_FLOWER_020",
      "N120_L4_BLOCK07_FLOWER_021",
      "N120_L4_BLOCK07_FLOWER_022",
      "N120_L4_BLOCK07_FLOWER_023",
      "N120_L4_BLOCK07_FLOWER_024",
      "N120_L4_BLOCK07_FLOWER_025",
      "N120_L4_BLOCK07_FLOWER_026",
      "N120_L4_BLOCK07_FLOWER_027",
      "N120_L4_BLOCK07_FLOWER_028",
      "N120_L4_BLOCK07_FLOWER_029",
      "N120_L4_BLOCK07_FLOWER_030",
      "N120_L4_BLOCK07_FLOWER_031",
      "N120_L4_BLOCK07_FLOWER_032",
      "N120_L4_BLOCK07_FLOWER_033",
      "N120_L4_BLOCK07_FLOWER_034",
      "N120_L4_BLOCK07_FLOWER_035",
      "N120_L4_BLOCK07_FLOWER_036",
      "N120_L4_BLOCK07_FLOWER_037",
      "N120_L4_BLOCK07_FLOWER_038",
      "N120_L4_BLOCK07_FLOWER_039",
      "N120_L4_BLOCK07_FLOWER_040",
      "N120_L4_BLOCK07_FLOWER_041",
      "N120_L4_BLOCK07_FLOWER_042",
      "N120_L4_BLOCK07_FLOWER_043",
      "N120_L4_BLOCK07_FLOWER_044",
      "N120_L4_BLOCK07_FLOWER_045"
    ]
  },
  {
    "type": "cloud",
    "image": "131_L5_Cloud01.svg",
    "imageDir": "images/L5",
    "imageWidth": 102,
    "imageHeight": 100,
    "frames": [
      "N131_L5_CLOUD01"
    ]
  },
  {
    "type": "cloud",
    "image": "132_L5_Cloud02.svg",
    "imageDir": "images/L5",
    "imageWidth": 101,
    "imageHeight": 70,
    "frames": [
      "N132_L5_CLOUD02"
    ]
  },
  {
    "type": "cloud",
    "image": "133_L5_Cloud03.svg",
    "imageDir": "images/L5",
    "imageWidth": 55,
    "imageHeight": 44,
    "frames": [
      "N133_L5_CLOUD03"
    ]
  },
  {
    "type": "cloud",
    "image": "134_L5_Cloud04.svg",
    "imageDir": "images/L5",
    "imageWidth": 167,
    "imageHeight": 101,
    "frames": [
      "N134_L5_CLOUD04"
    ]
  },
  {
    "type": "cloud",
    "image": "135_L5_Cloud05.svg",
    "imageDir": "images/L5",
    "imageWidth": 90,
    "imageHeight": 110,
    "frames": [
      "N135_L5_CLOUD05"
    ]
  },
  {
    "type": "triggerable",
    "image": "158_L5_Block01_FloorDeco_017.svg",
    "imageDir": "images/L5",
    "imageWidth": 70,
    "imageHeight": 34,
    "frames": [
      "N158_L5_BLOCK01_FLOORDECO_001",
      "N158_L5_BLOCK01_FLOORDECO_002",
      "N158_L5_BLOCK01_FLOORDECO_003",
      "N158_L5_BLOCK01_FLOORDECO_004",
      "N158_L5_BLOCK01_FLOORDECO_005",
      "N158_L5_BLOCK01_FLOORDECO_006",
      "N158_L5_BLOCK01_FLOORDECO_007",
      "N158_L5_BLOCK01_FLOORDECO_008",
      "N158_L5_BLOCK01_FLOORDECO_009",
      "N158_L5_BLOCK01_FLOORDECO_010",
      "N158_L5_BLOCK01_FLOORDECO_011",
      "N158_L5_BLOCK01_FLOORDECO_012",
      "N158_L5_BLOCK01_FLOORDECO_013",
      "N158_L5_BLOCK01_FLOORDECO_014",
      "N158_L5_BLOCK01_FLOORDECO_015",
      "N158_L5_BLOCK01_FLOORDECO_016",
      "N158_L5_BLOCK01_FLOORDECO_017"
    ]
  },
  {
    "type": "triggerable",
    "image": "167_L5_Block10_FloorDeco_012.svg",
    "imageDir": "images/L5",
    "imageWidth": 70,
    "imageHeight": 35,
    "frames": [
      "N167_L5_BLOCK10_FLOORDECO_001",
      "N167_L5_BLOCK10_FLOORDECO_002",
      "N167_L5_BLOCK10_FLOORDECO_003",
      "N167_L5_BLOCK10_FLOORDECO_004",
      "N167_L5_BLOCK10_FLOORDECO_005",
      "N167_L5_BLOCK10_FLOORDECO_006",
      "N167_L5_BLOCK10_FLOORDECO_007",
      "N167_L5_BLOCK10_FLOORDECO_008",
      "N167_L5_BLOCK10_FLOORDECO_009",
      "N167_L5_BLOCK10_FLOORDECO_010",
      "N167_L5_BLOCK10_FLOORDECO_011",
      "N167_L5_BLOCK10_FLOORDECO_012"
    ]
  },
  {
    "type": "triggerable",
    "image": "169_L5_Block12_Tree_014.svg",
    "imageDir": "images/L5",
    "imageWidth": 95,
    "imageHeight": 168,
    "frames": [
      "N169_L5_BLOCK12_TREE_001",
      "N169_L5_BLOCK12_TREE_002",
      "N169_L5_BLOCK12_TREE_003",
      "N169_L5_BLOCK12_TREE_004",
      "N169_L5_BLOCK12_TREE_005",
      "N169_L5_BLOCK12_TREE_006",
      "N169_L5_BLOCK12_TREE_007",
      "N169_L5_BLOCK12_TREE_008",
      "N169_L5_BLOCK12_TREE_009",
      "N169_L5_BLOCK12_TREE_010",
      "N169_L5_BLOCK12_TREE_011",
      "N169_L5_BLOCK12_TREE_012",
      "N169_L5_BLOCK12_TREE_013",
      "N169_L5_BLOCK12_TREE_014"
    ]
  },
  {
    "type": "triggerable",
    "image": "159_L5_Block02_Flower_015.svg",
    "imageDir": "images/L5",
    "imageWidth": 65,
    "imageHeight": 33,
    "frames": [
      "N159_L5_BLOCK02_FLOWER_001",
      "N159_L5_BLOCK02_FLOWER_002",
      "N159_L5_BLOCK02_FLOWER_003",
      "N159_L5_BLOCK02_FLOWER_004",
      "N159_L5_BLOCK02_FLOWER_005",
      "N159_L5_BLOCK02_FLOWER_006",
      "N159_L5_BLOCK02_FLOWER_007",
      "N159_L5_BLOCK02_FLOWER_008",
      "N159_L5_BLOCK02_FLOWER_009",
      "N159_L5_BLOCK02_FLOWER_010",
      "N159_L5_BLOCK02_FLOWER_011",
      "N159_L5_BLOCK02_FLOWER_012",
      "N159_L5_BLOCK02_FLOWER_013",
      "N159_L5_BLOCK02_FLOWER_014",
      "N159_L5_BLOCK02_FLOWER_015"
    ]
  },
  {
    "type": "triggerable",
    "image": "161_L5_Block04_Flower_013.svg",
    "imageDir": "images/L4L5",
    "imageWidth": 57,
    "imageHeight": 41,
    "frames": [
      "N161_L5_BLOCK04_FLOWER_001",
      "N161_L5_BLOCK04_FLOWER_002",
      "N161_L5_BLOCK04_FLOWER_003",
      "N161_L5_BLOCK04_FLOWER_004",
      "N161_L5_BLOCK04_FLOWER_005",
      "N161_L5_BLOCK04_FLOWER_006",
      "N161_L5_BLOCK04_FLOWER_007",
      "N161_L5_BLOCK04_FLOWER_008",
      "N161_L5_BLOCK04_FLOWER_009",
      "N161_L5_BLOCK04_FLOWER_010",
      "N161_L5_BLOCK04_FLOWER_011",
      "N161_L5_BLOCK04_FLOWER_012",
      "N161_L5_BLOCK04_FLOWER_013"
    ]
  },
  {
    "type": "triggerable",
    "image": "173_L5_Block16_Frog_035.svg",
    "imageDir": "images/L5",
    "imageWidth": 41,
    "imageHeight": 51,
    "frames": [
      "N173_L5_BLOCK16_FROG_001",
      "N173_L5_BLOCK16_FROG_002",
      "N173_L5_BLOCK16_FROG_003",
      "N173_L5_BLOCK16_FROG_004",
      "N173_L5_BLOCK16_FROG_005",
      "N173_L5_BLOCK16_FROG_006",
      "N173_L5_BLOCK16_FROG_007",
      "N173_L5_BLOCK16_FROG_008",
      "N173_L5_BLOCK16_FROG_009",
      "N173_L5_BLOCK16_FROG_010",
      "N173_L5_BLOCK16_FROG_011",
      "N173_L5_BLOCK16_FROG_012",
      "N173_L5_BLOCK16_FROG_013",
      "N173_L5_BLOCK16_FROG_014",
      "N173_L5_BLOCK16_FROG_015",
      "N173_L5_BLOCK16_FROG_016",
      "N173_L5_BLOCK16_FROG_017",
      "N173_L5_BLOCK16_FROG_018",
      "N173_L5_BLOCK16_FROG_019",
      "N173_L5_BLOCK16_FROG_020",
      "N173_L5_BLOCK16_FROG_021",
      "N173_L5_BLOCK16_FROG_022",
      "N173_L5_BLOCK16_FROG_023",
      "N173_L5_BLOCK16_FROG_024",
      "N173_L5_BLOCK16_FROG_025",
      "N173_L5_BLOCK16_FROG_026",
      "N173_L5_BLOCK16_FROG_027",
      "N173_L5_BLOCK16_FROG_028",
      "N173_L5_BLOCK16_FROG_029",
      "N173_L5_BLOCK16_FROG_030",
      "N173_L5_BLOCK16_FROG_031",
      "N173_L5_BLOCK16_FROG_032",
      "N173_L5_BLOCK16_FROG_033",
      "N173_L5_BLOCK16_FROG_034",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035",
      "N173_L5_BLOCK16_FROG_035"
    ]
  },
  {
    "type": "triggerable",
    "image": "174_L5_Block17_PondFrog_030.svg",
    "imageDir": "images/L5",
    "imageWidth": 110,
    "imageHeight": 138,
    "frames": [
      "N174_L5_BLOCK17_PONDFROG_001",
      "N174_L5_BLOCK17_PONDFROG_002",
      "N174_L5_BLOCK17_PONDFROG_003",
      "N174_L5_BLOCK17_PONDFROG_004",
      "N174_L5_BLOCK17_PONDFROG_005",
      "N174_L5_BLOCK17_PONDFROG_006",
      "N174_L5_BLOCK17_PONDFROG_007",
      "N174_L5_BLOCK17_PONDFROG_008",
      "N174_L5_BLOCK17_PONDFROG_009",
      "N174_L5_BLOCK17_PONDFROG_010",
      "N174_L5_BLOCK17_PONDFROG_011",
      "N174_L5_BLOCK17_PONDFROG_012",
      "N174_L5_BLOCK17_PONDFROG_013",
      "N174_L5_BLOCK17_PONDFROG_014",
      "N174_L5_BLOCK17_PONDFROG_015",
      "N174_L5_BLOCK17_PONDFROG_016",
      "N174_L5_BLOCK17_PONDFROG_017",
      "N174_L5_BLOCK17_PONDFROG_018",
      "N174_L5_BLOCK17_PONDFROG_019",
      "N174_L5_BLOCK17_PONDFROG_020",
      "N174_L5_BLOCK17_PONDFROG_021",
      "N174_L5_BLOCK17_PONDFROG_022",
      "N174_L5_BLOCK17_PONDFROG_023",
      "N174_L5_BLOCK17_PONDFROG_024",
      "N174_L5_BLOCK17_PONDFROG_025",
      "N174_L5_BLOCK17_PONDFROG_026",
      "N174_L5_BLOCK17_PONDFROG_027",
      "N174_L5_BLOCK17_PONDFROG_028",
      "N174_L5_BLOCK17_PONDFROG_029",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030",
      "N174_L5_BLOCK17_PONDFROG_030"
    ]
  },
  {
    "type": "triggerable",
    "image": "175_L5_Block17_Pond_012.svg",
    "imageDir": "images/L5",
    "imageWidth": 82,
    "imageHeight": 40,
    "frames": [
      "N175_L5_BLOCK17_POND_001",
      "N175_L5_BLOCK17_POND_002",
      "N175_L5_BLOCK17_POND_003",
      "N175_L5_BLOCK17_POND_004",
      "N175_L5_BLOCK17_POND_005",
      "N175_L5_BLOCK17_POND_006",
      "N175_L5_BLOCK17_POND_007",
      "N175_L5_BLOCK17_POND_008",
      "N175_L5_BLOCK17_POND_009",
      "N175_L5_BLOCK17_POND_010",
      "N175_L5_BLOCK17_POND_011",
      "N175_L5_BLOCK17_POND_012"
    ]
  },
  {
    "type": "triggerable",
    "image": "176_L5_BLock17_Waterfall_033.svg",
    "imageDir": "images/L3L5",
    "imageWidth": 30,
    "imageHeight": 144,
    "frames": [
      "N176_L5_BLOCK17_WATERFALL_001",
      "N176_L5_BLOCK17_WATERFALL_002",
      "N176_L5_BLOCK17_WATERFALL_003",
      "N176_L5_BLOCK17_WATERFALL_004",
      "N176_L5_BLOCK17_WATERFALL_005",
      "N176_L5_BLOCK17_WATERFALL_006",
      "N176_L5_BLOCK17_WATERFALL_007",
      "N176_L5_BLOCK17_WATERFALL_008",
      "N176_L5_BLOCK17_WATERFALL_009",
      "N176_L5_BLOCK17_WATERFALL_010",
      "N176_L5_BLOCK17_WATERFALL_011",
      "N176_L5_BLOCK17_WATERFALL_012",
      "N176_L5_BLOCK17_WATERFALL_013",
      "N176_L5_BLOCK17_WATERFALL_014",
      "N176_L5_BLOCK17_WATERFALL_015",
      "N176_L5_BLOCK17_WATERFALL_016",
      "N176_L5_BLOCK17_WATERFALL_017",
      "N176_L5_BLOCK17_WATERFALL_018",
      "N176_L5_BLOCK17_WATERFALL_019",
      "N176_L5_BLOCK17_WATERFALL_020",
      "N176_L5_BLOCK17_WATERFALL_021",
      "N176_L5_BLOCK17_WATERFALL_022",
      "N176_L5_BLOCK17_WATERFALL_023",
      "N176_L5_BLOCK17_WATERFALL_024",
      "N176_L5_BLOCK17_WATERFALL_025",
      "N176_L5_BLOCK17_WATERFALL_026",
      "N176_L5_BLOCK17_WATERFALL_027",
      "N176_L5_BLOCK17_WATERFALL_028",
      "N176_L5_BLOCK17_WATERFALL_029",
      "N176_L5_BLOCK17_WATERFALL_030",
      "N176_L5_BLOCK17_WATERFALL_031",
      "N176_L5_BLOCK17_WATERFALL_032",
      "N176_L5_BLOCK17_WATERFALL_033"
    ]
  },
  {
    "type": "triggerable",
    "image": "178_L5_Block19_Ducklings_017.svg",
    "imageDir": "images/L5",
    "imageWidth": 82,
    "imageHeight": 58,
    "frames": [
      "N178_L5_BLOCK19_DUCKLINGS_008",
      "N178_L5_BLOCK19_DUCKLINGS_009",
      "N178_L5_BLOCK19_DUCKLINGS_010",
      "N178_L5_BLOCK19_DUCKLINGS_011",
      "N178_L5_BLOCK19_DUCKLINGS_012",
      "N178_L5_BLOCK19_DUCKLINGS_013",
      "N178_L5_BLOCK19_DUCKLINGS_014",
      "N178_L5_BLOCK19_DUCKLINGS_015",
      "N178_L5_BLOCK19_DUCKLINGS_016",
      "N178_L5_BLOCK19_DUCKLINGS_017",
      "N178_L5_BLOCK19_DUCKLINGS_001",
      "N178_L5_BLOCK19_DUCKLINGS_002",
      "N178_L5_BLOCK19_DUCKLINGS_003",
      "N178_L5_BLOCK19_DUCKLINGS_004",
      "N178_L5_BLOCK19_DUCKLINGS_005",
      "N178_L5_BLOCK19_DUCKLINGS_006",
      "N178_L5_BLOCK19_DUCKLINGS_007",
      "N178_L5_BLOCK19_DUCKLINGS_008",
      "N178_L5_BLOCK19_DUCKLINGS_009",
      "N178_L5_BLOCK19_DUCKLINGS_010",
      "N178_L5_BLOCK19_DUCKLINGS_011",
      "N178_L5_BLOCK19_DUCKLINGS_012",
      "N178_L5_BLOCK19_DUCKLINGS_013",
      "N178_L5_BLOCK19_DUCKLINGS_014",
      "N178_L5_BLOCK19_DUCKLINGS_015",
      "N178_L5_BLOCK19_DUCKLINGS_016",
      "N178_L5_BLOCK19_DUCKLINGS_017"
    ]
  },
  {
    "type": "triggerable",
    "image": "179_L5_Block20_Duck_038.svg",
    "imageDir": "images/L5",
    "imageWidth": 93,
    "imageHeight": 104,
    "frames": [
      "N179_L5_BLOCK20_DUCK_001",
      "N179_L5_BLOCK20_DUCK_002",
      "N179_L5_BLOCK20_DUCK_003",
      "N179_L5_BLOCK20_DUCK_004",
      "N179_L5_BLOCK20_DUCK_005",
      "N179_L5_BLOCK20_DUCK_006",
      "N179_L5_BLOCK20_DUCK_007",
      "N179_L5_BLOCK20_DUCK_008",
      "N179_L5_BLOCK20_DUCK_009",
      "N179_L5_BLOCK20_DUCK_010",
      "N179_L5_BLOCK20_DUCK_011",
      "N179_L5_BLOCK20_DUCK_012",
      "N179_L5_BLOCK20_DUCK_013",
      "N179_L5_BLOCK20_DUCK_014",
      "N179_L5_BLOCK20_DUCK_015",
      "N179_L5_BLOCK20_DUCK_016",
      "N179_L5_BLOCK20_DUCK_017",
      "N179_L5_BLOCK20_DUCK_018",
      "N179_L5_BLOCK20_DUCK_019",
      "N179_L5_BLOCK20_DUCK_020",
      "N179_L5_BLOCK20_DUCK_021",
      "N179_L5_BLOCK20_DUCK_022",
      "N179_L5_BLOCK20_DUCK_023",
      "N179_L5_BLOCK20_DUCK_024",
      "N179_L5_BLOCK20_DUCK_025",
      "N179_L5_BLOCK20_DUCK_026",
      "N179_L5_BLOCK20_DUCK_027",
      "N179_L5_BLOCK20_DUCK_028",
      "N179_L5_BLOCK20_DUCK_029",
      "N179_L5_BLOCK20_DUCK_030",
      "N179_L5_BLOCK20_DUCK_031",
      "N179_L5_BLOCK20_DUCK_032",
      "N179_L5_BLOCK20_DUCK_033",
      "N179_L5_BLOCK20_DUCK_034",
      "N179_L5_BLOCK20_DUCK_035",
      "N179_L5_BLOCK20_DUCK_036",
      "N179_L5_BLOCK20_DUCK_037",
      "N179_L5_BLOCK20_DUCK_038",
      "N179_L5_BLOCK20_DUCK_038",
      "N179_L5_BLOCK20_DUCK_038",
      "N179_L5_BLOCK20_DUCK_038"
    ]
  },
  {
    "type": null,
    "image": "183_L5_Island01.svg",
    "imageDir": "images/L5",
    "imageWidth": 192,
    "imageHeight": 157,
    "frames": [
      "N183_L5_ISLAND01"
    ]
  },
  {
    "type": null,
    "image": "184_L5_Island01_Dragonfly_001.svg",
    "imageDir": "images/L5",
    "imageWidth": 238,
    "imageHeight": 142,
    "frames": [
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_002",
      "N184_L5_ISLAND01_DRAGONFLY_003",
      "N184_L5_ISLAND01_DRAGONFLY_004",
      "N184_L5_ISLAND01_DRAGONFLY_005",
      "N184_L5_ISLAND01_DRAGONFLY_006",
      "N184_L5_ISLAND01_DRAGONFLY_007",
      "N184_L5_ISLAND01_DRAGONFLY_008",
      "N184_L5_ISLAND01_DRAGONFLY_009",
      "N184_L5_ISLAND01_DRAGONFLY_010",
      "N184_L5_ISLAND01_DRAGONFLY_011",
      "N184_L5_ISLAND01_DRAGONFLY_012",
      "N184_L5_ISLAND01_DRAGONFLY_013",
      "N184_L5_ISLAND01_DRAGONFLY_014",
      "N184_L5_ISLAND01_DRAGONFLY_015",
      "N184_L5_ISLAND01_DRAGONFLY_016",
      "N184_L5_ISLAND01_DRAGONFLY_017",
      "N184_L5_ISLAND01_DRAGONFLY_018",
      "N184_L5_ISLAND01_DRAGONFLY_019",
      "N184_L5_ISLAND01_DRAGONFLY_020",
      "N184_L5_ISLAND01_DRAGONFLY_021",
      "N184_L5_ISLAND01_DRAGONFLY_022",
      "N184_L5_ISLAND01_DRAGONFLY_023",
      "N184_L5_ISLAND01_DRAGONFLY_024",
      "N184_L5_ISLAND01_DRAGONFLY_025",
      "N184_L5_ISLAND01_DRAGONFLY_026",
      "N184_L5_ISLAND01_DRAGONFLY_027",
      "N184_L5_ISLAND01_DRAGONFLY_028",
      "N184_L5_ISLAND01_DRAGONFLY_029",
      "N184_L5_ISLAND01_DRAGONFLY_030",
      "N184_L5_ISLAND01_DRAGONFLY_031",
      "N184_L5_ISLAND01_DRAGONFLY_032",
      "N184_L5_ISLAND01_DRAGONFLY_033",
      "N184_L5_ISLAND01_DRAGONFLY_034",
      "N184_L5_ISLAND01_DRAGONFLY_035",
      "N184_L5_ISLAND01_DRAGONFLY_036",
      "N184_L5_ISLAND01_DRAGONFLY_037",
      "N184_L5_ISLAND01_DRAGONFLY_038",
      "N184_L5_ISLAND01_DRAGONFLY_039",
      "N184_L5_ISLAND01_DRAGONFLY_040",
      "N184_L5_ISLAND01_DRAGONFLY_041",
      "N184_L5_ISLAND01_DRAGONFLY_042",
      "N184_L5_ISLAND01_DRAGONFLY_043",
      "N184_L5_ISLAND01_DRAGONFLY_044",
      "N184_L5_ISLAND01_DRAGONFLY_045",
      "N184_L5_ISLAND01_DRAGONFLY_046",
      "N184_L5_ISLAND01_DRAGONFLY_047",
      "N184_L5_ISLAND01_DRAGONFLY_048",
      "N184_L5_ISLAND01_DRAGONFLY_049",
      "N184_L5_ISLAND01_DRAGONFLY_050",
      "N184_L5_ISLAND01_DRAGONFLY_051",
      "N184_L5_ISLAND01_DRAGONFLY_052",
      "N184_L5_ISLAND01_DRAGONFLY_053",
      "N184_L5_ISLAND01_DRAGONFLY_054",
      "N184_L5_ISLAND01_DRAGONFLY_055",
      "N184_L5_ISLAND01_DRAGONFLY_056",
      "N184_L5_ISLAND01_DRAGONFLY_057",
      "N184_L5_ISLAND01_DRAGONFLY_058",
      "N184_L5_ISLAND01_DRAGONFLY_059",
      "N184_L5_ISLAND01_DRAGONFLY_060",
      "N184_L5_ISLAND01_DRAGONFLY_061",
      "N184_L5_ISLAND01_DRAGONFLY_062",
      "N184_L5_ISLAND01_DRAGONFLY_063",
      "N184_L5_ISLAND01_DRAGONFLY_064",
      "N184_L5_ISLAND01_DRAGONFLY_065",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001",
      "N184_L5_ISLAND01_DRAGONFLY_001"
    ]
  },
  {
    "type": null,
    "image": "185_L5_Island02.svg",
    "imageDir": "images/L5",
    "imageWidth": 180,
    "imageHeight": 281,
    "frames": [
      "N185_L5_ISLAND02"
    ]
  },
  {
    "type": null,
    "image": "186_L5_Island02_Turbine_011.svg",
    "imageDir": "images/L5",
    "imageWidth": 82,
    "imageHeight": 100,
    "frames": [
      "N186_L5_ISLAND02_TURBINE_001",
      "N186_L5_ISLAND02_TURBINE_002",
      "N186_L5_ISLAND02_TURBINE_003",
      "N186_L5_ISLAND02_TURBINE_004",
      "N186_L5_ISLAND02_TURBINE_005",
      "N186_L5_ISLAND02_TURBINE_006",
      "N186_L5_ISLAND02_TURBINE_007",
      "N186_L5_ISLAND02_TURBINE_008",
      "N186_L5_ISLAND02_TURBINE_009",
      "N186_L5_ISLAND02_TURBINE_010",
      "N186_L5_ISLAND02_TURBINE_011"
    ]
  },
  {
    "type": null,
    "image": "187_L5_Island02_Waterfall_010.svg",
    "imageDir": "images/L5",
    "imageWidth": 23,
    "imageHeight": 98,
    "frames": [
      "N187_L5_ISLAND02_WATERFALL_001",
      "N187_L5_ISLAND02_WATERFALL_002",
      "N187_L5_ISLAND02_WATERFALL_003",
      "N187_L5_ISLAND02_WATERFALL_004",
      "N187_L5_ISLAND02_WATERFALL_005",
      "N187_L5_ISLAND02_WATERFALL_006",
      "N187_L5_ISLAND02_WATERFALL_007",
      "N187_L5_ISLAND02_WATERFALL_008",
      "N187_L5_ISLAND02_WATERFALL_009",
      "N187_L5_ISLAND02_WATERFALL_010"
    ]
  },
  {
    "type": "triggerable",
    "image": "188_L5_Lake_Frog_002.svg",
    "imageDir": "images/L5",
    "imageWidth": 110,
    "imageHeight": 143,
    "frames": [
      "N188_L5_LAKE_FROG_002",
      "N188_L5_LAKE_FROG_003",
      "N188_L5_LAKE_FROG_004",
      "N188_L5_LAKE_FROG_006",
      "N188_L5_LAKE_FROG_007",
      "N188_L5_LAKE_FROG_008",
      "N188_L5_LAKE_FROG_009",
      "N188_L5_LAKE_FROG_011",
      "N188_L5_LAKE_FROG_013",
      "N188_L5_LAKE_FROG_014",
      "N188_L5_LAKE_FROG_016",
      "N188_L5_LAKE_FROG_017",
      "N188_L5_LAKE_FROG_018",
      "N188_L5_LAKE_FROG_019",
      "N188_L5_LAKE_FROG_020",
      "N188_L5_LAKE_FROG_021",
      "N188_L5_LAKE_FROG_022",
      "N188_L5_LAKE_FROG_023",
      "N188_L5_LAKE_FROG_024"
    ]
  },
  {
    "type": null,
    "image": "191_L5_Water_Lilly_021.svg",
    "imageDir": "images/L5",
    "imageWidth": 48,
    "imageHeight": 26,
    "frames": [
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_002",
      "N191_L5_WATER_LILLY_003",
      "N191_L5_WATER_LILLY_004",
      "N191_L5_WATER_LILLY_005",
      "N191_L5_WATER_LILLY_006",
      "N191_L5_WATER_LILLY_007",
      "N191_L5_WATER_LILLY_008",
      "N191_L5_WATER_LILLY_009",
      "N191_L5_WATER_LILLY_010",
      "N191_L5_WATER_LILLY_011",
      "N191_L5_WATER_LILLY_012",
      "N191_L5_WATER_LILLY_013",
      "N191_L5_WATER_LILLY_014",
      "N191_L5_WATER_LILLY_015",
      "N191_L5_WATER_LILLY_016",
      "N191_L5_WATER_LILLY_017",
      "N191_L5_WATER_LILLY_018",
      "N191_L5_WATER_LILLY_019",
      "N191_L5_WATER_LILLY_020",
      "N191_L5_WATER_LILLY_021",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001",
      "N191_L5_WATER_LILLY_001"
    ]
  },
  {
    "type": null,
    "image": "192_L5_Island02_Stream_033.svg",
    "imageDir": "images/L5",
    "imageWidth": 96,
    "imageHeight": 26,
    "frames": [
      "N192_L5_ISLAND02_STREAM_001",
      "N192_L5_ISLAND02_STREAM_002",
      "N192_L5_ISLAND02_STREAM_003",
      "N192_L5_ISLAND02_STREAM_004",
      "N192_L5_ISLAND02_STREAM_005",
      "N192_L5_ISLAND02_STREAM_006",
      "N192_L5_ISLAND02_STREAM_007",
      "N192_L5_ISLAND02_STREAM_008",
      "N192_L5_ISLAND02_STREAM_009",
      "N192_L5_ISLAND02_STREAM_010",
      "N192_L5_ISLAND02_STREAM_011",
      "N192_L5_ISLAND02_STREAM_012",
      "N192_L5_ISLAND02_STREAM_013",
      "N192_L5_ISLAND02_STREAM_014",
      "N192_L5_ISLAND02_STREAM_015",
      "N192_L5_ISLAND02_STREAM_016",
      "N192_L5_ISLAND02_STREAM_017",
      "N192_L5_ISLAND02_STREAM_018",
      "N192_L5_ISLAND02_STREAM_019",
      "N192_L5_ISLAND02_STREAM_020",
      "N192_L5_ISLAND02_STREAM_021",
      "N192_L5_ISLAND02_STREAM_022",
      "N192_L5_ISLAND02_STREAM_023",
      "N192_L5_ISLAND02_STREAM_024",
      "N192_L5_ISLAND02_STREAM_025",
      "N192_L5_ISLAND02_STREAM_026",
      "N192_L5_ISLAND02_STREAM_027",
      "N192_L5_ISLAND02_STREAM_028",
      "N192_L5_ISLAND02_STREAM_029",
      "N192_L5_ISLAND02_STREAM_030",
      "N192_L5_ISLAND02_STREAM_031",
      "N192_L5_ISLAND02_STREAM_032",
      "N192_L5_ISLAND02_STREAM_033"
    ]
  },
  {
    "type": "triggerable",
    "image": "160_L5_Block03_Flower_009.svg",
    "imageDir": "images/L5",
    "imageWidth": 62,
    "imageHeight": 32,
    "frames": [
      "N160_L5_BLOCK03_FLOWER_001",
      "N160_L5_BLOCK03_FLOWER_002",
      "N160_L5_BLOCK03_FLOWER_003",
      "N160_L5_BLOCK03_FLOWER_004",
      "N160_L5_BLOCK03_FLOWER_005",
      "N160_L5_BLOCK03_FLOWER_006",
      "N160_L5_BLOCK03_FLOWER_007",
      "N160_L5_BLOCK03_FLOWER_008",
      "N160_L5_BLOCK03_FLOWER_009"
    ]
  },
  {
    "type": "cloud",
    "image": "193_L6_Cloud01.svg",
    "imageDir": "images/L6",
    "imageWidth": 105,
    "imageHeight": 92,
    "frames": [
      "N193_L6_CLOUD01"
    ]
  },
  {
    "type": "cloud",
    "image": "194_L6_Cloud02.svg",
    "imageDir": "images/L6",
    "imageWidth": 97,
    "imageHeight": 58,
    "frames": [
      "N194_L6_CLOUD02"
    ]
  },
  {
    "type": "cloud",
    "image": "195_L6_Cloud03.svg",
    "imageDir": "images/L6",
    "imageWidth": 42,
    "imageHeight": 22,
    "frames": [
      "N195_L6_CLOUD03"
    ]
  },
  {
    "type": "cloud",
    "image": "196_L6_Cloud04.svg",
    "imageDir": "images/L6",
    "imageWidth": 52,
    "imageHeight": 82,
    "frames": [
      "N196_L6_CLOUD04"
    ]
  },
  {
    "type": "cloud",
    "image": "197_L6_Cloud05.svg",
    "imageDir": "images/L6",
    "imageWidth": 123,
    "imageHeight": 149,
    "frames": [
      "N197_L6_CLOUD05"
    ]
  },
  {
    "type": "cloud",
    "image": "198_L6_Cloud06.svg",
    "imageDir": "images/L6",
    "imageWidth": 56,
    "imageHeight": 60,
    "frames": [
      "N198_L6_CLOUD06"
    ]
  },
  {
    "type": "cloud",
    "image": "199_L6_Cloud07.svg",
    "imageDir": "images/L6",
    "imageWidth": 122,
    "imageHeight": 103,
    "frames": [
      "N199_L6_CLOUD07"
    ]
  },
  {
    "type": null,
    "image": "200_L6_Island04_Sheep_004.svg",
    "imageDir": "images/L6",
    "imageWidth": 59,
    "imageHeight": 80,
    "frames": [
      "N200_L6_ISLAND04_SHEEP_004",
      "N200_L6_ISLAND04_SHEEP_005",
      "N200_L6_ISLAND04_SHEEP_006",
      "N200_L6_ISLAND04_SHEEP_007",
      "N200_L6_ISLAND04_SHEEP_008",
      "N200_L6_ISLAND04_SHEEP_008",
      "N200_L6_ISLAND04_SHEEP_008",
      "N200_L6_ISLAND04_SHEEP_008",
      "N200_L6_ISLAND04_SHEEP_008",
      "N200_L6_ISLAND04_SHEEP_008",
      "N200_L6_ISLAND04_SHEEP_009",
      "N200_L6_ISLAND04_SHEEP_010",
      "N200_L6_ISLAND04_SHEEP_011",
      "N200_L6_ISLAND04_SHEEP_012",
      "N200_L6_ISLAND04_SHEEP_013",
      "N200_L6_ISLAND04_SHEEP_014",
      "N200_L6_ISLAND04_SHEEP_014",
      "N200_L6_ISLAND04_SHEEP_014",
      "N200_L6_ISLAND04_SHEEP_014",
      "N200_L6_ISLAND04_SHEEP_014",
      "N200_L6_ISLAND04_SHEEP_014",
      "N200_L6_ISLAND04_SHEEP_014",
      "N200_L6_ISLAND04_SHEEP_015",
      "N200_L6_ISLAND04_SHEEP_016",
      "N200_L6_ISLAND04_SHEEP_017",
      "N200_L6_ISLAND04_SHEEP_018",
      "N200_L6_ISLAND04_SHEEP_019",
      "N200_L6_ISLAND04_SHEEP_020",
      "N200_L6_ISLAND04_SHEEP_021",
      "N200_L6_ISLAND04_SHEEP_022",
      "N200_L6_ISLAND04_SHEEP_023",
      "N200_L6_ISLAND04_SHEEP_024",
      "N200_L6_ISLAND04_SHEEP_025",
      "N200_L6_ISLAND04_SHEEP_019",
      "N200_L6_ISLAND04_SHEEP_020",
      "N200_L6_ISLAND04_SHEEP_021",
      "N200_L6_ISLAND04_SHEEP_022",
      "N200_L6_ISLAND04_SHEEP_023",
      "N200_L6_ISLAND04_SHEEP_024",
      "N200_L6_ISLAND04_SHEEP_025",
      "N200_L6_ISLAND04_SHEEP_019",
      "N200_L6_ISLAND04_SHEEP_020",
      "N200_L6_ISLAND04_SHEEP_021",
      "N200_L6_ISLAND04_SHEEP_022",
      "N200_L6_ISLAND04_SHEEP_023",
      "N200_L6_ISLAND04_SHEEP_024",
      "N200_L6_ISLAND04_SHEEP_025",
      "N200_L6_ISLAND04_SHEEP_017",
      "N200_L6_ISLAND04_SHEEP_016",
      "N200_L6_ISLAND04_SHEEP_015",
      "N200_L6_ISLAND04_SHEEP_004",
      "N200_L6_ISLAND04_SHEEP_004",
      "N200_L6_ISLAND04_SHEEP_004",
      "N200_L6_ISLAND04_SHEEP_004",
      "N200_L6_ISLAND04_SHEEP_004",
      "N200_L6_ISLAND04_SHEEP_004",
      "N200_L6_ISLAND04_SHEEP_004"
    ]
  },
  {
    "type": null,
    "image": "202_L6_Island03_StringHay_010.svg",
    "imageDir": "images/L6",
    "imageWidth": 41,
    "imageHeight": 184,
    "frames": [
      "N202_L6_ISLAND03_STRINGHAY_010"
    ]
  },
  {
    "type": null,
    "image": "205_L6_Island01_Pig_063.svg",
    "imageDir": "images/L6",
    "imageWidth": 137,
    "imageHeight": 117,
    "frames": [
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_001",
      "N205_L6_ISLAND01_PIG_002",
      "N205_L6_ISLAND01_PIG_003",
      "N205_L6_ISLAND01_PIG_004",
      "N205_L6_ISLAND01_PIG_005",
      "N205_L6_ISLAND01_PIG_006",
      "N205_L6_ISLAND01_PIG_007",
      "N205_L6_ISLAND01_PIG_008",
      "N205_L6_ISLAND01_PIG_009",
      "N205_L6_ISLAND01_PIG_010",
      "N205_L6_ISLAND01_PIG_011",
      "N205_L6_ISLAND01_PIG_012",
      "N205_L6_ISLAND01_PIG_013",
      "N205_L6_ISLAND01_PIG_014",
      "N205_L6_ISLAND01_PIG_015",
      "N205_L6_ISLAND01_PIG_016",
      "N205_L6_ISLAND01_PIG_017",
      "N205_L6_ISLAND01_PIG_018",
      "N205_L6_ISLAND01_PIG_019",
      "N205_L6_ISLAND01_PIG_020",
      "N205_L6_ISLAND01_PIG_021",
      "N205_L6_ISLAND01_PIG_022",
      "N205_L6_ISLAND01_PIG_023",
      "N205_L6_ISLAND01_PIG_024",
      "N205_L6_ISLAND01_PIG_025",
      "N205_L6_ISLAND01_PIG_026",
      "N205_L6_ISLAND01_PIG_027",
      "N205_L6_ISLAND01_PIG_028",
      "N205_L6_ISLAND01_PIG_029",
      "N205_L6_ISLAND01_PIG_030",
      "N205_L6_ISLAND01_PIG_031",
      "N205_L6_ISLAND01_PIG_032",
      "N205_L6_ISLAND01_PIG_033",
      "N205_L6_ISLAND01_PIG_034",
      "N205_L6_ISLAND01_PIG_035",
      "N205_L6_ISLAND01_PIG_036",
      "N205_L6_ISLAND01_PIG_037",
      "N205_L6_ISLAND01_PIG_038",
      "N205_L6_ISLAND01_PIG_039",
      "N205_L6_ISLAND01_PIG_040",
      "N205_L6_ISLAND01_PIG_041",
      "N205_L6_ISLAND01_PIG_042",
      "N205_L6_ISLAND01_PIG_043",
      "N205_L6_ISLAND01_PIG_044",
      "N205_L6_ISLAND01_PIG_045",
      "N205_L6_ISLAND01_PIG_046",
      "N205_L6_ISLAND01_PIG_047",
      "N205_L6_ISLAND01_PIG_048",
      "N205_L6_ISLAND01_PIG_049",
      "N205_L6_ISLAND01_PIG_050",
      "N205_L6_ISLAND01_PIG_051",
      "N205_L6_ISLAND01_PIG_052",
      "N205_L6_ISLAND01_PIG_053",
      "N205_L6_ISLAND01_PIG_054",
      "N205_L6_ISLAND01_PIG_055",
      "N205_L6_ISLAND01_PIG_056",
      "N205_L6_ISLAND01_PIG_057",
      "N205_L6_ISLAND01_PIG_058",
      "N205_L6_ISLAND01_PIG_059",
      "N205_L6_ISLAND01_PIG_060",
      "N205_L6_ISLAND01_PIG_061",
      "N205_L6_ISLAND01_PIG_062",
      "N205_L6_ISLAND01_PIG_063"
    ]
  },
  {
    "type": "triggerable",
    "image": "210_L6_BLock10_Mill_023.svg",
    "imageDir": "images/L6",
    "imageWidth": 66,
    "imageHeight": 142,
    "frames": [
      "N210_L6_BLOCK10_MILL_001",
      "N210_L6_BLOCK10_MILL_002",
      "N210_L6_BLOCK10_MILL_003",
      "N210_L6_BLOCK10_MILL_004",
      "N210_L6_BLOCK10_MILL_005",
      "N210_L6_BLOCK10_MILL_006",
      "N210_L6_BLOCK10_MILL_007",
      "N210_L6_BLOCK10_MILL_008",
      "N210_L6_BLOCK10_MILL_009",
      "N210_L6_BLOCK10_MILL_010",
      "N210_L6_BLOCK10_MILL_011",
      "N210_L6_BLOCK10_MILL_012",
      "N210_L6_BLOCK10_MILL_013",
      "N210_L6_BLOCK10_MILL_014",
      "N210_L6_BLOCK10_MILL_015",
      "N210_L6_BLOCK10_MILL_016",
      "N210_L6_BLOCK10_MILL_017",
      "N210_L6_BLOCK10_MILL_018",
      "N210_L6_BLOCK10_MILL_019",
      "N210_L6_BLOCK10_MILL_020",
      "N210_L6_BLOCK10_MILL_021",
      "N210_L6_BLOCK10_MILL_022",
      "N210_L6_BLOCK10_MILL_023"
    ]
  },
  {
    "type": "triggerable",
    "image": "211_L6_Block11_Buckets_026.svg",
    "imageDir": "images/L6",
    "imageWidth": 66,
    "imageHeight": 60,
    "frames": [
      "N211_L6_BLOCK11_BUCKETS_001",
      "N211_L6_BLOCK11_BUCKETS_002",
      "N211_L6_BLOCK11_BUCKETS_003",
      "N211_L6_BLOCK11_BUCKETS_004",
      "N211_L6_BLOCK11_BUCKETS_005",
      "N211_L6_BLOCK11_BUCKETS_006",
      "N211_L6_BLOCK11_BUCKETS_007",
      "N211_L6_BLOCK11_BUCKETS_008",
      "N211_L6_BLOCK11_BUCKETS_009",
      "N211_L6_BLOCK11_BUCKETS_010",
      "N211_L6_BLOCK11_BUCKETS_011",
      "N211_L6_BLOCK11_BUCKETS_012",
      "N211_L6_BLOCK11_BUCKETS_013",
      "N211_L6_BLOCK11_BUCKETS_014",
      "N211_L6_BLOCK11_BUCKETS_015",
      "N211_L6_BLOCK11_BUCKETS_016",
      "N211_L6_BLOCK11_BUCKETS_017",
      "N211_L6_BLOCK11_BUCKETS_018",
      "N211_L6_BLOCK11_BUCKETS_019",
      "N211_L6_BLOCK11_BUCKETS_020",
      "N211_L6_BLOCK11_BUCKETS_021",
      "N211_L6_BLOCK11_BUCKETS_022",
      "N211_L6_BLOCK11_BUCKETS_023",
      "N211_L6_BLOCK11_BUCKETS_024",
      "N211_L6_BLOCK11_BUCKETS_025",
      "N211_L6_BLOCK11_BUCKETS_026"
    ]
  },
  {
    "type": "triggerable",
    "image": "212_L6_Block12_Sheep_016.svg",
    "imageDir": "images/L6",
    "imageWidth": 59,
    "imageHeight": 82,
    "frames": [
      "N212_L6_BLOCK12_SHEEP_001",
      "N212_L6_BLOCK12_SHEEP_002",
      "N212_L6_BLOCK12_SHEEP_003",
      "N212_L6_BLOCK12_SHEEP_004",
      "N212_L6_BLOCK12_SHEEP_005",
      "N212_L6_BLOCK12_SHEEP_006",
      "N212_L6_BLOCK12_SHEEP_007",
      "N212_L6_BLOCK12_SHEEP_008",
      "N212_L6_BLOCK12_SHEEP_009",
      "N212_L6_BLOCK12_SHEEP_010",
      "N212_L6_BLOCK12_SHEEP_011",
      "N212_L6_BLOCK12_SHEEP_012",
      "N212_L6_BLOCK12_SHEEP_013",
      "N212_L6_BLOCK12_SHEEP_014",
      "N212_L6_BLOCK12_SHEEP_015",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_017",
      "N212_L6_BLOCK12_SHEEP_018",
      "N212_L6_BLOCK12_SHEEP_019",
      "N212_L6_BLOCK12_SHEEP_020",
      "N212_L6_BLOCK12_SHEEP_021",
      "N212_L6_BLOCK12_SHEEP_022",
      "N212_L6_BLOCK12_SHEEP_023",
      "N212_L6_BLOCK12_SHEEP_024",
      "N212_L6_BLOCK12_SHEEP_025",
      "N212_L6_BLOCK12_SHEEP_026",
      "N212_L6_BLOCK12_SHEEP_026",
      "N212_L6_BLOCK12_SHEEP_026",
      "N212_L6_BLOCK12_SHEEP_026",
      "N212_L6_BLOCK12_SHEEP_026",
      "N212_L6_BLOCK12_SHEEP_026",
      "N212_L6_BLOCK12_SHEEP_025",
      "N212_L6_BLOCK12_SHEEP_024",
      "N212_L6_BLOCK12_SHEEP_023",
      "N212_L6_BLOCK12_SHEEP_022",
      "N212_L6_BLOCK12_SHEEP_021",
      "N212_L6_BLOCK12_SHEEP_020",
      "N212_L6_BLOCK12_SHEEP_019",
      "N212_L6_BLOCK12_SHEEP_018",
      "N212_L6_BLOCK12_SHEEP_017",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016",
      "N212_L6_BLOCK12_SHEEP_016"
    ]
  },
  {
    "type": "triggerable",
    "image": "213_L6_Block13_15_Chicks_023.svg",
    "imageDir": "images/L6",
    "imageWidth": 80,
    "imageHeight": 62,
    "frames": [
      "N213_L6_BLOCK13_15_CHICKS_001",
      "N213_L6_BLOCK13_15_CHICKS_002",
      "N213_L6_BLOCK13_15_CHICKS_003",
      "N213_L6_BLOCK13_15_CHICKS_004",
      "N213_L6_BLOCK13_15_CHICKS_005",
      "N213_L6_BLOCK13_15_CHICKS_006",
      "N213_L6_BLOCK13_15_CHICKS_007",
      "N213_L6_BLOCK13_15_CHICKS_008",
      "N213_L6_BLOCK13_15_CHICKS_009",
      "N213_L6_BLOCK13_15_CHICKS_010",
      "N213_L6_BLOCK13_15_CHICKS_011",
      "N213_L6_BLOCK13_15_CHICKS_012",
      "N213_L6_BLOCK13_15_CHICKS_013",
      "N213_L6_BLOCK13_15_CHICKS_014",
      "N213_L6_BLOCK13_15_CHICKS_015",
      "N213_L6_BLOCK13_15_CHICKS_016",
      "N213_L6_BLOCK13_15_CHICKS_017",
      "N213_L6_BLOCK13_15_CHICKS_018",
      "N213_L6_BLOCK13_15_CHICKS_019",
      "N213_L6_BLOCK13_15_CHICKS_020",
      "N213_L6_BLOCK13_15_CHICKS_021",
      "N213_L6_BLOCK13_15_CHICKS_022",
      "N213_L6_BLOCK13_15_CHICKS_023"
    ]
  },
  {
    "type": "triggerable",
    "image": "214_L6_Block14_Chicken_042.svg",
    "imageDir": "images/L6",
    "imageWidth": 41,
    "imageHeight": 72,
    "frames": [
      "N214_L6_BLOCK14_CHICKEN_001",
      "N214_L6_BLOCK14_CHICKEN_002",
      "N214_L6_BLOCK14_CHICKEN_003",
      "N214_L6_BLOCK14_CHICKEN_004",
      "N214_L6_BLOCK14_CHICKEN_005",
      "N214_L6_BLOCK14_CHICKEN_006",
      "N214_L6_BLOCK14_CHICKEN_007",
      "N214_L6_BLOCK14_CHICKEN_008",
      "N214_L6_BLOCK14_CHICKEN_009",
      "N214_L6_BLOCK14_CHICKEN_010",
      "N214_L6_BLOCK14_CHICKEN_011",
      "N214_L6_BLOCK14_CHICKEN_012",
      "N214_L6_BLOCK14_CHICKEN_013",
      "N214_L6_BLOCK14_CHICKEN_014",
      "N214_L6_BLOCK14_CHICKEN_015",
      "N214_L6_BLOCK14_CHICKEN_016",
      "N214_L6_BLOCK14_CHICKEN_017",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_018",
      "N214_L6_BLOCK14_CHICKEN_019",
      "N214_L6_BLOCK14_CHICKEN_020",
      "N214_L6_BLOCK14_CHICKEN_021",
      "N214_L6_BLOCK14_CHICKEN_022",
      "N214_L6_BLOCK14_CHICKEN_023",
      "N214_L6_BLOCK14_CHICKEN_024",
      "N214_L6_BLOCK14_CHICKEN_025",
      "N214_L6_BLOCK14_CHICKEN_026",
      "N214_L6_BLOCK14_CHICKEN_027",
      "N214_L6_BLOCK14_CHICKEN_028",
      "N214_L6_BLOCK14_CHICKEN_029",
      "N214_L6_BLOCK14_CHICKEN_030",
      "N214_L6_BLOCK14_CHICKEN_031",
      "N214_L6_BLOCK14_CHICKEN_032",
      "N214_L6_BLOCK14_CHICKEN_033",
      "N214_L6_BLOCK14_CHICKEN_034",
      "N214_L6_BLOCK14_CHICKEN_035",
      "N214_L6_BLOCK14_CHICKEN_036",
      "N214_L6_BLOCK14_CHICKEN_037",
      "N214_L6_BLOCK14_CHICKEN_038",
      "N214_L6_BLOCK14_CHICKEN_039",
      "N214_L6_BLOCK14_CHICKEN_040",
      "N214_L6_BLOCK14_CHICKEN_041",
      "N214_L6_BLOCK14_CHICKEN_042"
    ]
  },
  {
    "type": "triggerable",
    "image": "215_L6_Block16_18_piglet_041.svg",
    "imageDir": "images/L6",
    "imageWidth": 117,
    "imageHeight": 92,
    "frames": [
      "N215_L6_BLOCK16_18_PIGLET_001",
      "N215_L6_BLOCK16_18_PIGLET_002",
      "N215_L6_BLOCK16_18_PIGLET_003",
      "N215_L6_BLOCK16_18_PIGLET_004",
      "N215_L6_BLOCK16_18_PIGLET_005",
      "N215_L6_BLOCK16_18_PIGLET_006",
      "N215_L6_BLOCK16_18_PIGLET_007",
      "N215_L6_BLOCK16_18_PIGLET_008",
      "N215_L6_BLOCK16_18_PIGLET_009",
      "N215_L6_BLOCK16_18_PIGLET_010",
      "N215_L6_BLOCK16_18_PIGLET_011",
      "N215_L6_BLOCK16_18_PIGLET_012",
      "N215_L6_BLOCK16_18_PIGLET_013",
      "N215_L6_BLOCK16_18_PIGLET_014",
      "N215_L6_BLOCK16_18_PIGLET_015",
      "N215_L6_BLOCK16_18_PIGLET_016",
      "N215_L6_BLOCK16_18_PIGLET_017",
      "N215_L6_BLOCK16_18_PIGLET_018",
      "N215_L6_BLOCK16_18_PIGLET_019",
      "N215_L6_BLOCK16_18_PIGLET_020",
      "N215_L6_BLOCK16_18_PIGLET_021",
      "N215_L6_BLOCK16_18_PIGLET_022",
      "N215_L6_BLOCK16_18_PIGLET_023",
      "N215_L6_BLOCK16_18_PIGLET_024",
      "N215_L6_BLOCK16_18_PIGLET_025",
      "N215_L6_BLOCK16_18_PIGLET_026",
      "N215_L6_BLOCK16_18_PIGLET_027",
      "N215_L6_BLOCK16_18_PIGLET_028",
      "N215_L6_BLOCK16_18_PIGLET_029",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_030",
      "N215_L6_BLOCK16_18_PIGLET_031",
      "N215_L6_BLOCK16_18_PIGLET_032",
      "N215_L6_BLOCK16_18_PIGLET_033",
      "N215_L6_BLOCK16_18_PIGLET_034",
      "N215_L6_BLOCK16_18_PIGLET_035",
      "N215_L6_BLOCK16_18_PIGLET_036",
      "N215_L6_BLOCK16_18_PIGLET_037",
      "N215_L6_BLOCK16_18_PIGLET_038",
      "N215_L6_BLOCK16_18_PIGLET_039",
      "N215_L6_BLOCK16_18_PIGLET_040",
      "N215_L6_BLOCK16_18_PIGLET_041"
    ]
  },
  {
    "type": "triggerable",
    "image": "216_L6_Block17_Pig_031.svg",
    "imageDir": "images/L6",
    "imageWidth": 137,
    "imageHeight": 105,
    "frames": [
      "N216_L6_BLOCK17_PIG_001",
      "N216_L6_BLOCK17_PIG_002",
      "N216_L6_BLOCK17_PIG_003",
      "N216_L6_BLOCK17_PIG_004",
      "N216_L6_BLOCK17_PIG_005",
      "N216_L6_BLOCK17_PIG_006",
      "N216_L6_BLOCK17_PIG_007",
      "N216_L6_BLOCK17_PIG_008",
      "N216_L6_BLOCK17_PIG_009",
      "N216_L6_BLOCK17_PIG_010",
      "N216_L6_BLOCK17_PIG_011",
      "N216_L6_BLOCK17_PIG_012",
      "N216_L6_BLOCK17_PIG_013",
      "N216_L6_BLOCK17_PIG_014",
      "N216_L6_BLOCK17_PIG_015",
      "N216_L6_BLOCK17_PIG_016",
      "N216_L6_BLOCK17_PIG_017",
      "N216_L6_BLOCK17_PIG_018",
      "N216_L6_BLOCK17_PIG_019",
      "N216_L6_BLOCK17_PIG_020",
      "N216_L6_BLOCK17_PIG_021",
      "N216_L6_BLOCK17_PIG_022",
      "N216_L6_BLOCK17_PIG_023",
      "N216_L6_BLOCK17_PIG_024",
      "N216_L6_BLOCK17_PIG_025",
      "N216_L6_BLOCK17_PIG_026",
      "N216_L6_BLOCK17_PIG_027",
      "N216_L6_BLOCK17_PIG_028",
      "N216_L6_BLOCK17_PIG_029",
      "N216_L6_BLOCK17_PIG_030",
      "N216_L6_BLOCK17_PIG_031"
    ]
  },
  {
    "type": "triggerable",
    "image": "218_L6_Block21_Flower_008.svg",
    "imageDir": "images/L6",
    "imageWidth": 39,
    "imageHeight": 25,
    "frames": [
      "N218_L6_BLOCK21_FLOWER_001",
      "N218_L6_BLOCK21_FLOWER_002",
      "N218_L6_BLOCK21_FLOWER_003",
      "N218_L6_BLOCK21_FLOWER_004",
      "N218_L6_BLOCK21_FLOWER_005",
      "N218_L6_BLOCK21_FLOWER_006",
      "N218_L6_BLOCK21_FLOWER_007",
      "N218_L6_BLOCK21_FLOWER_008"
    ]
  },
  {
    "type": "triggerable",
    "image": "219_L6_Block21_Fence_012.svg",
    "imageDir": "images/L6",
    "imageWidth": 45,
    "imageHeight": 63,
    "frames": [
      "N219_L6_BLOCK21_FENCE_001",
      "N219_L6_BLOCK21_FENCE_002",
      "N219_L6_BLOCK21_FENCE_003",
      "N219_L6_BLOCK21_FENCE_004",
      "N219_L6_BLOCK21_FENCE_005",
      "N219_L6_BLOCK21_FENCE_006",
      "N219_L6_BLOCK21_FENCE_007",
      "N219_L6_BLOCK21_FENCE_008",
      "N219_L6_BLOCK21_FENCE_009",
      "N219_L6_BLOCK21_FENCE_010",
      "N219_L6_BLOCK21_FENCE_011",
      "N219_L6_BLOCK21_FENCE_012"
    ]
  },
  {
    "type": null,
    "image": "Block01_Decor.svg",
    "imageDir": "images/L6",
    "imageWidth": 68,
    "imageHeight": 35,
    "frames": [
      "BLOCK01_DECOR"
    ]
  },
  {
    "type": null,
    "image": "Block04_08_Decor.svg",
    "imageDir": "images/L6",
    "imageWidth": 54,
    "imageHeight": 27,
    "frames": [
      "BLOCK04_08_DECOR"
    ]
  },
  {
    "type": null,
    "image": "Pig_Island.svg",
    "imageDir": "images/L6",
    "imageWidth": 171,
    "imageHeight": 124,
    "frames": [
      "PIG_ISLAND"
    ]
  },
  {
    "type": null,
    "image": "Pond_Island.svg",
    "imageDir": "images/L6",
    "imageWidth": 239,
    "imageHeight": 277,
    "frames": [
      "POND_ISLAND"
    ]
  },
  {
    "type": null,
    "image": "Shed_Island.svg",
    "imageDir": "images/L6",
    "imageWidth": 198,
    "imageHeight": 254,
    "frames": [
      "SHED_ISLAND"
    ]
  },
  {
    "type": null,
    "image": "Sheep_Island.svg",
    "imageDir": "images/L6",
    "imageWidth": 116,
    "imageHeight": 104,
    "frames": [
      "SHEEP_ISLAND"
    ]
  }
];

/** Sprite rectangles: which sheet, and where on it. */
export const atlasSprites = {
  "BLOCK01_DECOR": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 37050,
    "w": 68.2,
    "h": 34.9
  },
  "BLOCK02_06_DECOR": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 37105,
    "w": 54.8,
    "h": 27.8
  },
  "BLOCK04_08_DECOR": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 37153,
    "w": 53.8,
    "h": 26.8
  },
  "BUNNY_EAST_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 20,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 209,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_10": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 398,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_11": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 587,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_12": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 776,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_13": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 965,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_14": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 1154,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_15": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 1343,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_16": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 1532,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_17": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 1721,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_18": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 1910,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 2099,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 2288,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 2477,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 2666,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 2855,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_7": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 3044,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_8": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 3233,
    "w": 128,
    "h": 169
  },
  "BUNNY_EAST_9": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 3422,
    "w": 128,
    "h": 169
  },
  "BUNNY_NORTH_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 3611,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 3801,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_10": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 3991,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_11": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 4181,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_12": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 4371,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_13": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 4561,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_14": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 4751,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_15": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 4941,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_16": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 5131,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_17": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 5321,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_18": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 5511,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 5701,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 5891,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 6081,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 6271,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 6461,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_7": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 6651,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_8": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 6841,
    "w": 128,
    "h": 170
  },
  "BUNNY_NORTH_9": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 7031,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 7221,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 7411,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_10": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 7601,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_11": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 7791,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_12": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 7981,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_13": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 8171,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_14": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 8361,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_15": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 8551,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_16": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 8741,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_17": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 8931,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_18": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 9121,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 9311,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 9501,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 9691,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 9881,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 10071,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_7": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 10261,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_8": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 10451,
    "w": 128,
    "h": 170
  },
  "BUNNY_SOUTH_9": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 10641,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 10831,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 11021,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_10": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 11211,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_11": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 11401,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_12": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 11591,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_13": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 11781,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_14": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 11971,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_15": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 12161,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_16": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 12351,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_17": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 12541,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_18": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 12731,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 12921,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 13111,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 13301,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 13491,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 13681,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_7": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 13871,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_8": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 14061,
    "w": 128,
    "h": 170
  },
  "BUNNY_WEST_9": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 14251,
    "w": 128,
    "h": 170
  },
  "CARROT": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 14545,
    "w": 128,
    "h": 128
  },
  "CARROT_1": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 20,
    "w": 55,
    "h": 90
  },
  "CARROT_10": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 130,
    "w": 55,
    "h": 90
  },
  "CARROT_11": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 240,
    "w": 55,
    "h": 90
  },
  "CARROT_12": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 350,
    "w": 55,
    "h": 90
  },
  "CARROT_13": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 460,
    "w": 55,
    "h": 90
  },
  "CARROT_14": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 570,
    "w": 55,
    "h": 90
  },
  "CARROT_15": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 680,
    "w": 55,
    "h": 90
  },
  "CARROT_16": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 790,
    "w": 55,
    "h": 90
  },
  "CARROT_17": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 900,
    "w": 55,
    "h": 90
  },
  "CARROT_18": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 1010,
    "w": 55,
    "h": 90
  },
  "CARROT_19": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 1120,
    "w": 55,
    "h": 90
  },
  "CARROT_2": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 1230,
    "w": 55,
    "h": 90
  },
  "CARROT_20": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 1340,
    "w": 55,
    "h": 90
  },
  "CARROT_21": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 1450,
    "w": 55,
    "h": 90
  },
  "CARROT_22": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 1560,
    "w": 55,
    "h": 90
  },
  "CARROT_23": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 1670,
    "w": 55,
    "h": 90
  },
  "CARROT_24": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 1780,
    "w": 55,
    "h": 90
  },
  "CARROT_25": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 1890,
    "w": 55,
    "h": 90
  },
  "CARROT_26": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2000,
    "w": 55,
    "h": 90
  },
  "CARROT_27": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2110,
    "w": 55,
    "h": 90
  },
  "CARROT_28": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2220,
    "w": 55,
    "h": 90
  },
  "CARROT_29": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2330,
    "w": 55,
    "h": 90
  },
  "CARROT_3": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2440,
    "w": 55,
    "h": 90
  },
  "CARROT_30": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2550,
    "w": 55,
    "h": 90
  },
  "CARROT_31": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2660,
    "w": 55,
    "h": 90
  },
  "CARROT_32": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2770,
    "w": 55,
    "h": 90
  },
  "CARROT_33": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2880,
    "w": 55,
    "h": 90
  },
  "CARROT_34": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 2990,
    "w": 55,
    "h": 90
  },
  "CARROT_35": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 3100,
    "w": 55,
    "h": 90
  },
  "CARROT_36": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 3210,
    "w": 55,
    "h": 90
  },
  "CARROT_37": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 3320,
    "w": 55,
    "h": 90
  },
  "CARROT_38": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 3430,
    "w": 55,
    "h": 90
  },
  "CARROT_39": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 3540,
    "w": 55,
    "h": 90
  },
  "CARROT_4": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 3650,
    "w": 55,
    "h": 90
  },
  "CARROT_40": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 3760,
    "w": 55,
    "h": 90
  },
  "CARROT_41": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 3870,
    "w": 55,
    "h": 90
  },
  "CARROT_42": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 3980,
    "w": 55,
    "h": 90
  },
  "CARROT_43": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 4090,
    "w": 55,
    "h": 90
  },
  "CARROT_44": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 4200,
    "w": 55,
    "h": 90
  },
  "CARROT_45": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 4310,
    "w": 55,
    "h": 90
  },
  "CARROT_46": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 4420,
    "w": 55,
    "h": 90
  },
  "CARROT_47": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 4530,
    "w": 55,
    "h": 90
  },
  "CARROT_48": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 4640,
    "w": 55,
    "h": 90
  },
  "CARROT_5": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 4750,
    "w": 55,
    "h": 90
  },
  "CARROT_6": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 4860,
    "w": 55,
    "h": 90
  },
  "CARROT_7": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 4970,
    "w": 55,
    "h": 90
  },
  "CARROT_8": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5080,
    "w": 55,
    "h": 90
  },
  "CARROT_9": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5190,
    "w": 55,
    "h": 90
  },
  "CARROT_EAT_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 14693,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_10": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 14774,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_11": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 14855,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_12": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 14936,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15017,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15098,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15179,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15260,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15341,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_7": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15422,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_8": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15503,
    "w": 55,
    "h": 61
  },
  "CARROT_EAT_9": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15584,
    "w": 55,
    "h": 61
  },
  "CARROT_SHADOW": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15665,
    "w": 64,
    "h": 32
  },
  "CLOUD_01": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 20,
    "w": 97,
    "h": 84
  },
  "CLOUD_02": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 124,
    "w": 47,
    "h": 33
  },
  "CLOUD_03": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 177,
    "w": 57,
    "h": 34
  },
  "CLOUD_04": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 231,
    "w": 115,
    "h": 71
  },
  "CTA_PLAY": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5300,
    "w": 67.6,
    "h": 102.5
  },
  "CTA_PLAY_BG": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5423,
    "w": 137.9,
    "h": 137.9
  },
  "CUBE_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 17917,
    "w": 128,
    "h": 128
  },
  "CUBE_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 18065,
    "w": 128,
    "h": 128
  },
  "CUBE_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 18213,
    "w": 128,
    "h": 128
  },
  "FLOWER_001": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 322,
    "w": 24,
    "h": 14
  },
  "FLOWER_002": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 356,
    "w": 24,
    "h": 14
  },
  "FLOWER_003": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 390,
    "w": 24,
    "h": 14
  },
  "FLOWER_004": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 424,
    "w": 24,
    "h": 14
  },
  "FLOWER_005": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 458,
    "w": 24,
    "h": 14
  },
  "FLOWER_006": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 492,
    "w": 24,
    "h": 14
  },
  "FLOWER_007": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 526,
    "w": 24,
    "h": 14
  },
  "FLOWER_008": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 560,
    "w": 24,
    "h": 14
  },
  "FLOWER_009": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 594,
    "w": 24,
    "h": 14
  },
  "FLOWER_010": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 628,
    "w": 24,
    "h": 14
  },
  "FLOWER_011": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 662,
    "w": 24,
    "h": 14
  },
  "FLOWER_012": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 696,
    "w": 24,
    "h": 14
  },
  "FLOWER_013": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 730,
    "w": 24,
    "h": 14
  },
  "FLOWER_TALL_001": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 764,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_002": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 845,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_003": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 926,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_004": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1007,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_005": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1088,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_006": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1169,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_007": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1250,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_008": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1331,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_009": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1412,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_010": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1493,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_011": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1574,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_012": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1655,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_013": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1736,
    "w": 90,
    "h": 61
  },
  "FLOWER_TALL_014": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1817,
    "w": 90,
    "h": 61
  },
  "FLOWER_YELLOW_001": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1898,
    "w": 18,
    "h": 10
  },
  "FLOWER_YELLOW_002": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1928,
    "w": 18,
    "h": 10
  },
  "FLOWER_YELLOW_003": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1958,
    "w": 18,
    "h": 10
  },
  "FLOWER_YELLOW_004": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 1988,
    "w": 18,
    "h": 10
  },
  "FLOWER_YELLOW_005": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2018,
    "w": 18,
    "h": 10
  },
  "FLOWER_YELLOW_006": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2048,
    "w": 18,
    "h": 10
  },
  "FLOWER_YELLOW_007": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2078,
    "w": 18,
    "h": 10
  },
  "FLOWER_YELLOW_008": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2108,
    "w": 18,
    "h": 10
  },
  "FLOWER_YELLOW_009": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2138,
    "w": 18,
    "h": 10
  },
  "FLOWER_YELLOW_010": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2168,
    "w": 18,
    "h": 10
  },
  "FOUNTAIN": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2198,
    "w": 150,
    "h": 156
  },
  "FOUNTAIN_ALT": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2374,
    "w": 133,
    "h": 152
  },
  "FOUNTAIN_RIPPLE_001": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2546,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_002": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2586,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_003": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2626,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_004": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2666,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_005": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2706,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_006": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2746,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_007": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2786,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_008": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2826,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_009": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2866,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_010": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2906,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_011": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2946,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_012": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 2986,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_013": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3026,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_014": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3066,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_015": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3106,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_016": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3146,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_017": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3186,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_018": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3226,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_019": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3266,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_020": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3306,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_RIPPLE_021": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3346,
    "w": 44,
    "h": 20
  },
  "FOUNTAIN_WATER_0": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3386,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_1": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3486,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_10": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3586,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_11": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3686,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_12": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3786,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_13": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3886,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_14": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 3986,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_15": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4086,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_16": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4186,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_17": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4286,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_18": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4386,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_19": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4486,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_2": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4586,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_20": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4686,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_21": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4786,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_22": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4886,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_23": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 4986,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_24": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5086,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_25": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5186,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_26": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5286,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_27": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5386,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_28": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5486,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_3": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5586,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_4": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5686,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_5": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5786,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_6": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5886,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_7": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 5986,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_8": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 6086,
    "w": 80,
    "h": 80
  },
  "FOUNTAIN_WATER_9": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 6186,
    "w": 80,
    "h": 80
  },
  "GATE": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 6286,
    "w": 153,
    "h": 195
  },
  "LOADING_E": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5581,
    "w": 41,
    "h": 36
  },
  "LOADING_G1": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5637,
    "w": 41,
    "h": 36
  },
  "LOADING_G2": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5693,
    "w": 41,
    "h": 36
  },
  "LOADING_L": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5749,
    "w": 41,
    "h": 36
  },
  "LOADING_O1": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5805,
    "w": 41,
    "h": 36
  },
  "LOADING_O2": {
    "sheet": "loading-sprite.svg",
    "sheetIndex": 0,
    "x": 20,
    "y": 5861,
    "w": 41,
    "h": 36
  },
  "N027_L2_BLOCK01_001": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_002": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 214,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_003": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 408,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_004": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 602,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_005": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 796,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_006": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 990,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_007": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 1184,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_008": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 1378,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_009": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 1572,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_010": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 1766,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_011": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 1960,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_012": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 2154,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_013": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 2348,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_014": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 2542,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_015": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 2736,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_016": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 2930,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_017": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 3124,
    "w": 99,
    "h": 174
  },
  "N027_L2_BLOCK01_018": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 3318,
    "w": 99,
    "h": 174
  },
  "N028_L2_BLOCK02_001": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 3512,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_002": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 3597,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_003": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 3682,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_004": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 3767,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_005": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 3852,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_006": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 3937,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_007": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4022,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_008": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4107,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_009": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4192,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_010": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4277,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_011": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4362,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_012": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4447,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_013": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4532,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_014": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4617,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_015": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4702,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_016": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4787,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_017": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4872,
    "w": 52,
    "h": 65
  },
  "N028_L2_BLOCK02_018": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 4957,
    "w": 52,
    "h": 65
  },
  "N029_L2_BLOCK03_001": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 5042,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_002": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 5264,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_003": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 5486,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_004": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 5708,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_005": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 5930,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_006": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 6152,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_007": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 6374,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_008": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 6596,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_009": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 6818,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_010": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 7040,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_011": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 7262,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_012": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 7484,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_013": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 7706,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_014": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 7928,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_015": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 8150,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_016": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 8372,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_017": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 8594,
    "w": 123,
    "h": 202
  },
  "N029_L2_BLOCK03_018": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 8816,
    "w": 123,
    "h": 202
  },
  "N030_L2_BLOCK04_001": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9038,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_002": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9100,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_003": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9162,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_004": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9224,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_005": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9286,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_006": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9348,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_007": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9410,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_008": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9472,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_009": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9534,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_010": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9596,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_011": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9658,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_012": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9720,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_013": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9782,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_014": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9844,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_015": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9906,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_016": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 9968,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_017": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 10030,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_018": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 10092,
    "w": 77,
    "h": 42
  },
  "N030_L2_BLOCK04_019": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 10154,
    "w": 77,
    "h": 42
  },
  "N032_L2_ISLAND01_APPLE": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 10216,
    "w": 128,
    "h": 201
  },
  "N033_L2_APPLETREESPIN_1": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 10437,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_10": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 10560,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_11": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 10683,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_12": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 10806,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_13": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 10929,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_14": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 11052,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_15": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 11175,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_16": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 11298,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_17": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 11421,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_18": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 11544,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_19": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 11667,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_2": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 11790,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_20": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 11913,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_21": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 12036,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_22": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 12159,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_23": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 12282,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_24": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 12405,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_25": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 12528,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_26": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 12651,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_27": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 12774,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_28": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 12897,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_29": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 13020,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_3": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 13143,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_30": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 13266,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_31": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 13389,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_32": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 13512,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_33": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 13635,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_34": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 13758,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_35": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 13881,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_36": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 14004,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_37": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 14127,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_38": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 14250,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_39": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 14373,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_4": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 14496,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_40": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 14619,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_41": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 14742,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_42": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 14865,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_43": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 14988,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_44": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 15111,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_45": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 15234,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_46": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 15357,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_47": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 15480,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_48": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 15603,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_5": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 15726,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_6": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 15849,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_7": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 15972,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_8": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 16095,
    "w": 119,
    "h": 103
  },
  "N033_L2_APPLETREESPIN_9": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 16218,
    "w": 119,
    "h": 103
  },
  "N034_L2_ISLAND02_PEAR_1": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 16341,
    "w": 128,
    "h": 141
  },
  "N035_L2_ISLAND03_STAIRS": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 16502,
    "w": 128,
    "h": 149
  },
  "N036_L2_ISLAND06_CHERRY": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 16671,
    "w": 133,
    "h": 233
  },
  "N037_L2_ISLAND05_STRAWBERRY": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20324,
    "w": 128,
    "h": 98
  },
  "N037_L2_STRAWBERRYSPIN_001": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 16924,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_002": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17009,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_003": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17094,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_004": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17179,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_005": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17264,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_006": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17349,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_007": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17434,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_008": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17519,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_009": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17604,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_010": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17689,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_011": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17774,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_012": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17859,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_013": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 17944,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_014": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18029,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_015": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18114,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_016": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18199,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_017": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18284,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_018": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18369,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_019": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18454,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_020": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18539,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_021": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18624,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_022": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18709,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_023": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18794,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_024": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18879,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_025": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 18964,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_026": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19049,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_027": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19134,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_028": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19219,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_029": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19304,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_030": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19389,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_031": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19474,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_032": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19559,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_033": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19644,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_034": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19729,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_035": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19814,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_036": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19899,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_037": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 19984,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_038": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20069,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_039": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20154,
    "w": 68,
    "h": 65
  },
  "N037_L2_STRAWBERRYSPIN_040": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20239,
    "w": 68,
    "h": 65
  },
  "N039_L2_CLOUD01": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20442,
    "w": 108,
    "h": 69
  },
  "N040_L2_CLOUD02": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20531,
    "w": 52,
    "h": 58
  },
  "N041_L2_CLOUD03": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20609,
    "w": 100,
    "h": 77
  },
  "N042_L2_CLOUD04": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20706,
    "w": 110,
    "h": 99
  },
  "N043_L2_TILE01_002": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15717,
    "w": 128,
    "h": 128
  },
  "N044_L2_TILE02_008": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20825,
    "w": 128,
    "h": 128
  },
  "N045_L2_TILE03_008": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 15865,
    "w": 128,
    "h": 128
  },
  "N046_L2_TILE04_13": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 20973,
    "w": 128,
    "h": 128
  },
  "N047_L2_TILE05_013": {
    "sheet": "two-sprite.svg",
    "sheetIndex": 4,
    "x": 20,
    "y": 21121,
    "w": 128,
    "h": 128
  },
  "N049_L3_BLOCK01_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 20,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 86,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 152,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 218,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 284,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 350,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 416,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 482,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 548,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 614,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 680,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 746,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 812,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 878,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 944,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1010,
    "w": 88,
    "h": 46
  },
  "N049_L3_BLOCK01_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1076,
    "w": 88,
    "h": 46
  },
  "N050_L3_BLOCK02_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1142,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1221,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1300,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1379,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1458,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1537,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1616,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1695,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1774,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1853,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 1932,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 2011,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 2090,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 2169,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 2248,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 2327,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 2406,
    "w": 33,
    "h": 59
  },
  "N050_L3_BLOCK02_018": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 2485,
    "w": 33,
    "h": 59
  },
  "N051_L3_BLOCK03_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 2564,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 2790,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 3016,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 3242,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 3468,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 3694,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 3920,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 4146,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 4372,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 4598,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 4824,
    "w": 76,
    "h": 206
  },
  "N051_L3_BLOCK03_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 5050,
    "w": 76,
    "h": 206
  },
  "N052_L3_BLOCK04_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 5276,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 5369,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 5462,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 5555,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 5648,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 5741,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 5834,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 5927,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6020,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6113,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6206,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6299,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6392,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6485,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6578,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6671,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6764,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_018": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6857,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_019": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 6950,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_020": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7043,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_021": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7136,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_022": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7229,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_023": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7322,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_024": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7415,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_025": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7508,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_026": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7601,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_027": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7694,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_028": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7787,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_029": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7880,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_030": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 7973,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_031": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8066,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_032": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8159,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_033": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8252,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_034": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8345,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_035": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8438,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_036": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8531,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_037": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8624,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_038": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8717,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_039": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8810,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_040": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8903,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_041": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 8996,
    "w": 111,
    "h": 73
  },
  "N052_L3_BLOCK04_042": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9089,
    "w": 111,
    "h": 73
  },
  "N054_L3_WATERFALL_BLOCK05_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9182,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9279,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9376,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9473,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9570,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9667,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9764,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9861,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 9958,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10055,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10152,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10249,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10346,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10443,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10540,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10637,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10734,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_018": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10831,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_019": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 10928,
    "w": 91,
    "h": 77
  },
  "N054_L3_WATERFALL_BLOCK05_020": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 11025,
    "w": 91,
    "h": 77
  },
  "N055_L3_WATERFALL_BLOCK06_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 11122,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 11249,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 11376,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 11503,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 11630,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 11757,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 11884,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12011,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12138,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12265,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12392,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12519,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12646,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12773,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12900,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12900,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12900,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_018": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12900,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_019": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12900,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_020": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12900,
    "w": 90,
    "h": 107
  },
  "N055_L3_WATERFALL_BLOCK06_021": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 12900,
    "w": 90,
    "h": 107
  },
  "N056_L3_WATERFALL_BLOCK07_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 13027,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 13199,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 13371,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 13543,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 13715,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 13887,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 14059,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 14231,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 14403,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 14575,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 14747,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 14919,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 15091,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 15263,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 15435,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 15607,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 15779,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_018": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 15951,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_019": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 16123,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_020": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 16295,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_021": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 16467,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_022": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 16639,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_023": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 16811,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_024": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 16983,
    "w": 132,
    "h": 152
  },
  "N056_L3_WATERFALL_BLOCK07_025": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17155,
    "w": 132,
    "h": 152
  },
  "N057_L3_WATERFALL_BLOCK08_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17327,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17406,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17485,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17564,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17643,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17722,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17801,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17880,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 17959,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18038,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18117,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18196,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18275,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18354,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18433,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18512,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18591,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_018": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18670,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_019": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18749,
    "w": 70,
    "h": 59
  },
  "N057_L3_WATERFALL_BLOCK08_020": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18828,
    "w": 70,
    "h": 59
  },
  "N062_L3_TILE05_012": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 16013,
    "w": 128,
    "h": 128
  },
  "N063_L3_TILE06_013": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 16161,
    "w": 128,
    "h": 128
  },
  "N064_L3_TILE07_009": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 16309,
    "w": 128,
    "h": 128
  },
  "N065_L3_TILE08_010": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 16457,
    "w": 128,
    "h": 128
  },
  "N066_L3_CLOUD01": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 19499,
    "w": 51.6,
    "h": 40.3
  },
  "N067_L3_CLOUD02": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 19560,
    "w": 100.6,
    "h": 67.2
  },
  "N068_L3_CLOUD03": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 19648,
    "w": 62.1,
    "h": 54.3
  },
  "N069_L3_CLOUD04": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 19723,
    "w": 122.4,
    "h": 94.5
  },
  "N070_L3_WINDMILLBUILDING": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 19838,
    "w": 145.7,
    "h": 270.8
  },
  "N071_L3_WINDMILL_PROPELLER_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 20129,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 20327,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 20525,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 20723,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 20921,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 21119,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 21317,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 21515,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 21713,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 21911,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 22109,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 22307,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 22505,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 22703,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 22901,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 23099,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 23297,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_018": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 23495,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_019": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 23693,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_020": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 23891,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_021": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 24089,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_022": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 24287,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_023": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 24485,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_024": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 24683,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_025": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 24881,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_026": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 25079,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_027": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 25277,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_028": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 25475,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_029": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 25673,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_030": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 25871,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_031": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 26069,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_032": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 26267,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_033": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 26465,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_034": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 26663,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_035": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 26861,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_036": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 27059,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_037": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 27257,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_038": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 27455,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_039": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 27653,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_040": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 27851,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_041": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 28049,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_042": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 28247,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_043": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 28445,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_044": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 28643,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_045": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 28841,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_046": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 29039,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_047": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 29237,
    "w": 137,
    "h": 178
  },
  "N071_L3_WINDMILL_PROPELLER_048": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 29435,
    "w": 137,
    "h": 178
  },
  "N072_L3_ISLAND01": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 29633,
    "w": 98.3,
    "h": 77.8
  },
  "N074_L3_ISLAND03": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 29731,
    "w": 98.3,
    "h": 77.8
  },
  "N075_L3_ISLAND04": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 29829,
    "w": 98.3,
    "h": 188
  },
  "N076_L3_ISLAND05": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30037,
    "w": 98.4,
    "h": 94.3
  },
  "N077_L3_ISLAND06": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30152,
    "w": 98.4,
    "h": 77.8
  },
  "N078_L3_LEAVES_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30250,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30348,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30446,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30544,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30642,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30740,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30838,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 30936,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31034,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31132,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31230,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31328,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31426,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31524,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31622,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31720,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31818,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_018": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 31916,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_019": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32014,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_020": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32112,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_021": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32210,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_022": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32308,
    "w": 86,
    "h": 78
  },
  "N078_L3_LEAVES_023": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32406,
    "w": 86,
    "h": 78
  },
  "N080_L3_BIRDLOOP_001": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32504,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_002": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32624,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_003": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32744,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_004": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32864,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_005": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 32984,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_006": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 33104,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_007": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 33224,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_008": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 33344,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 33464,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 33584,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_011": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 33704,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 33824,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 33944,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_014": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 34064,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_015": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 34184,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_016": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 34304,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_017": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 34424,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_018": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 34544,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_019": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 34664,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_020": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 34784,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_021": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 34904,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_022": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 35024,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_023": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 35144,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_024": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 35264,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_025": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 35384,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_026": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 35504,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_027": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 35624,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_028": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 35744,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_029": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 35864,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_030": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 35984,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_031": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 36104,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_032": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 36224,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_033": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 36344,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_034": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 36464,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_035": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 36584,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_036": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 36704,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_037": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 36824,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_038": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 36944,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_039": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 37064,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_040": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 37184,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_041": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 37304,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_042": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 37424,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_043": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 37544,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_044": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 37664,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_045": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 37784,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_046": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 37904,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_047": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 38024,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_048": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 38144,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_049": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 38264,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_050": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 38384,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_051": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 38504,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_052": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 38624,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_053": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 38744,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_054": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 38864,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_055": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 38984,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_056": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 39104,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_057": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 39224,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_058": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 39344,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_059": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 39464,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_060": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 39584,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_061": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 39704,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_062": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 39824,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_063": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 39944,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_064": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 40064,
    "w": 51,
    "h": 100
  },
  "N080_L3_BIRDLOOP_065": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 40184,
    "w": 51,
    "h": 100
  },
  "N093_L4_CLOUD01": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20,
    "w": 110.4,
    "h": 77.8
  },
  "N094_L4_CLOUD02": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 118,
    "w": 129.9,
    "h": 65.5
  },
  "N095_L4_CLOUD03": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 204,
    "w": 83.6,
    "h": 62.4
  },
  "N096_L4_OWL_TREE": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 287,
    "w": 140,
    "h": 190
  },
  "N097_L4_SQUIRREL_TREE": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 497,
    "w": 144,
    "h": 346.4
  },
  "N098_L4_WATER": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 16605,
    "w": 128,
    "h": 108
  },
  "N099_L4_TILE01_002": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 16733,
    "w": 128,
    "h": 128
  },
  "N101_L4_TILE03_007": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 16881,
    "w": 128,
    "h": 128
  },
  "N105_L4_TILE07_009": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 17029,
    "w": 128,
    "h": 128
  },
  "N106_L4_TILE08_010": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 17177,
    "w": 128,
    "h": 128
  },
  "N107_L4_TILE09_013": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 17325,
    "w": 128,
    "h": 128
  },
  "N109_L4_TILE11_010": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 17473,
    "w": 128,
    "h": 128
  },
  "N110_L4_TILE12_012": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 17621,
    "w": 128,
    "h": 128
  },
  "N111_L4_TILE13_007": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 17769,
    "w": 128,
    "h": 128
  },
  "N114_L4_BLOCK01_FLOWER_001": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 864,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_002": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 918,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_003": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 972,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_004": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1026,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_005": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1080,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_006": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1134,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_007": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1188,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_008": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1242,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_009": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1296,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_010": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1350,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_011": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1404,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_012": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1458,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_013": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1512,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_014": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1566,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_015": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1620,
    "w": 70,
    "h": 34
  },
  "N114_L4_BLOCK01_FLOWER_016": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1674,
    "w": 70,
    "h": 34
  },
  "N115_L4_BLOCK02_08_FLOWER_0": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1728,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_1": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1781,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_10": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1834,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_11": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1887,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_12": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1940,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_13": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 1993,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_14": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2046,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_15": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2099,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_16": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2152,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_2": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2205,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_3": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2258,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_4": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2311,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_5": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2364,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_6": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2417,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_7": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2470,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_8": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2523,
    "w": 65,
    "h": 33
  },
  "N115_L4_BLOCK02_08_FLOWER_9": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2576,
    "w": 65,
    "h": 33
  },
  "N116_L4_BLOCK03_MOLE_001": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2629,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_002": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2764,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_003": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 2899,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_004": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 3034,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_005": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 3169,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_006": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 3304,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_007": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 3439,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_008": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 3574,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_009": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 3709,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_010": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 3844,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_011": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 3979,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_012": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 4114,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_013": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 4249,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_014": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 4384,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_015": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 4519,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_016": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 4654,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_017": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 4789,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_018": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 4924,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_019": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 5059,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_020": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 5194,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_021": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 5329,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_022": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 5464,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_023": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 5599,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_024": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 5734,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_025": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 5869,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_026": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 6004,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_027": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 6139,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_028": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 6274,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_029": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 6409,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_030": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 6544,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_031": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 6679,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_032": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 6814,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_033": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 6949,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_034": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 7084,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_035": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 7219,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_036": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 7354,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_037": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 7489,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_038": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 7624,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_039": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 7759,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_040": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 7894,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_041": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 8029,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_042": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 8164,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_043": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 8299,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_044": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 8434,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_045": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 8569,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_046": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 8704,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_047": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 8839,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_048": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 8974,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_049": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 9109,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_050": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 9244,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_051": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 9379,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_052": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 9514,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_053": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 9649,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_054": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 9784,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_055": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 9919,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_056": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 10054,
    "w": 78,
    "h": 115
  },
  "N116_L4_BLOCK03_MOLE_057": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 10189,
    "w": 78,
    "h": 115
  },
  "N117_L4_BLOCK04_FLOWER_001": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 20,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_002": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 90,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_003": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 160,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_004": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 230,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_005": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 300,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_006": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 370,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_007": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 440,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_008": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 510,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_009": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 580,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_010": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 650,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_011": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 720,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_012": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 790,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_013": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 860,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_014": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 930,
    "w": 92,
    "h": 50
  },
  "N117_L4_BLOCK04_FLOWER_015": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1000,
    "w": 92,
    "h": 50
  },
  "N118_L4_BLOCK05_LOGS_0": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 10324,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_1": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 10430,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_10": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 10536,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_11": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 10642,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_12": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 10748,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_13": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 10854,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_14": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 10960,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_15": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 11066,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_16": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 11172,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_17": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 11278,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_18": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 11384,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_19": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 11490,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_2": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 11596,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_20": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 11702,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_21": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 11808,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_22": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 11914,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_23": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12020,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_3": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12126,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_4": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12232,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_5": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12338,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_6": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12444,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_7": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12550,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_8": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12656,
    "w": 58,
    "h": 86
  },
  "N118_L4_BLOCK05_LOGS_9": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12762,
    "w": 58,
    "h": 86
  },
  "N119_L4_BLOCK06_FLOWER_001": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12868,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_002": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 12951,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_003": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13034,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_004": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13117,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_005": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13200,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_006": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13283,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_007": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13366,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_008": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13449,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_009": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13532,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_010": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13615,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_011": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13698,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_012": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13781,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_013": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13864,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_014": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 13947,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_015": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14030,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_016": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14113,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_017": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14196,
    "w": 91,
    "h": 63
  },
  "N119_L4_BLOCK06_FLOWER_018": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14279,
    "w": 91,
    "h": 63
  },
  "N120_L4_BLOCK07_FLOWER_001": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1070,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_002": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1175,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_003": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1280,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_004": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1385,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_005": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1490,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_006": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1595,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_007": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1700,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_008": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1805,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_009": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 1910,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_010": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2015,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_011": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2120,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_012": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2225,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_013": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2330,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_014": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2435,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_015": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2540,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_016": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2645,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_017": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2750,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_018": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2855,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_019": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 2960,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_020": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 3065,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_021": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 3170,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_022": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 3275,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_023": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 3380,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_024": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 3485,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_025": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 3590,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_026": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 3695,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_027": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 3800,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_028": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 3905,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_029": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4010,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_030": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4115,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_031": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4220,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_032": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4325,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_033": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4430,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_034": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4535,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_035": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4640,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_036": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4745,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_037": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4850,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_038": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 4955,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_039": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5060,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_040": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5165,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_041": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5270,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_042": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5375,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_043": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5480,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_044": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5585,
    "w": 93,
    "h": 85
  },
  "N120_L4_BLOCK07_FLOWER_045": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5690,
    "w": 93,
    "h": 85
  },
  "N121_L4_BLOCK09_15_MUSH01_001": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14362,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_002": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14439,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_003": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14516,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_004": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14593,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_005": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14670,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_006": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14747,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_007": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14824,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_008": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14901,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_009": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 14978,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_010": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15055,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_011": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15132,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_012": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15209,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_013": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15286,
    "w": 37,
    "h": 57
  },
  "N121_L4_BLOCK09_15_MUSH01_014": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15363,
    "w": 37,
    "h": 57
  },
  "N122_L4_BLOCK09_15_MUSH02_001": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15440,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_002": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15485,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_003": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15530,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_004": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15575,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_005": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15620,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_006": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15665,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_007": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15710,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_008": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15755,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_009": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15800,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_010": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15845,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_011": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15890,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_012": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15935,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_013": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 15980,
    "w": 19,
    "h": 25
  },
  "N122_L4_BLOCK09_15_MUSH02_014": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16025,
    "w": 19,
    "h": 25
  },
  "N123_L4_BLOCK10_FLOWER_TREE_001": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 20,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_002": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 215,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_003": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 410,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_004": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 605,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_005": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 800,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_006": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 995,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_007": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 1190,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_008": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 1385,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_009": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 1580,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_010": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 1775,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_011": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 1970,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_012": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 2165,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_013": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 2360,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_014": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 2555,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_015": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 2750,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_016": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 2945,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_017": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 3140,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_018": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 3335,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_019": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 3530,
    "w": 60,
    "h": 175
  },
  "N123_L4_BLOCK10_FLOWER_TREE_020": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 3725,
    "w": 60,
    "h": 175
  },
  "N124_L4_FISH_001": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 3920,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_002": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 4034,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_003": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 4148,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_004": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 4262,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_005": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 4376,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_006": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 4490,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_007": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 4604,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_008": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 4718,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_009": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 4832,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_010": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 4946,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_011": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 5060,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_012": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 5174,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_013": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 5288,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_014": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 5402,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_015": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 5516,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_016": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 5630,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_017": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 5744,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_018": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 5858,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_019": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 5972,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_020": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 6086,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_021": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 6200,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_022": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 6314,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_023": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 6428,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_024": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 6542,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_025": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 6656,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_026": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 6770,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_027": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 6884,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_028": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 6998,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_029": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 7112,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_030": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 7226,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_031": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 7340,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_032": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 7454,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_033": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 7568,
    "w": 97,
    "h": 94
  },
  "N124_L4_FISH_034": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 7682,
    "w": 97,
    "h": 94
  },
  "N125_L4_BLOCK11_POND_001": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 7796,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_002": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 7893,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_003": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 7990,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_004": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8087,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_005": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8184,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_006": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8281,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_007": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8378,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_008": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8475,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_009": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8572,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_010": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8669,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_011": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8766,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_012": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8863,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_013": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 8960,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_014": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9057,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_015": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9154,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_016": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9251,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_017": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9348,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_018": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9445,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_019": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9542,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_020": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9639,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_021": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9736,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_022": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9833,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_023": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 9930,
    "w": 68,
    "h": 77
  },
  "N125_L4_BLOCK11_POND_024": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 10027,
    "w": 68,
    "h": 77
  },
  "N126_L4_BLOCK11_DECO_001": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16070,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_002": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16102,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_003": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16134,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_004": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16166,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_005": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16198,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_006": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16230,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_007": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16262,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_008": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16294,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_009": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16326,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_010": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16358,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_011": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16390,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_012": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16422,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_013": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16454,
    "w": 59,
    "h": 12
  },
  "N126_L4_BLOCK11_DECO_014": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16486,
    "w": 59,
    "h": 12
  },
  "N127_L4_BLOCK13_FLOWER001": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16518,
    "w": 59,
    "h": 62
  },
  "N127_L4_BLOCK13_FLOWER002": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16600,
    "w": 59,
    "h": 62
  },
  "N127_L4_BLOCK13_FLOWER003": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16682,
    "w": 59,
    "h": 62
  },
  "N127_L4_BLOCK13_FLOWER004": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16764,
    "w": 59,
    "h": 62
  },
  "N127_L4_BLOCK13_FLOWER005": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16846,
    "w": 59,
    "h": 62
  },
  "N127_L4_BLOCK13_FLOWER006": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 16928,
    "w": 59,
    "h": 62
  },
  "N127_L4_BLOCK13_FLOWER007": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17010,
    "w": 59,
    "h": 62
  },
  "N127_L4_BLOCK13_FLOWER008": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17092,
    "w": 59,
    "h": 62
  },
  "N127_L4_BLOCK13_FLOWER009": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17174,
    "w": 59,
    "h": 62
  },
  "N127_L4_BLOCK13_FLOWER010": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17256,
    "w": 59,
    "h": 62
  },
  "N128_L4_BLOCK14_FLOWER_TREE_001": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 10124,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_002": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 10311,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_003": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 10498,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_004": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 10685,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_005": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 10872,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_006": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 11059,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_007": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 11246,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_008": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 11433,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_009": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 11620,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_010": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 11807,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_011": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 11994,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_012": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 12181,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_013": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 12368,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_014": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 12555,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_015": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 12742,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_016": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 12929,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_017": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 13116,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_018": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 13303,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_019": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 13490,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_020": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 13677,
    "w": 60,
    "h": 167
  },
  "N128_L4_BLOCK14_FLOWER_TREE_021": {
    "sheet": "four-six-sprite.svg",
    "sheetIndex": 9,
    "x": 20,
    "y": 13864,
    "w": 60,
    "h": 167
  },
  "N129_L4_SQUIRREL_001": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17338,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_002": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17469,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_003": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17600,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_004": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17731,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_005": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17862,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_006": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17993,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_007": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 18124,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_008": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 18255,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_009": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 18386,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_010": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 18517,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_011": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 18648,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_012": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 18779,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_013": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 18910,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_014": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 19041,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_015": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 19172,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_016": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 19303,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_017": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 19434,
    "w": 59,
    "h": 111
  },
  "N129_L4_SQUIRREL_018": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 17338,
    "w": 59,
    "h": 111
  },
  "N130_L4_OWL_HEAD_001": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 19565,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_004": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 19668,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_005": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 19771,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_006": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 19874,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_007": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 19977,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_011": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20080,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_012": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20183,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_013": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20286,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_014": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20389,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_015": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20492,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_019": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20595,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_020": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20698,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_021": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20801,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_028": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 20904,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_029": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 21007,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_030": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 21110,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_031": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 21213,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_032": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 21316,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_033": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 21419,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_034": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 21522,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_035": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 21625,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_037": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 21728,
    "w": 92,
    "h": 83
  },
  "N130_L4_OWL_HEAD_038": {
    "sheet": "four-sprite.svg",
    "sheetIndex": 7,
    "x": 20,
    "y": 21831,
    "w": 92,
    "h": 83
  },
  "N131_L5_CLOUD01": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 20,
    "w": 101.7,
    "h": 100
  },
  "N132_L5_CLOUD02": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 140,
    "w": 101.4,
    "h": 69.8
  },
  "N133_L5_CLOUD03": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 230,
    "w": 55.2,
    "h": 44.4
  },
  "N134_L5_CLOUD04": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 295,
    "w": 166.5,
    "h": 100.5
  },
  "N135_L5_CLOUD05": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 416,
    "w": 89.9,
    "h": 109.6
  },
  "N158_L5_BLOCK01_FLOORDECO_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 546,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 600,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 654,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 708,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 762,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 816,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 870,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 924,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 978,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1032,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1086,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1140,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1194,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1248,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_015": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1302,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_016": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1356,
    "w": 70,
    "h": 34
  },
  "N158_L5_BLOCK01_FLOORDECO_017": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1410,
    "w": 70,
    "h": 34
  },
  "N159_L5_BLOCK02_FLOWER_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1464,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1517,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1570,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1623,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1676,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1729,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1782,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1835,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1888,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1941,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 1994,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2047,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2100,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2153,
    "w": 65,
    "h": 33
  },
  "N159_L5_BLOCK02_FLOWER_015": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2206,
    "w": 65,
    "h": 33
  },
  "N160_L5_BLOCK03_FLOWER_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2259,
    "w": 62,
    "h": 32
  },
  "N160_L5_BLOCK03_FLOWER_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2311,
    "w": 62,
    "h": 32
  },
  "N160_L5_BLOCK03_FLOWER_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2363,
    "w": 62,
    "h": 32
  },
  "N160_L5_BLOCK03_FLOWER_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2415,
    "w": 62,
    "h": 32
  },
  "N160_L5_BLOCK03_FLOWER_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2467,
    "w": 62,
    "h": 32
  },
  "N160_L5_BLOCK03_FLOWER_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2519,
    "w": 62,
    "h": 32
  },
  "N160_L5_BLOCK03_FLOWER_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2571,
    "w": 62,
    "h": 32
  },
  "N160_L5_BLOCK03_FLOWER_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2623,
    "w": 62,
    "h": 32
  },
  "N160_L5_BLOCK03_FLOWER_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2675,
    "w": 62,
    "h": 32
  },
  "N161_L5_BLOCK04_FLOWER_001": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5795,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_002": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5856,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_003": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5917,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_004": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 5978,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_005": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 6039,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_006": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 6100,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_007": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 6161,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_008": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 6222,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_009": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 6283,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_010": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 6344,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_011": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 6405,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_012": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 6466,
    "w": 57,
    "h": 41
  },
  "N161_L5_BLOCK04_FLOWER_013": {
    "sheet": "four-five-sprite.svg",
    "sheetIndex": 8,
    "x": 20,
    "y": 6527,
    "w": 57,
    "h": 41
  },
  "N167_L5_BLOCK10_FLOORDECO_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2727,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2782,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2837,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2892,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 2947,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3002,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3057,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3112,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3167,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3222,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3277,
    "w": 70,
    "h": 35
  },
  "N167_L5_BLOCK10_FLOORDECO_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3332,
    "w": 70,
    "h": 35
  },
  "N169_L5_BLOCK12_TREE_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3387,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3575,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3763,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 3951,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 4139,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 4327,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 4515,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 4703,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 4891,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 5079,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 5267,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 5455,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 5643,
    "w": 95,
    "h": 168
  },
  "N169_L5_BLOCK12_TREE_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 5831,
    "w": 95,
    "h": 168
  },
  "N173_L5_BLOCK16_FROG_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6019,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6090,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6161,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6232,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6303,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6374,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6445,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6516,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6587,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6658,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6729,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6800,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6871,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 6942,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_015": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7013,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_016": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7084,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_017": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7155,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_018": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7226,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_019": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7297,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_020": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7368,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_021": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7439,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_022": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7510,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_023": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7581,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_024": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7652,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_025": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7723,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_026": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7794,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_027": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7865,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_028": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 7936,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_029": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8007,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_030": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8078,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_031": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8149,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_032": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8220,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_033": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8291,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_034": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8362,
    "w": 41,
    "h": 51
  },
  "N173_L5_BLOCK16_FROG_035": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8433,
    "w": 41,
    "h": 51
  },
  "N174_L5_BLOCK17_PONDFROG_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8504,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8662,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8820,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 8978,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 9136,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 9294,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 9452,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 9610,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 9768,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 9926,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 10084,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 10242,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 10400,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 10558,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_015": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 10716,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_016": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 10874,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_017": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 11032,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_018": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 11190,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_019": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 11348,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_020": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 11506,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_021": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 11664,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_022": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 11822,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_023": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 11980,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_024": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 12138,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_025": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 12296,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_026": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 12454,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_027": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 12612,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_028": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 12770,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_029": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 12928,
    "w": 110,
    "h": 138
  },
  "N174_L5_BLOCK17_PONDFROG_030": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13086,
    "w": 110,
    "h": 138
  },
  "N175_L5_BLOCK17_POND_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13244,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13304,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13364,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13424,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13484,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13544,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13604,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13664,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13724,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13784,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13844,
    "w": 82,
    "h": 40
  },
  "N175_L5_BLOCK17_POND_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13904,
    "w": 82,
    "h": 40
  },
  "N176_L5_BLOCK17_WATERFALL_001": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 20,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_002": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 184,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_003": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 348,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_004": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 512,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_005": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 676,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_006": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 840,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_007": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 1004,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_008": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 1168,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_009": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 1332,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_010": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 1496,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_011": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 1660,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_012": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 1824,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_013": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 1988,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_014": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 2152,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_015": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 2316,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_016": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 2480,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_017": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 2644,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_018": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 2808,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_019": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 2972,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_020": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 3136,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_021": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 3300,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_022": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 3464,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_023": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 3628,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_024": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 3792,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_025": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 3956,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_026": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 4120,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_027": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 4284,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_028": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 4448,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_029": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 4612,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_030": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 4776,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_031": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 4940,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_032": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 5104,
    "w": 30,
    "h": 144
  },
  "N176_L5_BLOCK17_WATERFALL_033": {
    "sheet": "three-five-sprite.svg",
    "sheetIndex": 6,
    "x": 20,
    "y": 5268,
    "w": 30,
    "h": 144
  },
  "N178_L5_BLOCK19_DUCKLINGS_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 13964,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14042,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14120,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14198,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14276,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14354,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14432,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14510,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14588,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14666,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14744,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14822,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14666,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14666,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_015": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14666,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_016": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14666,
    "w": 82,
    "h": 58
  },
  "N178_L5_BLOCK19_DUCKLINGS_017": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14666,
    "w": 82,
    "h": 58
  },
  "N179_L5_BLOCK20_DUCK_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 14900,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 15024,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 15148,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 15272,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 15396,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 15520,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 15644,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 15768,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 15892,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 16016,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 16140,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 16264,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 16388,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 16512,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_015": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 16636,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_016": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 16760,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_017": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 16884,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_018": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 17008,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_019": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 17132,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_020": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 17256,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_021": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 17380,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_022": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 17504,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_023": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 17628,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_024": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 17752,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_025": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 17876,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_026": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 18000,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_027": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 18124,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_028": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 18248,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_029": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 18372,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_030": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 18496,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_031": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 18620,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_032": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 18744,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_033": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 18868,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_034": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 18992,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_035": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 19116,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_036": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 19240,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_037": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 19364,
    "w": 93,
    "h": 104
  },
  "N179_L5_BLOCK20_DUCK_038": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 19488,
    "w": 93,
    "h": 104
  },
  "N183_L5_ISLAND01": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 19612,
    "w": 191.9,
    "h": 157.4
  },
  "N184_L5_ISLAND01_DRAGONFLY_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 19790,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 19952,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 20114,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 20276,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 20438,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 20600,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 20762,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 20924,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 21086,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 21248,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 21410,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 21572,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 21734,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 21896,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_015": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 22058,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_016": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 22220,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_017": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 22382,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_018": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 22544,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_019": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 22706,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_020": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 22868,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_021": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 23030,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_022": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 23192,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_023": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 23354,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_024": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 23516,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_025": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 23678,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_026": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 23840,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_027": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 24002,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_028": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 24164,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_029": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 24326,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_030": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 24488,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_031": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 24650,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_032": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 24812,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_033": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 24974,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_034": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 25136,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_035": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 25298,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_036": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 25460,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_037": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 25622,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_038": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 25784,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_039": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 25946,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_040": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 26108,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_041": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 26270,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_042": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 26432,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_043": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 26594,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_044": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 26756,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_045": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 26918,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_046": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 27080,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_047": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 27242,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_048": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 27404,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_049": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 27566,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_050": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 27728,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_051": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 27890,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_052": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 28052,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_053": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 28214,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_054": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 28376,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_055": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 28538,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_056": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 28700,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_057": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 28862,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_058": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 29024,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_059": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 29186,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_060": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 29348,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_061": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 29510,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_062": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 29672,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_063": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 29834,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_064": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 29996,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_065": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 30158,
    "w": 238,
    "h": 142
  },
  "N184_L5_ISLAND01_DRAGONFLY_066": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 30320,
    "w": 238,
    "h": 142
  },
  "N185_L5_ISLAND02": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 30482,
    "w": 180,
    "h": 280.7
  },
  "N186_L5_ISLAND02_TURBINE_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 30783,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 30903,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 31023,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 31143,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 31263,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 31383,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 31503,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 31623,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 31743,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 31863,
    "w": 82,
    "h": 100
  },
  "N186_L5_ISLAND02_TURBINE_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 31983,
    "w": 82,
    "h": 100
  },
  "N187_L5_ISLAND02_WATERFALL_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 32103,
    "w": 23,
    "h": 98
  },
  "N187_L5_ISLAND02_WATERFALL_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 32221,
    "w": 23,
    "h": 98
  },
  "N187_L5_ISLAND02_WATERFALL_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 32339,
    "w": 23,
    "h": 98
  },
  "N187_L5_ISLAND02_WATERFALL_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 32457,
    "w": 23,
    "h": 98
  },
  "N187_L5_ISLAND02_WATERFALL_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 32575,
    "w": 23,
    "h": 98
  },
  "N187_L5_ISLAND02_WATERFALL_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 32693,
    "w": 23,
    "h": 98
  },
  "N187_L5_ISLAND02_WATERFALL_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 32811,
    "w": 23,
    "h": 98
  },
  "N187_L5_ISLAND02_WATERFALL_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 32929,
    "w": 23,
    "h": 98
  },
  "N187_L5_ISLAND02_WATERFALL_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 33047,
    "w": 23,
    "h": 98
  },
  "N187_L5_ISLAND02_WATERFALL_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 33165,
    "w": 23,
    "h": 98
  },
  "N188_L5_LAKE_FROG_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 33283,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 33446,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 33609,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 33772,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 33935,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 34098,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 34261,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 34424,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 34587,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 34750,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_016": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 34913,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_017": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 35076,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_018": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 35239,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_019": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 35402,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_020": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 35565,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_021": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 35728,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_022": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 35891,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_023": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36054,
    "w": 110,
    "h": 143
  },
  "N188_L5_LAKE_FROG_024": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36217,
    "w": 110,
    "h": 143
  },
  "N191_L5_WATER_LILLY_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36380,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36426,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36472,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36518,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36564,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36610,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36656,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36702,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36748,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36794,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36840,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36886,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36932,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 36978,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_015": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37024,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_016": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37070,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_017": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37116,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_018": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37162,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_019": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37208,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_020": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37254,
    "w": 48,
    "h": 26
  },
  "N191_L5_WATER_LILLY_021": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37300,
    "w": 48,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_001": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37346,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_002": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37392,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_003": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37438,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_004": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37484,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_005": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37530,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_006": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37576,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_007": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37622,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_008": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37668,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_009": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37714,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_010": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37760,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_011": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37806,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_012": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37852,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_013": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37898,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_014": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37944,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_015": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 37990,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_016": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38036,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_017": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38082,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_018": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38128,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_019": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38174,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_020": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38220,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_021": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38266,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_022": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38312,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_023": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38358,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_024": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38404,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_025": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38450,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_026": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38496,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_027": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38542,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_028": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38588,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_029": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38634,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_030": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38680,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_031": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38726,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_032": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38772,
    "w": 96,
    "h": 26
  },
  "N192_L5_ISLAND02_STREAM_033": {
    "sheet": "five-sprite.svg",
    "sheetIndex": 10,
    "x": 20,
    "y": 38818,
    "w": 96,
    "h": 26
  },
  "N193_L6_CLOUD01": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20,
    "w": 104.6,
    "h": 91.5
  },
  "N194_L6_CLOUD02": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 132,
    "w": 97.4,
    "h": 58.2
  },
  "N195_L6_CLOUD03": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 211,
    "w": 42.4,
    "h": 22.2
  },
  "N196_L6_CLOUD04": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 254,
    "w": 52.4,
    "h": 82.3
  },
  "N197_L6_CLOUD05": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 357,
    "w": 122.5,
    "h": 148.6
  },
  "N198_L6_CLOUD06": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 526,
    "w": 56.4,
    "h": 60.3
  },
  "N199_L6_CLOUD07": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 607,
    "w": 121.5,
    "h": 102.6
  },
  "N200_L6_ISLAND04_SHEEP_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 730,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 830,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 930,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1030,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1130,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1230,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1330,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1430,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1530,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_013": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1630,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_014": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1730,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_015": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1830,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_016": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 1930,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_017": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2030,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_018": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2130,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_019": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2230,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_020": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2330,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_021": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2430,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_022": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2530,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_023": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2630,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_024": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2730,
    "w": 59,
    "h": 80
  },
  "N200_L6_ISLAND04_SHEEP_025": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2830,
    "w": 59,
    "h": 80
  },
  "N202_L6_ISLAND03_STRINGHAY_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 2930,
    "w": 41,
    "h": 184
  },
  "N202_L6_ISLAND03_STRINGHAY_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 3134,
    "w": 41,
    "h": 184
  },
  "N202_L6_ISLAND03_STRINGHAY_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 3338,
    "w": 41,
    "h": 184
  },
  "N202_L6_ISLAND03_STRINGHAY_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 3542,
    "w": 41,
    "h": 184
  },
  "N202_L6_ISLAND03_STRINGHAY_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 3746,
    "w": 41,
    "h": 184
  },
  "N202_L6_ISLAND03_STRINGHAY_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 3950,
    "w": 41,
    "h": 184
  },
  "N202_L6_ISLAND03_STRINGHAY_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 4154,
    "w": 41,
    "h": 184
  },
  "N202_L6_ISLAND03_STRINGHAY_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 4358,
    "w": 41,
    "h": 184
  },
  "N202_L6_ISLAND03_STRINGHAY_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 4562,
    "w": 41,
    "h": 184
  },
  "N202_L6_ISLAND03_STRINGHAY_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 4766,
    "w": 41,
    "h": 184
  },
  "N205_L6_ISLAND01_PIG_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 4970,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 5107,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 5244,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 5381,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 5518,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 5655,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 5792,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 5929,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 6066,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 6203,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 6340,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 6477,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_013": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 6614,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_014": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 6751,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_015": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 6888,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_016": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 7025,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_017": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 7162,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_018": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 7299,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_019": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 7436,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_020": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 7573,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_021": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 7710,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_022": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 7847,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_023": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 7984,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_024": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 8121,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_025": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 8258,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_026": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 8395,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_027": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 8532,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_028": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 8669,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_029": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 8806,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_030": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 8943,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_031": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 9080,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_032": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 9217,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_033": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 9354,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_034": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 9491,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_035": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 9628,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_036": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 9765,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_037": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 9902,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_038": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 10039,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_039": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 10176,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_040": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 10313,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_041": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 10450,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_042": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 10587,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_043": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 10724,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_044": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 10861,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_045": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 10998,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_046": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 11135,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_047": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 11272,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_048": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 11409,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_049": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 11546,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_050": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 11683,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_051": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 11820,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_052": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 11957,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_053": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 12094,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_054": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 12231,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_055": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 12368,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_056": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 12505,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_057": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 12642,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_058": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 12779,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_059": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 12916,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_060": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 13053,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_061": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 13190,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_062": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 13327,
    "w": 137,
    "h": 117
  },
  "N205_L6_ISLAND01_PIG_063": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 13464,
    "w": 137,
    "h": 117
  },
  "N210_L6_BLOCK10_MILL_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 13601,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 13763,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 13925,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 14087,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 14249,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 14411,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 14573,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 14735,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 14897,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 15059,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 15221,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 15383,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_013": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 15545,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_014": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 15707,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_015": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 15869,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_016": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 16031,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_017": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 16193,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_018": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 16355,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_019": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 16517,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_020": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 16679,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_021": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 16841,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_022": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17003,
    "w": 66,
    "h": 142
  },
  "N210_L6_BLOCK10_MILL_023": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17165,
    "w": 66,
    "h": 142
  },
  "N211_L6_BLOCK11_BUCKETS_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17327,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17407,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17487,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17567,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17647,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17727,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17807,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17887,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 17967,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18047,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18127,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18207,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_013": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18287,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_014": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18367,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_015": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18447,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_016": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18527,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_017": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18607,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_018": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18687,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_019": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18767,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_020": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18847,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_021": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 18927,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_022": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19007,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_023": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19087,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_024": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19167,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_025": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19247,
    "w": 66,
    "h": 60
  },
  "N211_L6_BLOCK11_BUCKETS_026": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19327,
    "w": 66,
    "h": 60
  },
  "N212_L6_BLOCK12_SHEEP_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19407,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19509,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19611,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19713,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19815,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 19917,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20019,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20121,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20223,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20325,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20427,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20529,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_013": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20631,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_014": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20733,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_015": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20835,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_016": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 20937,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_017": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21039,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_018": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21141,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_019": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21243,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_020": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21345,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_021": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21447,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_022": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21549,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_023": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21651,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_024": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21753,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_025": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21855,
    "w": 59,
    "h": 82
  },
  "N212_L6_BLOCK12_SHEEP_026": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 21957,
    "w": 59,
    "h": 82
  },
  "N213_L6_BLOCK13_15_CHICKS_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22059,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22141,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22223,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22305,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22387,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22469,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22551,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22633,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22715,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22797,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22879,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 22961,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_013": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23043,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_014": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23125,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_015": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23207,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_016": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23289,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_017": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23371,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_018": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23453,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_019": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23535,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_020": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23617,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_021": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23699,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_022": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23781,
    "w": 80,
    "h": 62
  },
  "N213_L6_BLOCK13_15_CHICKS_023": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23617,
    "w": 80,
    "h": 62
  },
  "N214_L6_BLOCK14_CHICKEN_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23863,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 23955,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24047,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24139,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24231,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24323,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24415,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24507,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24599,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24691,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24783,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24875,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_013": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24967,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_014": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25059,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_015": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25151,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_016": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25243,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_017": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25335,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_018": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25427,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_019": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25519,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_020": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25611,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_021": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25703,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_022": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25795,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_023": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25887,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_024": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25979,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_025": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26071,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_026": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26163,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_027": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26255,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_028": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26347,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_029": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26439,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_030": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26531,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_031": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26623,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_032": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24783,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_033": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26715,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_034": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26807,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_035": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26899,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_036": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 26991,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_037": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 27083,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_038": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 24783,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_039": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 27175,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_040": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 27267,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_041": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 27359,
    "w": 41,
    "h": 72
  },
  "N214_L6_BLOCK14_CHICKEN_042": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 25427,
    "w": 41,
    "h": 72
  },
  "N215_L6_BLOCK16_18_PIGLET_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 27451,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 27563,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 27675,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 27787,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 27899,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 28011,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 28123,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 28235,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 28347,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 28459,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 28571,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 28683,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_013": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 28795,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_014": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 28907,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_015": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 29019,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_016": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 29131,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_017": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 29243,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_018": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 29355,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_019": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 29467,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_020": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 29579,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_021": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 29691,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_022": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 29803,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_023": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 29915,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_024": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30027,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_025": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30139,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_026": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30251,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_027": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30363,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_028": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30475,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_029": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30587,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_030": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30699,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_031": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30811,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_032": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30923,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_033": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 31035,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_034": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 31147,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_035": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 31259,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_036": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 31371,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_037": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 31483,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_038": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30923,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_039": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 31595,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_040": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 31707,
    "w": 117,
    "h": 92
  },
  "N215_L6_BLOCK16_18_PIGLET_041": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 30699,
    "w": 117,
    "h": 92
  },
  "N216_L6_BLOCK17_PIG_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 31819,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 31944,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 32069,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 32194,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 32319,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 32444,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 32569,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 32694,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 32819,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 32944,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 33069,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 33194,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_013": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 33319,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_014": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 33444,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_015": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 33569,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_016": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 33694,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_017": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 33819,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_018": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 33944,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_019": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 34069,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_020": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 34194,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_021": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 34319,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_022": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 34444,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_023": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 34569,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_024": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 34694,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_025": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 34819,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_026": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 34944,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_027": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35069,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_028": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35194,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_029": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35319,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_030": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35444,
    "w": 137,
    "h": 105
  },
  "N216_L6_BLOCK17_PIG_031": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35569,
    "w": 137,
    "h": 105
  },
  "N218_L6_BLOCK21_FLOWER_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35694,
    "w": 39,
    "h": 25
  },
  "N218_L6_BLOCK21_FLOWER_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35739,
    "w": 39,
    "h": 25
  },
  "N218_L6_BLOCK21_FLOWER_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35784,
    "w": 39,
    "h": 25
  },
  "N218_L6_BLOCK21_FLOWER_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35829,
    "w": 39,
    "h": 25
  },
  "N218_L6_BLOCK21_FLOWER_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35874,
    "w": 39,
    "h": 25
  },
  "N218_L6_BLOCK21_FLOWER_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35919,
    "w": 39,
    "h": 25
  },
  "N218_L6_BLOCK21_FLOWER_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 35964,
    "w": 39,
    "h": 25
  },
  "N218_L6_BLOCK21_FLOWER_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36009,
    "w": 39,
    "h": 25
  },
  "N219_L6_BLOCK21_FENCE_001": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36054,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_002": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36137,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_003": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36220,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_004": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36303,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_005": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36386,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_006": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36469,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_007": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36552,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_008": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36635,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_009": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36718,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_010": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36801,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_011": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36884,
    "w": 45,
    "h": 63
  },
  "N219_L6_BLOCK21_FENCE_012": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 36967,
    "w": 45,
    "h": 63
  },
  "PIG_ISLAND": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 37200,
    "w": 171.1,
    "h": 124.4
  },
  "PLANT_001": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 20,
    "w": 41,
    "h": 51
  },
  "PLANT_002": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 91,
    "w": 41,
    "h": 51
  },
  "PLANT_003": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 162,
    "w": 41,
    "h": 51
  },
  "PLANT_004": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 233,
    "w": 41,
    "h": 51
  },
  "PLANT_005": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 304,
    "w": 41,
    "h": 51
  },
  "PLANT_006": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 375,
    "w": 41,
    "h": 51
  },
  "PLANT_007": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 446,
    "w": 41,
    "h": 51
  },
  "PLANT_008": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 517,
    "w": 41,
    "h": 51
  },
  "PLANT_009": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 588,
    "w": 41,
    "h": 51
  },
  "PLANT_010": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 659,
    "w": 41,
    "h": 51
  },
  "PLANT_011": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 730,
    "w": 41,
    "h": 51
  },
  "PLANT_012": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 801,
    "w": 41,
    "h": 51
  },
  "PLANT_013": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 872,
    "w": 41,
    "h": 51
  },
  "PLANT_014": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 943,
    "w": 41,
    "h": 51
  },
  "PLANT_015": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 1014,
    "w": 41,
    "h": 51
  },
  "PLANT_016": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 1085,
    "w": 41,
    "h": 51
  },
  "PLANT_017": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 1156,
    "w": 41,
    "h": 51
  },
  "PLANT_018": {
    "sheet": "one-six-sprite.svg",
    "sheetIndex": 3,
    "x": 20,
    "y": 1227,
    "w": 41,
    "h": 51
  },
  "POND_ISLAND": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 37345,
    "w": 238.5,
    "h": 276.9
  },
  "PURPLE_DARK_LEFT_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 18361,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_LEFT_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 18509,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_LEFT_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 18657,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_LEFT_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 18805,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_LEFT_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 18953,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_LEFT_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 19101,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_LEFT_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 19249,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_LEFT_7": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 19397,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_LEFT_8": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 19545,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_RIGHT_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 19693,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_RIGHT_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 19841,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_RIGHT_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 19989,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_RIGHT_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 20137,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_RIGHT_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 20285,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_RIGHT_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 20433,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_RIGHT_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 20581,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 20729,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 20877,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 21025,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 21173,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 21321,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 21469,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 21617,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_7": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 21765,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_8": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 21913,
    "w": 128,
    "h": 128
  },
  "PURPLE_DARK_TOP_9": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 22061,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 22209,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 22357,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_10": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 22505,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_11": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 22653,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_12": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 22801,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 22949,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 23097,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 23245,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 23393,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 23541,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_7": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 23689,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_8": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 23837,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_LEFT_9": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 23985,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_RIGHT_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 24133,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_RIGHT_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 24281,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_RIGHT_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 24429,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_RIGHT_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 24577,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_RIGHT_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 24725,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_RIGHT_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 24873,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_RIGHT_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 20581,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_TOP_0": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 25021,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_TOP_1": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 25169,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_TOP_2": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 25317,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_TOP_3": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 25465,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_TOP_4": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 25613,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_TOP_5": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 25761,
    "w": 128,
    "h": 128
  },
  "PURPLE_LIGHT_TOP_6": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 20581,
    "w": 128,
    "h": 128
  },
  "SHADOW_LEFT": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 14441,
    "w": 64,
    "h": 32
  },
  "SHADOW_RIGHT": {
    "sheet": "shared-sprite.svg",
    "sheetIndex": 1,
    "x": 20,
    "y": 14493,
    "w": 64,
    "h": 32
  },
  "SHED_ISLAND": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 37642,
    "w": 198,
    "h": 253.9
  },
  "SHEEP_ISLAND": {
    "sheet": "six-sprite.svg",
    "sheetIndex": 11,
    "x": 20,
    "y": 37916,
    "w": 116.2,
    "h": 103.9
  },
  "THREE_SPRITE_N062_L3_TILE05_012": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 18907,
    "w": 128,
    "h": 128
  },
  "THREE_SPRITE_N063_L3_TILE06_013": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 19055,
    "w": 128,
    "h": 128
  },
  "THREE_SPRITE_N064_L3_TILE07_009": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 19203,
    "w": 128,
    "h": 128
  },
  "THREE_SPRITE_N065_L3_TILE08_010": {
    "sheet": "three-sprite.svg",
    "sheetIndex": 5,
    "x": 20,
    "y": 19351,
    "w": 128,
    "h": 128
  },
  "TREE_0": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 6501,
    "w": 120,
    "h": 170
  },
  "TREE_1": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 6691,
    "w": 114,
    "h": 182
  },
  "TREE_10": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 6893,
    "w": 114,
    "h": 182
  },
  "TREE_11": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 7095,
    "w": 114,
    "h": 182
  },
  "TREE_12": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 7297,
    "w": 114,
    "h": 182
  },
  "TREE_13": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 7499,
    "w": 114,
    "h": 182
  },
  "TREE_14": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 7701,
    "w": 114,
    "h": 182
  },
  "TREE_15": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 7903,
    "w": 114,
    "h": 182
  },
  "TREE_16": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 8105,
    "w": 114,
    "h": 182
  },
  "TREE_17": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 8307,
    "w": 114,
    "h": 182
  },
  "TREE_18": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 8509,
    "w": 114,
    "h": 182
  },
  "TREE_19": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 8711,
    "w": 114,
    "h": 182
  },
  "TREE_2": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 8913,
    "w": 114,
    "h": 182
  },
  "TREE_20": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 9115,
    "w": 114,
    "h": 182
  },
  "TREE_21": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 9317,
    "w": 114,
    "h": 182
  },
  "TREE_3": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 9519,
    "w": 114,
    "h": 182
  },
  "TREE_4": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 9721,
    "w": 114,
    "h": 182
  },
  "TREE_5": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 9923,
    "w": 114,
    "h": 182
  },
  "TREE_6": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 10125,
    "w": 114,
    "h": 182
  },
  "TREE_7": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 10327,
    "w": 114,
    "h": 182
  },
  "TREE_8": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 10529,
    "w": 114,
    "h": 182
  },
  "TREE_9": {
    "sheet": "one-sprite.svg",
    "sheetIndex": 2,
    "x": 20,
    "y": 10731,
    "w": 114,
    "h": 182
  }
};

/** Where the audio lives and in what formats. */
export const audioFile = {
  "basePath": "/logos/2017/logo17/",
  "baseName": "sounds",
  "formats": [
    ".ogg",
    ".mp3"
  ]
};

/** Sound clips: name, start and duration within the sprite. */
export const clips = [
  {
    "name": "BLOCKS_IN",
    "startMs": 0,
    "durationMs": 540.792
  },
  {
    "name": "BLOCKS_OUT",
    "startMs": 1540.792,
    "durationMs": 743
  },
  {
    "name": "CARROT",
    "startMs": 3283.792,
    "durationMs": 542.021
  },
  {
    "name": "JUMP",
    "startMs": 4825.813,
    "durationMs": 502.583
  },
  {
    "name": "MUSIC",
    "startMs": 6328.396,
    "durationMs": 64070.771
  }
];

/** Translations, one entry per locale. */
