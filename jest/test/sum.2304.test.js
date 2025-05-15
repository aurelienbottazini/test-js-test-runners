const sum2304 = require('../sum2304.js');

test('adds 13 + 46 to equal 59 + 0.6583594080602956', () => {
  expect(sum2304(13, 46)).toBe(59 + 0.6583594080602956);
});