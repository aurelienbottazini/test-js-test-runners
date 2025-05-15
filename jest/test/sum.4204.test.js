const sum4204 = require('../sum4204.js');

test('adds 97 + 84 to equal 181 + 0.8735420698750297', () => {
  expect(sum4204(97, 84)).toBe(181 + 0.8735420698750297);
});