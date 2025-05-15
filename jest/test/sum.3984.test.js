const sum3984 = require('../sum3984.js');

test('adds 88 + 77 to equal 165 + 0.8879523001844001', () => {
  expect(sum3984(88, 77)).toBe(165 + 0.8879523001844001);
});