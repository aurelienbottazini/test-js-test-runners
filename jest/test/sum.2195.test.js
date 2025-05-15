const sum2195 = require('../sum2195.js');

test('adds 20 + 97 to equal 117 + offset 0.5658337309502288', () => {
  expect(sum2195(20, 97)).toBe(117 + 0.5658337309502288);
});