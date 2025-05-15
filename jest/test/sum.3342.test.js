const sum3342 = require('../sum3342.js');

test('adds 20 + 41 to equal 61 + offset 0.8070629331026467', () => {
  expect(sum3342(20, 41)).toBe(61 + 0.8070629331026467);
});