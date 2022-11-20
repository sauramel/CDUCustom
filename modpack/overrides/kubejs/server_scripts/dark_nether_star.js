onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "AAAAAAA",
              "ABCDCBA",
              "ACEFECA",
              "ADFGFDA",
              "ACEFECA",
              "ABCDCBA",
              "AAAAAAA"
            ],
            "key": {
              "A": "enigmaticlegacy:evil_essence" ,
              "B": "forbidden_arcanus:dark_soul",
              "C": "forbidden_arcanus:dark_matter",
              "D": "malum:corrupted_resonance",
              "E": "forbidden_arcanus:corrupted_pixie",
              "F": "enigmaticlegacy:evil_ingot",
              "G": "minecraft:nether_star",
            },
            "result": {
              "item": "forbidden_arcanus:dark_nether_star"
            }

    })
    event.remove({output: 'forbidden_arcanus:dark_nether_star', mod: 'forbidden_arcanus'})
})