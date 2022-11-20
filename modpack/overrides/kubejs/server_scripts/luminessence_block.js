onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "AABBBBBAA",
              "ABBBBBBBA",
              "BBBBBBBBB",
              "BBBBCBBBB",
              "BBBCDCBBB",
              "BBBBCBBBB",
              "BBBBBBBBB",
              "ABBBBBBBA",
              "AABBBBBAA"
            ],
            "key": {
              "A": "quark:moss_paste" ,
              "B": "extendedcrafting:luminessence",
              "C": "ars_nouveau:jar_of_light",
              "D": "thermal:glowstone_bucket",
            },
            "result": {
              "item": "extendedcrafting:luminessence_block"
            }

    })
    event.remove({output: 'extendedcrafting:luminessence_block', mod: 'extendedcrafting'})
})