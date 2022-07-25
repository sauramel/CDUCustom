onEvent('recipes', event => {
  event.shaped('easy_villagers:breeder', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'botania:livingrock',
	C: 'enigmaticlegacy:etherium_ingot',
	D: 'easy_villagers:villager'
  })
  event.remove({output: 'easy_villagers:breeder', mod: 'easy_villagers'})
})