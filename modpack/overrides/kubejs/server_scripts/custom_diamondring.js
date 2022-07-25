onEvent('recipes', event => {
  event.shaped('angelring:itemdiamondring', [
    'ABA',
    'CDC',
    'ACA'
  ], {
    A: 'compressium:diamond_2',
    B: 'enigmaticlegacy:enigmatic_elytra',
	C: 'forbidden_arcanus:silver_dragon_scale',
	D: 'enigmaticlegacy:gem_ring'
  })
  event.remove({output: 'angelring:itemdiamondring', mod: 'angelring'})
})