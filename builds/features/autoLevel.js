module.exports = {
    partial: true,
    configuration: {
        enable: [
            "BLTOUCH",
            ["NOZZLE_TO_PROBE_OFFSET", [-42, -10, 0]],
            "AUTO_BED_LEVELING_BILINEAR",        
            "Z_SAFE_HOMING",
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN",
            ["DEFAULT_LEVELING_FADE_HEIGHT", 20]
          
//            "USE_PROBE_FOR_Z_HOMING",
//            ["Z_MIN_PROBE_PIN", q`PB1`],
//            "LCD_BED_LEVELING",

            
            

            //M48 test
//            "Z_MIN_PROBE_REPEATABILITY_TEST"
        ]
    },
    configuration_adv: {
        enable: [
            "BABYSTEPPING",//ano
            "BABYSTEP_ZPROBE_OFFSET",//ano
            "PROBE_OFFSET_WIZARD",//ano

            //symmetrical
            ["PROBING_MARGIN_LEFT", 45],
            ["PROBING_MARGIN_RIGHT", 45],
            ["PROBING_MARGIN_FRONT", 15],
            ["PROBING_MARGIN_BACK", 15]
        ]
    }
};
