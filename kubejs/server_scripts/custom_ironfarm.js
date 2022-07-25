onEvent('recipes', event => {
  event.shaped('easy_villagers:iron_farm', [
    'AAA',
    'ABA',
    'CDC'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'compressium:iron_2',
	C: 'botania:livingrock',
	D: 'enigmaticlegacy:etherium_ingot'
  })
  event.remove({output: 'easy_villagers:iron_farm', mod: 'easy_villagers'})
})