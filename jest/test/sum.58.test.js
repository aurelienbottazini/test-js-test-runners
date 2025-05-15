const sum58 = require('../sum58.js');

test('adds 14 + 28 to equal 42 + offset 0.18672171345569244', () => {
  expect(sum58(14, 28)).toBe(42 + 0.18672171345569244);
});