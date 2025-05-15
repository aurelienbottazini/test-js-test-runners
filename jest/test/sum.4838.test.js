const sum4838 = require('../sum4838.js');

test('adds 61 + 19 to equal 80 + offset 0.6553304235776786', () => {
  expect(sum4838(61, 19)).toBe(80 + 0.6553304235776786);
});