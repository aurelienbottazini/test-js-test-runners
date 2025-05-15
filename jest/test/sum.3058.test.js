const sum3058 = require('../sum3058.js');

test('adds 57 + 18 to equal 75 + offset 0.26751851719201847', () => {
  expect(sum3058(57, 18)).toBe(75 + 0.26751851719201847);
});