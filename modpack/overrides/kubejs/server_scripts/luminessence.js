onEvent('recipes', event => {

 event.recipes.createMixing('2x extendedcrafting:luminessence', [
        'minecraft:redstone_block',
		'minecraft:redstone_block',
		'minecraft:redstone_block',
        'minecraft:glowstone',
		'minecraft:glowstone',
		'minecraft:glowstone',
		'thermal:gunpowder_block',
		'thermal:gunpowder_block',
		'thermal:gunpowder_block',
		'quark:moss_paste',
		'hexcasting:dye_colorizer_yellow'
      ]).heated()
event.remove({output: 'extendedcrafting:luminessence'})
})