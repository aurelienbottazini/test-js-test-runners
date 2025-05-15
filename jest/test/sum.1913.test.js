const sum1913 = require('../sum1913.js');

test('adds 5 + 91 to equal 96 + offset 0.10991048588075192', () => {
  expect(sum1913(5, 91)).toBe(96 + 0.10991048588075192);
});