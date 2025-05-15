const sum91 = require('../sum91.js');

test('adds 21 + 39 to equal 60 + offset 0.7808800459000974', () => {
  expect(sum91(21, 39)).toBe(60 + 0.7808800459000974);
});