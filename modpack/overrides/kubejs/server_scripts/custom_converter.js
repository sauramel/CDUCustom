onEvent('recipes', event => {
  event.shaped('easy_villagers:converter', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'botania:livingrock',
	C: 'enigmaticlegacy:etherium_ingot',
	D: 'minecraft:zombie_spawn_egg'
  })
  event.remove({output: 'easy_villagers:converter', mod: 'easy_villagers'})
})