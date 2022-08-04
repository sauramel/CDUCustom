onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "ABBBBBBBA",
              "BACDEDCAB",
              "BCAFGFACB",
              "BDFHHHFDB",
              "BEIHJHIEB",
              "BDFHHHFDB",
              "BCAFKFACB",
              "BACDEDCAB",
              "ABBBBBBBA"
            ],
            "key": {
              "A": "enigmaticlegacy:evil_essence" ,
              "B": "forbidden_arcanus:golden_dragon_scale",
              "C": "malum:aerial_spirit",
              "D": "ars_nouveau:wilden_tribute",
              "E": "stalwart_dungeons:void_crystal",
              "F": "mythicbotany:alfsteel_block",
              "G": "enigmaticlegacy:fabulous_scroll",
              "H": "enigmaticlegacy:evil_ingot",
              "I": "forbidden_arcanus:dark_nether_star",
              "J": "angelring:itemdiamondring",
              "K": "buddycards:buddycard_end26",
            },
            "result": {
              "item": "angelring:itemring"
            }

    })
    event.remove({output: 'angelring:itemring', mod: 'angelring'})
})