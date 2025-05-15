const sum125 = require('../sum125.js');

test('adds 33 + 26 to equal 59 + offset 0.18078139144240424', () => {
  expect(sum125(33, 26)).toBe(59 + 0.18078139144240424);
});