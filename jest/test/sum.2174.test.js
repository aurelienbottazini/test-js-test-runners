const sum2174 = require('../sum2174.js');

test('adds 57 + 97 to equal 154 + offset 0.6977690279576696', () => {
  expect(sum2174(57, 97)).toBe(154 + 0.6977690279576696);
});