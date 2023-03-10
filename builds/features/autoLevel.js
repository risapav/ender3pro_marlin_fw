module.exports = {
    partial: true,
    configuration: {
        enable: [
            //mandatory for BLTOUCH
            "BLTOUCH",
            "AUTO_BED_LEVELING_BILINEAR",
            "Z_SAFE_HOMING",
            //BLTOUCH settings
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN",
            //BLTOUCH probe offsets
            ["NOZZLE_TO_PROBE_OFFSET", [-40, -9, 0]],
                    
            //leveling            
            ["DEFAULT_LEVELING_FADE_HEIGHT", 20]
           
        ],
        disable: [
            "USE_PROBE_FOR_Z_HOMING",
            "LCD_BED_LEVELING",
            "Z_MIN_PROBE_REPEATABILITY_TEST"
        ]
    },
    configuration_adv: {
        enable: [
            //for easier way to calibrate Z offset
            "BABYSTEPPING",
            "BABYSTEP_ZPROBE_OFFSET",
            "PROBE_OFFSET_WIZARD",

            //symmetrical
            ["PROBING_MARGIN_LEFT", 45],
            ["PROBING_MARGIN_RIGHT", 45],
            ["PROBING_MARGIN_FRONT", 15],
            ["PROBING_MARGIN_BACK", 15]
        ]
    }
};
