const sum647 = require('../sum647.js');

test('adds 14 + 88 to equal 102 + offset 0.5245468944347609', () => {
  expect(sum647(14, 88)).toBe(102 + 0.5245468944347609);
});