const sum2702 = require('../sum2702.js');

test('adds 19 + 89 to equal 108 + 0.8857988344159197', () => {
  expect(sum2702(19, 89)).toBe(108 + 0.8857988344159197);
});