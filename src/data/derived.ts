/**
 * Everything worked out from the original rather than copied from it, plus the assembly the rest
 * of the app reads. Each group says how it was worked out, so a wrong guess can be checked.
 *
 * Generated - do not edit by hand.
 */

import type { AtlasFile, AudioFile, LevelsFile, SheetsFile, TilesFile } from '../core/assets';
import * as raw from './extracted';

/**
 * Per level: `puzzleIndex` is the position in the list, `id` and `mapFile` come from the map
 * file name, `spriteSheets` maps sheet ids to names, `toolboxBlocks` and `workspace` are
 * parsed out of the XML, `introOverlay` follows from whether a tutorial exists for that level,
 * and `blocklyFooterHeightPx` is read out of a conditional in the original's code.
 */
const levelExtras = [
  {
    "puzzleIndex": 0,
    "id": "L1",
    "mapFile": "L1.json",
    "spriteSheets": [
      "one-sprite.svg",
      "one-six-sprite.svg"
    ],
    "toolboxBlocks": [
      {
        "type": "logo17_move_forward"
      }
    ],
    "workspace": {
      "startBlockId": "start_block_id",
      "deletable": false,
      "movable": false,
      "x": 25,
      "y": 152,
      "preplacedNext": []
    },
    "introOverlay": {
      "kind": "tutorial",
      "tutorialIndex": 0
    },
    "blocklyFooterHeightPx": 64
  },
  {
    "puzzleIndex": 1,
    "id": "L2",
    "mapFile": "L2.json",
    "spriteSheets": [
      "two-sprite.svg"
    ],
    "toolboxBlocks": [
      {
        "type": "logo17_move_forward"
      },
      {
        "type": "logo17_turn_right"
      }
    ],
    "workspace": {
      "startBlockId": "start_block_id",
      "deletable": false,
      "movable": false,
      "x": 25,
      "y": 152,
      "preplacedNext": []
    },
    "introOverlay": {
      "kind": "tutorial",
      "tutorialIndex": 1
    },
    "blocklyFooterHeightPx": 64
  },
  {
    "puzzleIndex": 2,
    "id": "L3",
    "mapFile": "L3.json",
    "spriteSheets": [
      "three-sprite.svg",
      "three-five-sprite.svg"
    ],
    "toolboxBlocks": [
      {
        "type": "logo17_for_loop",
        "shadows": {
          "TIMES": {
            "type": "math_whole_number",
            "NUM": 4
          }
        }
      },
      {
        "type": "logo17_move_forward"
      },
      {
        "type": "logo17_turn_right"
      }
    ],
    "workspace": {
      "startBlockId": "start_block_id",
      "deletable": false,
      "movable": false,
      "x": 25,
      "y": 152,
      "preplacedNext": []
    },
    "introOverlay": {
      "kind": "tutorial",
      "tutorialIndex": 2
    },
    "blocklyFooterHeightPx": 84
  },
  {
    "puzzleIndex": 3,
    "id": "L4",
    "mapFile": "L4.json",
    "spriteSheets": [
      "four-sprite.svg",
      "four-five-sprite.svg",
      "four-six-sprite.svg"
    ],
    "toolboxBlocks": [
      {
        "type": "logo17_for_loop",
        "shadows": {
          "TIMES": {
            "type": "math_whole_number",
            "NUM": 4
          }
        }
      },
      {
        "type": "logo17_move_forward"
      },
      {
        "type": "logo17_turn_right"
      },
      {
        "type": "logo17_turn_left"
      }
    ],
    "workspace": {
      "startBlockId": "start_block_id",
      "deletable": false,
      "movable": false,
      "x": 25,
      "y": 152,
      "preplacedNext": []
    },
    "introOverlay": {
      "kind": "progressMap",
      "autoHideMs": 4000
    },
    "blocklyFooterHeightPx": 84
  },
  {
    "puzzleIndex": 4,
    "id": "L5",
    "mapFile": "L5.json",
    "spriteSheets": [
      "five-sprite.svg",
      "three-five-sprite.svg",
      "four-five-sprite.svg"
    ],
    "toolboxBlocks": [
      {
        "type": "logo17_for_loop",
        "shadows": {
          "TIMES": {
            "type": "math_whole_number",
            "NUM": 4
          }
        }
      },
      {
        "type": "logo17_move_forward"
      },
      {
        "type": "logo17_turn_right"
      },
      {
        "type": "logo17_turn_left"
      }
    ],
    "workspace": {
      "startBlockId": "start_block_id",
      "deletable": false,
      "movable": false,
      "x": 25,
      "y": 152,
      "preplacedNext": []
    },
    "introOverlay": {
      "kind": "progressMap",
      "autoHideMs": 4000
    },
    "blocklyFooterHeightPx": 84
  },
  {
    "puzzleIndex": 5,
    "id": "L6",
    "mapFile": "L6.json",
    "spriteSheets": [
      "six-sprite.svg",
      "one-six-sprite.svg",
      "four-six-sprite.svg"
    ],
    "toolboxBlocks": [
      {
        "type": "logo17_for_loop",
        "shadows": {
          "TIMES": {
            "type": "math_whole_number",
            "NUM": 4
          }
        }
      },
      {
        "type": "logo17_move_forward"
      },
      {
        "type": "logo17_turn_right"
      },
      {
        "type": "logo17_turn_left"
      }
    ],
    "workspace": {
      "startBlockId": "start_block_id",
      "deletable": false,
      "movable": false,
      "x": 25,
      "y": 152,
      "preplacedNext": []
    },
    "introOverlay": {
      "kind": "progressMap",
      "autoHideMs": 4000
    },
    "blocklyFooterHeightPx": 84
  }
];

/** Per tutorial, the same kinds of value. */
const tutorialExtras = [
  {
    "tutorialIndex": 0,
    "id": "T1",
    "mapFile": "T1.json",
    "forPuzzleIndex": 0,
    "workspace": {
      "startBlockId": "tutorial_start_block_id",
      "deletable": false,
      "movable": false,
      "x": 10,
      "y": 96,
      "preplacedNext": []
    },
    "toolboxBlocks": [
      {
        "type": "logo17_move_forward",
        "id": "logo17_move_forward"
      }
    ]
  },
  {
    "tutorialIndex": 1,
    "id": "T2",
    "mapFile": "T2.json",
    "forPuzzleIndex": 1,
    "workspace": {
      "startBlockId": "tutorial_start_block_id",
      "deletable": false,
      "movable": false,
      "x": 10,
      "y": 96,
      "preplacedNext": []
    },
    "toolboxBlocks": [
      {
        "type": "logo17_turn_right",
        "id": "logo17_turn_right"
      },
      {
        "type": "logo17_move_forward",
        "id": "logo17_move_forward"
      }
    ]
  },
  {
    "tutorialIndex": 2,
    "id": "T3",
    "mapFile": "T3.json",
    "forPuzzleIndex": 2,
    "workspace": {
      "startBlockId": "tutorial_start_block_id",
      "deletable": false,
      "movable": false,
      "x": 20,
      "y": 149,
      "preplacedNext": [
        "logo17_move_forward"
      ]
    },
    "toolboxBlocks": [
      {
        "type": "logo17_for_loop",
        "id": "logo17_for_loop",
        "shadows": {
          "TIMES": {
            "type": "math_whole_number",
            "NUM": 2
          }
        }
      },
      {
        "type": "logo17_move_forward",
        "id": "logo17_move_forward"
      }
    ]
  }
];

/** `tilesetId` is `gid - firstgid`, `frameCount` is the length of `frames`. */
const tileExtras = [
  {
    "gid": 7,
    "tilesetId": 6,
    "frameCount": 1
  },
  {
    "gid": 8,
    "tilesetId": 7,
    "frameCount": 1
  },
  {
    "gid": 9,
    "tilesetId": 8,
    "frameCount": 1
  },
  {
    "gid": 10,
    "tilesetId": 9,
    "frameCount": 1
  },
  {
    "gid": 19,
    "tilesetId": 18,
    "frameCount": 1
  },
  {
    "gid": 23,
    "tilesetId": 22,
    "frameCount": 1
  },
  {
    "gid": 24,
    "tilesetId": 23,
    "frameCount": 1
  },
  {
    "gid": 25,
    "tilesetId": 24,
    "frameCount": 1
  },
  {
    "gid": 67,
    "tilesetId": 66,
    "frameCount": 1
  },
  {
    "gid": 68,
    "tilesetId": 67,
    "frameCount": 18
  },
  {
    "gid": 69,
    "tilesetId": 68,
    "frameCount": 22
  },
  {
    "gid": 70,
    "tilesetId": 69,
    "frameCount": 48
  },
  {
    "gid": 71,
    "tilesetId": 70,
    "frameCount": 13
  },
  {
    "gid": 72,
    "tilesetId": 71,
    "frameCount": 14
  },
  {
    "gid": 73,
    "tilesetId": 72,
    "frameCount": 10
  },
  {
    "gid": 74,
    "tilesetId": 73,
    "frameCount": 21
  },
  {
    "gid": 75,
    "tilesetId": 74,
    "frameCount": 29
  },
  {
    "gid": 76,
    "tilesetId": 75,
    "frameCount": 1
  },
  {
    "gid": 77,
    "tilesetId": 76,
    "frameCount": 1
  },
  {
    "gid": 78,
    "tilesetId": 77,
    "frameCount": 1
  },
  {
    "gid": 79,
    "tilesetId": 78,
    "frameCount": 1
  },
  {
    "gid": 80,
    "tilesetId": 79,
    "frameCount": 1
  },
  {
    "gid": 81,
    "tilesetId": 80,
    "frameCount": 1
  },
  {
    "gid": 82,
    "tilesetId": 81,
    "frameCount": 18
  },
  {
    "gid": 83,
    "tilesetId": 82,
    "frameCount": 18
  },
  {
    "gid": 84,
    "tilesetId": 83,
    "frameCount": 18
  },
  {
    "gid": 85,
    "tilesetId": 84,
    "frameCount": 19
  },
  {
    "gid": 86,
    "tilesetId": 85,
    "frameCount": 48
  },
  {
    "gid": 87,
    "tilesetId": 86,
    "frameCount": 1
  },
  {
    "gid": 88,
    "tilesetId": 87,
    "frameCount": 1
  },
  {
    "gid": 89,
    "tilesetId": 88,
    "frameCount": 1
  },
  {
    "gid": 90,
    "tilesetId": 89,
    "frameCount": 1
  },
  {
    "gid": 91,
    "tilesetId": 90,
    "frameCount": 1
  },
  {
    "gid": 93,
    "tilesetId": 92,
    "frameCount": 1
  },
  {
    "gid": 96,
    "tilesetId": 95,
    "frameCount": 1
  },
  {
    "gid": 97,
    "tilesetId": 96,
    "frameCount": 1
  },
  {
    "gid": 98,
    "tilesetId": 97,
    "frameCount": 1
  },
  {
    "gid": 99,
    "tilesetId": 98,
    "frameCount": 1
  },
  {
    "gid": 100,
    "tilesetId": 99,
    "frameCount": 40
  },
  {
    "gid": 101,
    "tilesetId": 100,
    "frameCount": 1
  },
  {
    "gid": 103,
    "tilesetId": 102,
    "frameCount": 17
  },
  {
    "gid": 104,
    "tilesetId": 103,
    "frameCount": 18
  },
  {
    "gid": 105,
    "tilesetId": 104,
    "frameCount": 12
  },
  {
    "gid": 108,
    "tilesetId": 107,
    "frameCount": 25
  },
  {
    "gid": 109,
    "tilesetId": 108,
    "frameCount": 21
  },
  {
    "gid": 111,
    "tilesetId": 110,
    "frameCount": 20
  },
  {
    "gid": 112,
    "tilesetId": 111,
    "frameCount": 1
  },
  {
    "gid": 114,
    "tilesetId": 113,
    "frameCount": 1
  },
  {
    "gid": 115,
    "tilesetId": 114,
    "frameCount": 1
  },
  {
    "gid": 116,
    "tilesetId": 115,
    "frameCount": 1
  },
  {
    "gid": 117,
    "tilesetId": 116,
    "frameCount": 1
  },
  {
    "gid": 118,
    "tilesetId": 117,
    "frameCount": 1
  },
  {
    "gid": 119,
    "tilesetId": 118,
    "frameCount": 48
  },
  {
    "gid": 120,
    "tilesetId": 119,
    "frameCount": 42
  },
  {
    "gid": 121,
    "tilesetId": 120,
    "frameCount": 65
  },
  {
    "gid": 122,
    "tilesetId": 121,
    "frameCount": 23
  },
  {
    "gid": 123,
    "tilesetId": 122,
    "frameCount": 1
  },
  {
    "gid": 124,
    "tilesetId": 123,
    "frameCount": 1
  },
  {
    "gid": 125,
    "tilesetId": 124,
    "frameCount": 1
  },
  {
    "gid": 126,
    "tilesetId": 125,
    "frameCount": 1
  },
  {
    "gid": 127,
    "tilesetId": 126,
    "frameCount": 1
  },
  {
    "gid": 128,
    "tilesetId": 127,
    "frameCount": 1
  },
  {
    "gid": 129,
    "tilesetId": 128,
    "frameCount": 1
  },
  {
    "gid": 130,
    "tilesetId": 129,
    "frameCount": 1
  },
  {
    "gid": 131,
    "tilesetId": 130,
    "frameCount": 20
  },
  {
    "gid": 133,
    "tilesetId": 132,
    "frameCount": 1
  },
  {
    "gid": 134,
    "tilesetId": 133,
    "frameCount": 1
  },
  {
    "gid": 135,
    "tilesetId": 134,
    "frameCount": 1
  },
  {
    "gid": 136,
    "tilesetId": 135,
    "frameCount": 1
  },
  {
    "gid": 138,
    "tilesetId": 137,
    "frameCount": 1
  },
  {
    "gid": 139,
    "tilesetId": 138,
    "frameCount": 1
  },
  {
    "gid": 143,
    "tilesetId": 142,
    "frameCount": 1
  },
  {
    "gid": 145,
    "tilesetId": 144,
    "frameCount": 1
  },
  {
    "gid": 146,
    "tilesetId": 145,
    "frameCount": 1
  },
  {
    "gid": 147,
    "tilesetId": 146,
    "frameCount": 1
  },
  {
    "gid": 148,
    "tilesetId": 147,
    "frameCount": 1
  },
  {
    "gid": 149,
    "tilesetId": 148,
    "frameCount": 1
  },
  {
    "gid": 150,
    "tilesetId": 149,
    "frameCount": 1
  },
  {
    "gid": 152,
    "tilesetId": 151,
    "frameCount": 1
  },
  {
    "gid": 153,
    "tilesetId": 152,
    "frameCount": 162
  },
  {
    "gid": 154,
    "tilesetId": 153,
    "frameCount": 57
  },
  {
    "gid": 155,
    "tilesetId": 154,
    "frameCount": 15
  },
  {
    "gid": 156,
    "tilesetId": 155,
    "frameCount": 24
  },
  {
    "gid": 157,
    "tilesetId": 156,
    "frameCount": 18
  },
  {
    "gid": 158,
    "tilesetId": 157,
    "frameCount": 20
  },
  {
    "gid": 159,
    "tilesetId": 158,
    "frameCount": 24
  },
  {
    "gid": 160,
    "tilesetId": 159,
    "frameCount": 10
  },
  {
    "gid": 161,
    "tilesetId": 160,
    "frameCount": 21
  },
  {
    "gid": 162,
    "tilesetId": 161,
    "frameCount": 51
  },
  {
    "gid": 163,
    "tilesetId": 162,
    "frameCount": 17
  },
  {
    "gid": 164,
    "tilesetId": 163,
    "frameCount": 14
  },
  {
    "gid": 165,
    "tilesetId": 164,
    "frameCount": 14
  },
  {
    "gid": 166,
    "tilesetId": 165,
    "frameCount": 34
  },
  {
    "gid": 167,
    "tilesetId": 166,
    "frameCount": 14
  },
  {
    "gid": 168,
    "tilesetId": 167,
    "frameCount": 45
  },
  {
    "gid": 169,
    "tilesetId": 168,
    "frameCount": 1
  },
  {
    "gid": 170,
    "tilesetId": 169,
    "frameCount": 1
  },
  {
    "gid": 171,
    "tilesetId": 170,
    "frameCount": 1
  },
  {
    "gid": 172,
    "tilesetId": 171,
    "frameCount": 1
  },
  {
    "gid": 173,
    "tilesetId": 172,
    "frameCount": 1
  },
  {
    "gid": 174,
    "tilesetId": 173,
    "frameCount": 17
  },
  {
    "gid": 175,
    "tilesetId": 174,
    "frameCount": 12
  },
  {
    "gid": 176,
    "tilesetId": 175,
    "frameCount": 14
  },
  {
    "gid": 177,
    "tilesetId": 176,
    "frameCount": 15
  },
  {
    "gid": 178,
    "tilesetId": 177,
    "frameCount": 13
  },
  {
    "gid": 179,
    "tilesetId": 178,
    "frameCount": 55
  },
  {
    "gid": 180,
    "tilesetId": 179,
    "frameCount": 50
  },
  {
    "gid": 181,
    "tilesetId": 180,
    "frameCount": 12
  },
  {
    "gid": 182,
    "tilesetId": 181,
    "frameCount": 33
  },
  {
    "gid": 183,
    "tilesetId": 182,
    "frameCount": 27
  },
  {
    "gid": 184,
    "tilesetId": 183,
    "frameCount": 41
  },
  {
    "gid": 185,
    "tilesetId": 184,
    "frameCount": 1
  },
  {
    "gid": 186,
    "tilesetId": 185,
    "frameCount": 95
  },
  {
    "gid": 187,
    "tilesetId": 186,
    "frameCount": 1
  },
  {
    "gid": 188,
    "tilesetId": 187,
    "frameCount": 11
  },
  {
    "gid": 189,
    "tilesetId": 188,
    "frameCount": 10
  },
  {
    "gid": 190,
    "tilesetId": 189,
    "frameCount": 19
  },
  {
    "gid": 191,
    "tilesetId": 190,
    "frameCount": 95
  },
  {
    "gid": 192,
    "tilesetId": 191,
    "frameCount": 33
  },
  {
    "gid": 193,
    "tilesetId": 192,
    "frameCount": 9
  },
  {
    "gid": 194,
    "tilesetId": 193,
    "frameCount": 1
  },
  {
    "gid": 195,
    "tilesetId": 194,
    "frameCount": 1
  },
  {
    "gid": 196,
    "tilesetId": 195,
    "frameCount": 1
  },
  {
    "gid": 197,
    "tilesetId": 196,
    "frameCount": 1
  },
  {
    "gid": 198,
    "tilesetId": 197,
    "frameCount": 1
  },
  {
    "gid": 199,
    "tilesetId": 198,
    "frameCount": 1
  },
  {
    "gid": 200,
    "tilesetId": 199,
    "frameCount": 1
  },
  {
    "gid": 201,
    "tilesetId": 200,
    "frameCount": 57
  },
  {
    "gid": 202,
    "tilesetId": 201,
    "frameCount": 1
  },
  {
    "gid": 203,
    "tilesetId": 202,
    "frameCount": 76
  },
  {
    "gid": 204,
    "tilesetId": 203,
    "frameCount": 23
  },
  {
    "gid": 205,
    "tilesetId": 204,
    "frameCount": 26
  },
  {
    "gid": 206,
    "tilesetId": 205,
    "frameCount": 56
  },
  {
    "gid": 207,
    "tilesetId": 206,
    "frameCount": 23
  },
  {
    "gid": 208,
    "tilesetId": 207,
    "frameCount": 52
  },
  {
    "gid": 209,
    "tilesetId": 208,
    "frameCount": 51
  },
  {
    "gid": 210,
    "tilesetId": 209,
    "frameCount": 31
  },
  {
    "gid": 212,
    "tilesetId": 211,
    "frameCount": 8
  },
  {
    "gid": 213,
    "tilesetId": 212,
    "frameCount": 12
  },
  {
    "gid": 214,
    "tilesetId": 213,
    "frameCount": 1
  },
  {
    "gid": 216,
    "tilesetId": 215,
    "frameCount": 1
  },
  {
    "gid": 217,
    "tilesetId": 216,
    "frameCount": 1
  },
  {
    "gid": 218,
    "tilesetId": 217,
    "frameCount": 1
  },
  {
    "gid": 219,
    "tilesetId": 218,
    "frameCount": 1
  },
  {
    "gid": 221,
    "tilesetId": 220,
    "frameCount": 1
  }
];

/** `firstgid` is 1 in every map the original ships; the enums are collected from the tileset. */
const gidMapping = {
  "firstgid": 1,
  "typeEnum": [
    "passable",
    "unpassable",
    "carrot",
    "player",
    "triggerable",
    "cloud",
    null
  ],
  "tilesetTypeEnum": [
    "Type.PASSABLE",
    "Type.UNPASSABLE",
    "Type.CARROT",
    "Type.PLAYER",
    "Type.TRIGGERABLE",
    "Type.CLOUD",
    "(absent) = untyped decor prop"
  ]
};

/** Which sheets each map actually draws from, found by scanning the map for tile ids. */
const sheetUsage = {
  "levels": [
    {
      "preloadSheets": [
        "one-sprite.svg",
        "one-six-sprite.svg"
      ],
      "usedSheetIndices": [
        0,
        1,
        2,
        3
      ],
      "usedSheets": [
        "loading-sprite.svg",
        "shared-sprite.svg",
        "one-sprite.svg",
        "one-six-sprite.svg"
      ],
      "gids": [
        10,
        19,
        23,
        24,
        25,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81
      ],
      "unknownGids": [],
      "file": "L1.json"
    },
    {
      "preloadSheets": [
        "two-sprite.svg"
      ],
      "usedSheetIndices": [
        1,
        4
      ],
      "usedSheets": [
        "shared-sprite.svg",
        "two-sprite.svg"
      ],
      "gids": [
        10,
        24,
        67,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        93,
        96,
        97,
        98,
        99,
        100,
        101
      ],
      "unknownGids": [],
      "file": "L2.json"
    },
    {
      "preloadSheets": [
        "three-sprite.svg",
        "three-five-sprite.svg"
      ],
      "usedSheetIndices": [
        1,
        5,
        6
      ],
      "usedSheets": [
        "shared-sprite.svg",
        "three-sprite.svg",
        "three-five-sprite.svg"
      ],
      "gids": [
        10,
        24,
        25,
        67,
        91,
        93,
        103,
        104,
        105,
        108,
        109,
        111,
        112,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        124,
        125,
        126,
        127,
        128,
        129,
        130,
        131,
        182
      ],
      "unknownGids": [],
      "file": "L3.json"
    },
    {
      "preloadSheets": [
        "four-sprite.svg",
        "four-five-sprite.svg",
        "four-six-sprite.svg"
      ],
      "usedSheetIndices": [
        1,
        7,
        8,
        9,
        10
      ],
      "usedSheets": [
        "shared-sprite.svg",
        "four-sprite.svg",
        "four-five-sprite.svg",
        "four-six-sprite.svg",
        "five-sprite.svg"
      ],
      "gids": [
        10,
        24,
        67,
        93,
        129,
        130,
        133,
        134,
        135,
        136,
        138,
        139,
        145,
        146,
        147,
        148,
        149,
        150,
        152,
        153,
        154,
        155,
        156,
        157,
        158,
        159,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        174,
        178
      ],
      "unknownGids": [],
      "file": "L4.json"
    },
    {
      "preloadSheets": [
        "five-sprite.svg",
        "three-five-sprite.svg",
        "four-five-sprite.svg"
      ],
      "usedSheetIndices": [
        1,
        2,
        6,
        8,
        10
      ],
      "usedSheets": [
        "shared-sprite.svg",
        "one-sprite.svg",
        "three-five-sprite.svg",
        "four-five-sprite.svg",
        "five-sprite.svg"
      ],
      "gids": [
        10,
        24,
        67,
        69,
        91,
        93,
        128,
        129,
        133,
        134,
        135,
        138,
        139,
        143,
        145,
        152,
        155,
        168,
        169,
        170,
        171,
        172,
        173,
        175,
        176,
        177,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        187,
        188,
        189,
        190,
        191,
        192,
        193
      ],
      "unknownGids": [],
      "file": "L5.json"
    },
    {
      "preloadSheets": [
        "six-sprite.svg",
        "one-six-sprite.svg",
        "four-six-sprite.svg"
      ],
      "usedSheetIndices": [
        1,
        3,
        9,
        11
      ],
      "usedSheets": [
        "shared-sprite.svg",
        "one-six-sprite.svg",
        "four-six-sprite.svg",
        "six-sprite.svg"
      ],
      "gids": [
        10,
        67,
        68,
        127,
        128,
        129,
        139,
        143,
        145,
        158,
        159,
        161,
        166,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        210,
        212,
        213,
        216,
        217,
        218,
        219,
        221
      ],
      "unknownGids": [],
      "file": "L6.json"
    }
  ],
  "tutorials": [
    {
      "file": "T1.json",
      "usedSheetIndices": [
        1
      ],
      "usedSheets": [
        "shared-sprite.svg"
      ],
      "gids": [
        10,
        23,
        25,
        67
      ],
      "unknownGids": []
    },
    {
      "file": "T2.json",
      "usedSheetIndices": [
        1
      ],
      "usedSheets": [
        "shared-sprite.svg"
      ],
      "gids": [
        10,
        24,
        25,
        67
      ],
      "unknownGids": []
    },
    {
      "file": "T3.json",
      "usedSheetIndices": [
        1
      ],
      "usedSheets": [
        "shared-sprite.svg"
      ],
      "gids": [
        10,
        23,
        67,
        127,
        129
      ],
      "unknownGids": []
    }
  ]
};

/** `endMs` is start plus duration; `loop` is true if any call site loops the clip. */
const clipTiming = [
  {
    "endMs": 540.792,
    "loop": false,
    "playCalls": [
      {
        "delayMs": null,
        "loop": false
      }
    ],
    "name": "BLOCKS_IN"
  },
  {
    "endMs": 2283.792,
    "loop": false,
    "playCalls": [
      {
        "delayMs": 54,
        "loop": false
      }
    ],
    "name": "BLOCKS_OUT"
  },
  {
    "endMs": 3825.813,
    "loop": false,
    "playCalls": [
      {
        "delayMs": 0,
        "loop": false
      }
    ],
    "name": "CARROT"
  },
  {
    "endMs": 5328.396,
    "loop": false,
    "playCalls": [
      {
        "delayMs": 0,
        "loop": false
      }
    ],
    "name": "JUMP"
  },
  {
    "endMs": 70399.167,
    "loop": true,
    "playCalls": [
      {
        "delayMs": 1000,
        "loop": true
      }
    ],
    "name": "MUSIC"
  }
];

/** Message keys and the image tokens their text can carry, collected from the original's screens. */
const messageKeys = {
  "en": {
    "Tutorial 1 - Title": "Let's get to the party!",
    "Tutorial 1 - Intro": "Collect carrots on the way using the code blocks!",
    "Tutorial 1 - Prompt": "Place the FORWARD block in the tray to make me hop forward.",
    "Tutorial 1 - Prompt (Alt)": "Place the [FORWARD_IMAGE] in the tray to make me hop forward.",
    "Tutorial 1 - Yep": "Yep, that's it!",
    "Tutorial 1 - Play": "Now press the Play button!",
    "Tutorial 1 - Play (Alt)": "Now press the [PLAY_IMAGE]!",
    "Tutorial 1 - Done": "Well done, let's code!",
    "Tutorial 1 - Done (Alt)": "Well done, let's collect more carrots!",
    "Tutorial 2 - Carrots": "Thanks, I love carrots!",
    "Tutorial 2 - Carrots (Alt)": "Thanks, my friends love carrots!",
    "Tutorial 2 - Turn": "Let's try a turn. Add a ROTATE block then a FORWARD block.",
    "Tutorial 2 - Turn (Alt)": "Let's try a turn. Add a [ROTATE_IMAGE] and then a [FORWARD_IMAGE].",
    "Tutorial 2 - Right Block": "Yes, that's the right block!",
    "Tutorial 2 - Forward": "Now we need a FORWARD block.",
    "Tutorial 2 - Forward (Alt)": "Now we need a [FORWARD_IMAGE].",
    "Tutorial 2 - Correct": "Correct. Now place it in the tray.",
    "Tutorial 2 - Play": "Press Play to make me hop.",
    "Tutorial 2 - Play (Alt)": "Press [PLAY_IMAGE] to make me hop.",
    "Tutorial 2 - Done": "Well done, let's code!",
    "Tutorial 2 - Done (Alt)": "Well done, let's collect more carrots!",
    "Tutorial 3 - Try Loops": "Let's try Loops!",
    "Tutorial 3 - Loops": "Loops run the same code multiple times.  Place the LOOP block around the FORWARD block.",
    "Tutorial 3 - Loops (Alt)": "Loops run the same code multiple times.  Place the [LOOP_IMAGE] around the [FORWARD_IMAGE].",
    "Tutorial 3 - Place loop": "That's it! Place it down in the tray.",
    "Tutorial 3 - Bravo": "Bravo! Hit the Play button and the code will run twice!",
    "Tutorial 3 - Bravo (Alt)": "Bravo! Hit the [PLAY_IMAGE] and the code will run twice!",
    "Tutorial 3 - Done": "Well done, let's code!",
    "Tutorial 3 - Done (Alt)": "Well done, let's collect more carrots!",
    "Tutorial Complete": "Tutorial complete!",
    "Shortest Solution": "[RIBBON_IMAGE] = Shortest Solution",
    "Menu button Hover": "MENU",
    "Reset Hover": "RESET",
    "Level Map Hover": "LEVEL MAP",
    "Forward Block Hover": "FORWARD",
    "Turn Left Hover": "TURN LEFT",
    "Turn Right Hover": "TURN RIGHT",
    "Loop Hover": "LOOP",
    "Start Button": "START",
    "Skip Button Hover": "SKIP TUTORIAL",
    "Continue Button": "CONTINUE",
    "Title": "Celebrating 50 years of Kids Coding",
    "Share Message": "Collect all of the carrots with code in today's #GoogleDoodle",
    "Query": "kids coding languages",
    "Query (Alt)": "hour of code history",
    "Share": "SHARE",
    "Share - G+": "Share on G+",
    "Share - Facebook": "Share on Facebook",
    "Share - Twitter": "Share on Twitter",
    "Share - E-mail": "E-mail",
    "Search - Icon": "SEARCH",
    "Share Link Copied": "Link copied"
  },
  "tokens": {
    "[FORWARD_IMAGE]": {
      "replacedWith": "<svg class=\"tutinlinesvg\"><use xlink:href=#hpsvg-tut_forward_block></use></svg>"
    },
    "[ROTATE_IMAGE]": {
      "replacedWith": "<svg class=\"tutinlinesvg\"><use xlink:href=#hpsvg-tut_turn_block></use></svg>"
    },
    "[PLAY_IMAGE]": {
      "replacedWith": "<svg class=\"tutinlinesvg\"><use xlink:href=#hpsvg-tut_play_block></use></svg>"
    },
    "[LOOP_IMAGE]": {
      "replacedWith": "<svg class=\"tutinlinesvg\"><use xlink:href=#hpsvg-tut_loop_block></use></svg>"
    },
    "[RIBBON_IMAGE]": {
      "replacedWith": "<svg class=\"\"><use xlink:href=#hpsvg-ribbon_unlocked></use></svg>"
    }
  }
};

const zip = <A, B>(a: readonly A[], b: readonly B[]): (A & B)[] =>
  a.map((item, i) => ({ ...item, ...b[i] }));

export const levels: LevelsFile = {
  colours: raw.colours,
  workspaces: raw.workspaces,
  levels: zip(raw.levels, levelExtras),
  tutorials: zip(raw.tutorials, tutorialExtras),
} as LevelsFile;

export const tiles: TilesFile = { gidMapping, tiles: zip(raw.tileset, tileExtras) } as TilesFile;

export const sheets: SheetsFile = {
  sheets: raw.sheetFiles,
  levels: sheetUsage.levels,
  tutorials: sheetUsage.tutorials,
} as SheetsFile;

export const audio: AudioFile = {
  file: raw.audioFile,
  clips: zip(raw.clips, clipTiming),
} as AudioFile;

export const atlas: AtlasFile = { sprites: raw.atlasSprites } as AtlasFile;

export const keys = messageKeys;
