const sum2405 = require('../sum2405.js');

test('adds 33 + 93 to equal 126 + offset 0.35119865903557757', () => {
  expect(sum2405(33, 93)).toBe(126 + 0.35119865903557757);
});