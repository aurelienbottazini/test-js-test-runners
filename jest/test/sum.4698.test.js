const sum4698 = require('../sum4698.js');

test('adds 75 + 55 to equal 130 + offset 0.4404822868379502', () => {
  expect(sum4698(75, 55)).toBe(130 + 0.4404822868379502);
});