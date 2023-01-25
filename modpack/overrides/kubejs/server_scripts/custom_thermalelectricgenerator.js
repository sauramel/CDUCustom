onEvent('recipes', event => {
  event.shaped('immersiveengineering:thermoelectric_generator', [
    'DDD',
    'CAC',
    'CBC'
  ], {
    A: 'immersiveengineering:coil_lv',
    B: 'createaddition:alternator',
	C: 'immersiveengineering:plate_constantan',
	D: 'alloyed:steel_ingot'
  })
  event.remove({output: 'immersiveengineering:thermoelectric_generator', mod: 'immersiveengineering'})
})