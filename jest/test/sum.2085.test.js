const sum2085 = require('../sum2085.js');

test('adds 82 + 33 to equal 115 + 0.1317407664126593', () => {
  expect(sum2085(82, 33)).toBe(115 + 0.1317407664126593);
});