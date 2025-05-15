
import sum3835 from '../sum3835.js';
import { expect, test } from 'vitest';

test('adds 55 + 37 to equal 92 + offset 0.08009586048832296', () => {
  expect(sum3835(55, 37)).toBe(92 + 0.08009586048832296);
});
