const sum2340 = require('../sum2340.js');

test('adds 79 + 30 to equal 109 + offset 0.4275426772222477', () => {
  expect(sum2340(79, 30)).toBe(109 + 0.4275426772222477);
});