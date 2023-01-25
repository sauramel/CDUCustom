onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "IPI",
              "PGP",
              "IPI"
            ],
            "key": {
              "P": "#forge:plates/invar",                            
              "G": "#forge:gears/invar",
              "I": "#forge:ingots/invar"
            },
            "result": {
              "item": "thermal:press_gear_die"
            }

    })
    event.remove({output: 'thermal:press_gear_die', mod: 'thermal'})
})