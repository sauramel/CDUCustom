onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "ZIICIIZ",
              "IGIHIGI",
              "IIRMRII",
              "CHMFMHC",
              "INYXYNI",
              "IRNPNRI",
              "ZIIIIIZ"
            ],
            "key": {
              "X": "createaddition:capacitor" ,
              "I": "thermal:invar_plate",
              "C": "createaddition:connector",
              "R": "thermal:rf_coil",
              "M": "immersiveengineering:coil_mv",
              "P": "thermal:energy_cell",
              "H": "immersiveengineering:furnace_heater",
              "N": "#forge:ingots/invar",
              "G": "#forge:gears/electrum",
              "Y": "#forge:gears/invar",
              "F": "thermal:machine_frame",
              "Z": "thermal:cured_rubber",
            },
            "result": {
              "item": "thermal:machine_smelter"
            }

    })
    event.remove({output: 'thermal:machine_smelter', mod: 'thermal'})
})