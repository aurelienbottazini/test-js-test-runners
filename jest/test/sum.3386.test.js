const sum3386 = require('../sum3386.js');

test('adds 7 + 19 to equal 26 + 0.35648578320537094', () => {
  expect(sum3386(7, 19)).toBe(26 + 0.35648578320537094);
});