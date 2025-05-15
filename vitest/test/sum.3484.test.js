
import sum3484 from '../sum3484.js';
import { expect, test } from 'vitest';

test('adds 92 + 10 to equal 102 + offset 0.8977407309631243', () => {
  expect(sum3484(92, 10)).toBe(102 + 0.8977407309631243);
});
