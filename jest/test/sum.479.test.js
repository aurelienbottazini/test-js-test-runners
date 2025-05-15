const sum479 = require('../sum479.js');

test('adds 96 + 62 to equal 158 + 0.7301076560842696', () => {
  expect(sum479(96, 62)).toBe(158 + 0.7301076560842696);
});