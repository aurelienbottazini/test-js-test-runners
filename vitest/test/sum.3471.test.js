
import sum3471 from '../sum3471.js';
import { expect, test } from 'vitest';

test('adds 85 + 22 to equal 107 + offset 0.9427130306934076', () => {
  expect(sum3471(85, 22)).toBe(107 + 0.9427130306934076);
});
