const sum1392 = require('../sum1392.js');

test('adds 18 + 43 to equal 61 + 0.8038967316442399', () => {
  expect(sum1392(18, 43)).toBe(61 + 0.8038967316442399);
});