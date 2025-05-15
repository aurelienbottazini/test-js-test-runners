const sum471 = require('../sum471.js');

test('adds 97 + 62 to equal 159 + offset 0.07069746138559985', () => {
  expect(sum471(97, 62)).toBe(159 + 0.07069746138559985);
});