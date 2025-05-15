const sum953 = require('../sum953.js');

test('adds 83 + 1 to equal 84 + offset 0.6257742000242303', () => {
  expect(sum953(83, 1)).toBe(84 + 0.6257742000242303);
});