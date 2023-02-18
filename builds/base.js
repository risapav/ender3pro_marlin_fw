module.exports = {
    extends: "builds/default.js",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-base-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Dust, Ender-3 Pro, risapav)"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER"
        ]
    },
    configuration_adv: {
        enable: [
            //octoprint
//nie            "HOST_ACTION_COMMANDS"
        ]
    }
};
