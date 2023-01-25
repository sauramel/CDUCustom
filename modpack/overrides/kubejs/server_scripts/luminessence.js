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
		'minecraft:yellow_dye'
      ]).heated()
event.remove({output: 'extendedcrafting:luminessence'})
})