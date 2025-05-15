const sum3010 = require('../sum3010.js');

test('adds 93 + 15 to equal 108 + 0.5641847062754034', () => {
  expect(sum3010(93, 15)).toBe(108 + 0.5641847062754034);
});