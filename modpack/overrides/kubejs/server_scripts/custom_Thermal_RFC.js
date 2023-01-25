onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "NIRIN",
              "IXGXI",
              "RGEGR",
              "IXAXI",
              "NIRIN",
            ],
            "key": {
              "X": "createaddition:capacitor" ,
              "I": "#forge:storage_blocks/redstone",
              "R": "createaddition:connector",
              "N": "thermal:cured_rubber",
              "A": "createaddition:accumulator",
              "G": "#forge:ingots/steel"
            },
            "result": {
              "item": "thermal:energy_cell"
            }

    })
    event.remove({output: 'thermal:energy_cell', mod: 'thermal'})
})