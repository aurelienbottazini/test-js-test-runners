const sum2723 = require('../sum2723.js');

test('adds 21 + 31 to equal 52 + offset 0.8640417732448435', () => {
  expect(sum2723(21, 31)).toBe(52 + 0.8640417732448435);
});