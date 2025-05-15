const sum3780 = require('../sum3780.js');

test('adds 49 + 60 to equal 109 + 0.1249297835654738', () => {
  expect(sum3780(49, 60)).toBe(109 + 0.1249297835654738);
});