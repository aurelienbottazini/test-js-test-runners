const sum933 = require('../sum933.js');

test('adds 41 + 67 to equal 108 + 0.7947496241089439', () => {
  expect(sum933(41, 67)).toBe(108 + 0.7947496241089439);
});