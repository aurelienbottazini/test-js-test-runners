const sum225 = require('../sum225.js');

test('adds 82 + 51 to equal 133 + 0.4149679218594281', () => {
  expect(sum225(82, 51)).toBe(133 + 0.4149679218594281);
});