const sum2038 = require('../sum2038.js');

test('adds 14 + 15 to equal 29 + offset 0.8131559871348051', () => {
  expect(sum2038(14, 15)).toBe(29 + 0.8131559871348051);
});