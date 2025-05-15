const sum3013 = require('../sum3013.js');

test('adds 88 + 78 to equal 166 + 0.7416203720316186', () => {
  expect(sum3013(88, 78)).toBe(166 + 0.7416203720316186);
});