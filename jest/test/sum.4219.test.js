const sum4219 = require('../sum4219.js');

test('adds 49 + 43 to equal 92 + 0.2660657565480191', () => {
  expect(sum4219(49, 43)).toBe(92 + 0.2660657565480191);
});