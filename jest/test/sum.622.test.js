const sum622 = require('../sum622.js');

test('adds 40 + 40 to equal 80 + offset 0.028743866560868025', () => {
  expect(sum622(40, 40)).toBe(80 + 0.028743866560868025);
});