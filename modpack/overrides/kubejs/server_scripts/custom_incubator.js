onEvent('recipes', event => {
  event.shaped('easy_villagers:incubator', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'botania:livingrock',
	C: 'enigmaticlegacy:etherium_ingot',
	D: 'supplementaries:cage'
  })
  event.remove({output: 'easy_villagers:incubator', mod: 'easy_villagers'})
})