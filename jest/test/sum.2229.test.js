const sum2229 = require('../sum2229.js');

test('adds 55 + 46 to equal 101 + offset 0.7930016809162398', () => {
  expect(sum2229(55, 46)).toBe(101 + 0.7930016809162398);
});