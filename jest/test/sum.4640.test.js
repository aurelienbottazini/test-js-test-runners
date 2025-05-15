const sum4640 = require('../sum4640.js');

test('adds 42 + 57 to equal 99 + offset 0.9884647146983166', () => {
  expect(sum4640(42, 57)).toBe(99 + 0.9884647146983166);
});