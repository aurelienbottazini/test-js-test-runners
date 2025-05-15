const sum756 = require('../sum756.js');

test('adds 53 + 4 to equal 57 + 0.5477122140621271', () => {
  expect(sum756(53, 4)).toBe(57 + 0.5477122140621271);
});