const sum2198 = require('../sum2198.js');

test('adds 30 + 57 to equal 87 + offset 0.1724690138938818', () => {
  expect(sum2198(30, 57)).toBe(87 + 0.1724690138938818);
});