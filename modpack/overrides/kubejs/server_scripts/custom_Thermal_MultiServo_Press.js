onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "ZIICIIZ",
              "IRHYHRI",
              "IGLMLGI",
              "CSMFMSC",
              "AGLXLGA",
              "ARGPGRA",
              "ZAACAAZ"
            ],
            "key": {
              "X": "createaddition:capacitor" ,
              "I": "thermal:invar_plate",
              "C": "createaddition:connector",
              "R": "thermal:rf_coil",
              "M": "compressium:iron_3",
              "P": "thermal:energy_cell",
              "H": "createaddition:electric_motor",
              "S": "minecraft:piston",
              "G": "#forge:wires/gold",
              "Y": "create:mechanical_press",
              "L": "#forge:ingots/constantan",
              "F": "thermal:machine_frame",
              "Z": "thermal:cured_rubber",
              "A": "#forge:ingots/steel"
            },
            "result": {
              "item": "thermal:machine_press"
            }

    })
    event.remove({output: 'thermal:machine_press', mod: 'thermal'})
})