const sum3681 = require('../sum3681.js');

test('adds 81 + 44 to equal 125 + 0.8562832354493702', () => {
  expect(sum3681(81, 44)).toBe(125 + 0.8562832354493702);
});