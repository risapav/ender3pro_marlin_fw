
module.exports = {
    extends: "builds/base.js",
    include: [
      "builds/features/autoLevel.js",
      "builds/features/titan.js"
    ],
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-fw-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-fw-{{uid}}"
    },
    configuration: {
        enable: [
          // The size of the printable area
         ["X_BED_SIZE", 225],
         ["Y_BED_SIZE", 225],            
          //start position
         ["X_MIN_POS", -15],            
         ["Y_MIN_POS", -25], 
         ["Z_MIN_POS", 0],             
          //probing grid
         ["GRID_MAX_POINTS_X", 3]
        ]
    }
};

