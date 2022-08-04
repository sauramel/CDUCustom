onEvent('recipes', event => {
  event.recipes.createMechanicalCrafting('angelring:itemring', [
		' GHG ',
		'AEFEA',
		'HOROH',
		'AEBEA',
		' GHG '
	  ], {
		H: 'enigmaticlegacy:cosmic_heart',
		E: 'enigmaticlegacy:evil_essence',
		F: 'enigmaticlegacy:fabulous_scroll',
		B: 'buddycards:buddycard_end26',
		O: 'enigmaticlegacy:evil_ingot',
		G: 'forbidden_arcanus:golden_dragon_scale',
		A: 'forbidden_arcanus:aquatic_dragon_scale',
		R: 'angelring:itemdiamondring'
	  })
  event.remove({output: 'angelring:itemring', mod: 'angelring'})
})