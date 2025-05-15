const sum2164 = require('../sum2164.js');

test('adds 87 + 85 to equal 172 + 0.6127582309791435', () => {
  expect(sum2164(87, 85)).toBe(172 + 0.6127582309791435);
});