onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "AAAAAAAAA",
              "ABBBBBBBA",
              "ABCDEDCBA",
              "ABDFGFDBA",
              "ABEHIHEBA",
              "ABDFJFDBA",
              "ABCDEDCBA",
              "ABBBBBBBA",
              "AAAAAAAAA"
            ],
            "key": {
              "A": "immersiveengineering:storage_steel" ,
              "B": "extendedcrafting:luminessence_block",
              "C": "enigmaticlegacy:evil_ingot",
              "D": "fluxnetworks:flux_dust",
              "E": "createaddition:electric_motor",
              "F": "forbidden_arcanus:dark_nether_star_block",
              "G": "create:steam_engine",
              "H": "thermal:dynamo_numismatic",
              "I": "angelring:itemring",
              "J": "fluxnetworks:flux_core",
            },
            "result": {
              "item": "angelring:energetic_angel_ring"
            }

    })
    event.remove({output: 'angelring:energetic_angel_ring', mod: 'angelring'})
})