const sum660 = require('../sum660.js');

test('adds 0 + 68 to equal 68 + 0.6567522316564605', () => {
  expect(sum660(0, 68)).toBe(68 + 0.6567522316564605);
});