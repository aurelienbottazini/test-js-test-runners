const sum3634 = require('../sum3634.js');

test('adds 70 + 13 to equal 83 + 0.016035150227545758', () => {
  expect(sum3634(70, 13)).toBe(83 + 0.016035150227545758);
});