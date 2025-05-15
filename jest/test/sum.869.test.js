const sum869 = require('../sum869.js');

test('adds 77 + 60 to equal 137 + offset 0.4726157371631683', () => {
  expect(sum869(77, 60)).toBe(137 + 0.4726157371631683);
});