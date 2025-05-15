const sum883 = require('../sum883.js');

test('adds 62 + 76 to equal 138 + offset 0.3769826908722549', () => {
  expect(sum883(62, 76)).toBe(138 + 0.3769826908722549);
});