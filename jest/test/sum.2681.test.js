const sum2681 = require('../sum2681.js');

test('adds 40 + 8 to equal 48 + offset 0.2594213709301487', () => {
  expect(sum2681(40, 8)).toBe(48 + 0.2594213709301487);
});