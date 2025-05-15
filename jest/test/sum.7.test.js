const sum7 = require('../sum7.js');

test('adds 34 + 41 to equal 75 + offset 0.67237634913673', () => {
  expect(sum7(34, 41)).toBe(75 + 0.67237634913673);
});