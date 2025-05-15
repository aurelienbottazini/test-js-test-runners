const sum821 = require('../sum821.js');

test('adds 47 + 2 to equal 49 + 0.30492868369829207', () => {
  expect(sum821(47, 2)).toBe(49 + 0.30492868369829207);
});