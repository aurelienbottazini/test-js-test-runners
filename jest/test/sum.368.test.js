const sum368 = require('../sum368.js');

test('adds 15 + 1 to equal 16 + offset 0.26920669494692095', () => {
  expect(sum368(15, 1)).toBe(16 + 0.26920669494692095);
});