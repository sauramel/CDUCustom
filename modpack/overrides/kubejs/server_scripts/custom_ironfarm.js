onEvent('recipes', event => {
  event.shaped('easy_villagers:iron_farm', [
    'AAA',
    'ADA',
    'CBC'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'compressium:iron_3',
	C: 'extendedcrafting:black_iron_block',
	D: 'bloodmagic:lavacrystal'
  })
  event.remove({output: 'easy_villagers:iron_farm', mod: 'easy_villagers'})
})