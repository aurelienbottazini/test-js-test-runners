const sum2092 = require('../sum2092.js');

test('adds 98 + 57 to equal 155 + 0.6177146365404544', () => {
  expect(sum2092(98, 57)).toBe(155 + 0.6177146365404544);
});