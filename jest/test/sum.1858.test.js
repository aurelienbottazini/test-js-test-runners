const sum = require('../sum');

test('adds 50 + 46 to equal 96', () => {
  expect(sum(50, 46)).toBe(96);
});