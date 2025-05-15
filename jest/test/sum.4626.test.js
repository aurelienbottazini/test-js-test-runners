const sum4626 = require('../sum4626.js');

test('adds 40 + 60 to equal 100 + offset 0.761473446237066', () => {
  expect(sum4626(40, 60)).toBe(100 + 0.761473446237066);
});