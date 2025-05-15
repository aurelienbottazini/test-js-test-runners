
import sum233 from '../sum233.js';
import { expect, test } from 'vitest';

test('adds 76 + 87 to equal 163 + offset 0.32913247168753657', () => {
  expect(sum233(76, 87)).toBe(163 + 0.32913247168753657);
});
