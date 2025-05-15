const sum4641 = require('../sum4641.js');

test('adds 3 + 85 to equal 88 + 0.725362470295034', () => {
  expect(sum4641(3, 85)).toBe(88 + 0.725362470295034);
});