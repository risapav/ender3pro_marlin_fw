# ender3pro_marlin_fw

Automatic build system, to create firmware for my Ender3Pro printer.

## Upgrades

1. transfered from 8bit board Creality3D v1.1.4 to 32bit board Creality v4.2.7
2. attached Twotrees 3D Touch BLTouch Sensor Auto Bed Leveling Sensor BLTouch
3. transfered from standard printing head to TITAN Extruder Direct Drive Hotend Kit 1.75mm 
4. added High Temperature Silicone Solid Spacer Hot Bed Leveling Column
5. added 3D Printer Heat Insulation Cotton 200/220/310mm Heatbed Sticker Foil Self-Adhesive Insulation Cotton
6. added X Axis Linear Rail
7. added Y Axis Linear Rail
8. added Z Axis Linear Rail
9. changed settings for home point, start offset, print area

## Help from websites

https://teachingtechyt.github.io/upgrades.html#bltouch

https://www.reddit.com/r/Ender3/wiki/firmware/

## Firmware in MicroSD

With 32-bit controller board comes with a bootloader that will read and load new firmware on microSD card:

 - MicroSD card must be formatted to FAT32
 - Only ONE file in the microSD card and it must be .bin extension
 - The filename must be unique that the previous filename. So it will be easier if you put the date in the      filename with additional versions like a, b, c, etc at the back. For example:
        E3_Default_16Aug21_a.bin
 - The bootloader will check the microSD card for the firmware and upload itself during power recycling.
