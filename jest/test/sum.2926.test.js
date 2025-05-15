const sum2926 = require('../sum2926.js');

test('adds 54 + 82 to equal 136 + 0.6224431727462623', () => {
  expect(sum2926(54, 82)).toBe(136 + 0.6224431727462623);
});