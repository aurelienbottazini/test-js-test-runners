const sum2014 = require('../sum2014.js');

test('adds 15 + 56 to equal 71 + 0.7654713933480937', () => {
  expect(sum2014(15, 56)).toBe(71 + 0.7654713933480937);
});