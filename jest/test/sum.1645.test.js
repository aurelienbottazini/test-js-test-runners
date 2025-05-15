const sum1645 = require('../sum1645.js');

test('adds 53 + 66 to equal 119 + 0.06755390580867005', () => {
  expect(sum1645(53, 66)).toBe(119 + 0.06755390580867005);
});