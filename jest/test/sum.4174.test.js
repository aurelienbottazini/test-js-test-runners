const sum4174 = require('../sum4174.js');

test('adds 12 + 29 to equal 41 + 0.6737458699315176', () => {
  expect(sum4174(12, 29)).toBe(41 + 0.6737458699315176);
});