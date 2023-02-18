
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
          //probing grid
            ["GRID_MAX_POINTS_X", 3]
        ]
    }
};
