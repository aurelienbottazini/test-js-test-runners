const sum213 = require('../sum213.js');

test('adds 66 + 20 to equal 86 + 0.015966945530775378', () => {
  expect(sum213(66, 20)).toBe(86 + 0.015966945530775378);
});