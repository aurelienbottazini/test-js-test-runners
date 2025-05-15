const sum4887 = require('../sum4887.js');

test('adds 22 + 95 to equal 117 + 0.6461931985144695', () => {
  expect(sum4887(22, 95)).toBe(117 + 0.6461931985144695);
});