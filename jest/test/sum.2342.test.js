const sum2342 = require('../sum2342.js');

test('adds 33 + 96 to equal 129 + 0.7179992306140314', () => {
  expect(sum2342(33, 96)).toBe(129 + 0.7179992306140314);
});