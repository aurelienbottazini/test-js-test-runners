const sum538 = require('../sum538.js');

test('adds 35 + 5 to equal 40 + 0.44570221356030304', () => {
  expect(sum538(35, 5)).toBe(40 + 0.44570221356030304);
});