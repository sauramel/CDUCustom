onEvent('recipes', event => {
    event.custom({

            "type": "extendedcrafting:shaped_table",
            "pattern": [
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABCCCCCBA",
    "ABCDEDCBA",
    "ABCFGHCBA",
    "ABCDIDCBA",
    "ABCCCCCBA",
    "ABBBBBBBA",
    "AAAAAAAAA"
            ],
            "key": {
    "A": {
      "item": "forbidden_arcanus:processed_obsidian_block"
    },
    "B": {
      "item": "forbidden_arcanus:rune"
    },
    "C": {
      "item": "malum:vivid_nitrate"
    },
    "D": {
      "item": "theabyss:knight_ingot"
    },
    "E": {
      "item": "botania:spark_upgrade_isolated"
    },
    "F": {
      "item": "botania:spark_upgrade_dispersive"
    },
    "G": {
      "item": "forbidden_arcanus:dark_nether_star_block"
    },
    "H": {
      "item": "botania:spark_upgrade_dominant"
    },
    "I": {
      "item": "botania:spark_upgrade_recessive"
    }
  },)
    event.remove({output: 'forbidden_arcanus:stella_arcanum', mod: 'forbidden_arcanus'})
})