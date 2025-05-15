const sum3952 = require('../sum3952.js');

test('adds 45 + 39 to equal 84 + offset 0.9621204017760695', () => {
  expect(sum3952(45, 39)).toBe(84 + 0.9621204017760695);
});