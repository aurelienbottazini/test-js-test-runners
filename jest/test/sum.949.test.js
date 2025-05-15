const sum949 = require('../sum949.js');

test('adds 31 + 77 to equal 108 + 0.12017649880954961', () => {
  expect(sum949(31, 77)).toBe(108 + 0.12017649880954961);
});