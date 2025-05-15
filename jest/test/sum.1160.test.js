const sum1160 = require('../sum1160.js');

test('adds 76 + 15 to equal 91 + 0.8975524905072263', () => {
  expect(sum1160(76, 15)).toBe(91 + 0.8975524905072263);
});