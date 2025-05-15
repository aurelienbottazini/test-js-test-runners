
import sum1874 from '../sum1874.js';
import { expect, test } from 'vitest';

test('adds 90 + 53 to equal 143 + offset 0.46945322562232206', () => {
  expect(sum1874(90, 53)).toBe(143 + 0.46945322562232206);
});
