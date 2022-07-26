onEvent('recipes', event => {
  event.shaped('easy_villagers:trader', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'botania:livingrock',
	C: 'enigmaticlegacy:etherium_ingot',
	D: 'lightmanscurrency:trading_core'
  })
  event.remove({output: 'easy_villagers:trader', mod: 'easy_villagers'})
})