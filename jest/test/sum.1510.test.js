const sum1510 = require('../sum1510.js');

test('adds 75 + 4 to equal 79 + offset 0.06295297970001723', () => {
  expect(sum1510(75, 4)).toBe(79 + 0.06295297970001723);
});