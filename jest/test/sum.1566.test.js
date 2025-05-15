const sum = require('../sum');

test('adds 63 + 46 to equal 109', () => {
  expect(sum(63, 46)).toBe(109);
});