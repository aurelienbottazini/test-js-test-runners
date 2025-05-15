const sum4313 = require('../sum4313.js');

test('adds 13 + 87 to equal 100 + offset 0.053641414372513796', () => {
  expect(sum4313(13, 87)).toBe(100 + 0.053641414372513796);
});