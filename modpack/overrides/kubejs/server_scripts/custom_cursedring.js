onEvent('recipes', event => {
   event.recipes.createMechanicalCrafting('enigmaticlegacy:cursed_ring', [
		' GSW ',
		'NTDLE',
		'SURZS',
		'EVXYN',
		' WSG '
	  ], {
		W: 'minecraft:nether_star',
		N: 'minecraft:netherite_ingot',
		G: 'malum:soul_stained_steel_ingot',
		E: 'enigmaticlegacy:earth_heart',
		S: 'forbidden_arcanus:dark_soul',
		D: 'bloodmagic:sacrificialdagger',
		R: 'enigmaticlegacy:iron_ring',
		T: 'botania:rune_wrath',
		U: 'botania:rune_gluttony',
		V: 'botania:rune_lust',
		X: 'botania:rune_sloth',
		Y: 'botania:rune_greed',
		Z: 'botania:rune_envy',
		L: 'botania:rune_pride'		
	  })

  event.remove({output: 'enigmaticlegacy:cursed_ring', mod: 'enigmaticlegacy'})
})