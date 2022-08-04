onEvent('recipes', event => {
  event.recipes.createMechanicalCrafting('angelring:energetic_angel_ring', [
		' SSS ',
		'SNMNS',
		'SNANS',
		'SNFNS',
		' SSS '
	  ], {
		S: 'immersiveengineering:storage_steel',
		N: 'forbidden_arcanus:dark_nether_star_block',
		M: 'createaddition:electric_motor',
		A: 'angelring:itemring',
		F: 'fluxnetworks:flux_core'		
	  })
  event.remove({output: 'angelring:energetic_angel_ring', mod: 'angelring'})
})