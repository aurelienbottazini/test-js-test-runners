const sum4024 = require('../sum4024.js');

test('adds 41 + 19 to equal 60 + 0.17034655207949068', () => {
  expect(sum4024(41, 19)).toBe(60 + 0.17034655207949068);
});