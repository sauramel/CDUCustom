onEvent('recipes', event => {
  event.shaped('easy_villagers:farmer', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'botania:livingrock',
	C: 'enigmaticlegacy:etherium_ingot',
	D: 'farmingforblockheads:market'
  })
  event.remove({output: 'easy_villagers:farmer', mod: 'easy_villagers'})
})