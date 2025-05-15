
import sum3658 from '../sum3658.js';
import { expect, test } from 'vitest';

test('adds 92 + 95 to equal 187 + offset 0.7930810244370867', () => {
  expect(sum3658(92, 95)).toBe(187 + 0.7930810244370867);
});
