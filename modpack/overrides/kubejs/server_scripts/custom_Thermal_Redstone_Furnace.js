onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "ZIICIIZ",
              "IGOHOGI",
              "IOBMBOI",
              "CHMFMHC",
              "ANBXBNA",
              "ARNPNRA",
              "ZAACAAZ"
            ],
            "key": {
              "X": "createaddition:capacitor" ,
              "I": "thermal:invar_plate",
              "C": "createaddition:connector",
              "R": "thermal:rf_coil",
              "M": "immersiveengineering:coil_lv",
              "P": "thermal:energy_cell",
              "H": "immersiveengineering:furnace_heater",
              "B": "immersiveengineering:alloybrick",
              "N": "#forge:ingots/copper",
              "G": "#forge:gears/copper",
              "O": "#forge:plates/copper",
              "F": "thermal:machine_frame",
              "Z": "thermal:cured_rubber",
              "A": "#forge:ingots/steel"
            },
            "result": {
              "item": "thermal:machine_furnace"
            }

    })
    event.remove({output: 'thermal:machine_furnace', mod: 'thermal'})
})