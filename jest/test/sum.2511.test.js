const sum2511 = require('../sum2511.js');

test('adds 84 + 37 to equal 121 + 0.27965998628142075', () => {
  expect(sum2511(84, 37)).toBe(121 + 0.27965998628142075);
});