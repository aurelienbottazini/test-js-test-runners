const sum589 = require('../sum589.js');

test('adds 14 + 61 to equal 75 + offset 0.1979976345822544', () => {
  expect(sum589(14, 61)).toBe(75 + 0.1979976345822544);
});