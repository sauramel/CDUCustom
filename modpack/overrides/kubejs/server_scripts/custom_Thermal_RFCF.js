onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "NICIN",
              "IXGXI",
              "RGEGR",
              "IXGXI",
              "NICIN",
            ],
            "key": {
              "X": "createaddition:capacitor" ,
              "I": "#forge:plates/lead",
              "C": "createaddition:connector",
              "R": "thermal:rf_coil",
              "N": "#forge:ingots/lead",
              "E": "#forge:gears/electrum",
              "G": "#forge:glass"
            },
            "result": {
              "item": "thermal:energy_cell_frame"
            }

    })
    event.remove({output: 'thermal:energy_cell_frame', mod: 'thermal'})
})