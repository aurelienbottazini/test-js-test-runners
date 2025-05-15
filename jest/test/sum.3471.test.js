const sum3471 = require('../sum3471.js');

test('adds 10 + 34 to equal 44 + 0.4411723851652196', () => {
  expect(sum3471(10, 34)).toBe(44 + 0.4411723851652196);
});