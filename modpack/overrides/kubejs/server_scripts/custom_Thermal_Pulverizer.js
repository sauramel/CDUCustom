onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "ZIICIIZ",
              "IRGSGRI",
              "IGYMYGI",
              "CHNFNHC",
              "AGLXLGA",
              "ARGPGRA",
              "ZAACAAZ"
            ],
            "key": {
              "X": "createaddition:capacitor" ,
              "I": "thermal:invar_plate",
              "C": "createaddition:connector",
              "R": "thermal:rf_coil",
              "M": "#forge:dusts/diamond",
              "P": "thermal:energy_cell",
              "H": "createaddition:electric_motor",
              "S": "minecraft:piston",
              "N": "create:crushing_wheel",
              "G": "#forge:wires/gold",
              "Y": "#forge:gears/invar",
              "L": "minecraft:flint",
              "F": "thermal:machine_frame",
              "Z": "thermal:cured_rubber",
              "A": "#forge:ingots/steel"
            },
            "result": {
              "item": "thermal:machine_pulverizer"
            }

    })
    event.remove({output: 'thermal:machine_pulverizer', mod: 'thermal'})
})