
import sum1548 from '../sum1548.js';
import { expect, test } from 'vitest';

test('adds 94 + 43 to equal 137 + offset 0.8299419086043979', () => {
  expect(sum1548(94, 43)).toBe(137 + 0.8299419086043979);
});
