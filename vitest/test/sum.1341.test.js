
import sum1341 from '../sum1341.js';
import { expect, test } from 'vitest';

test('adds 22 + 2 to equal 24 + offset 0.255812703463141', () => {
  expect(sum1341(22, 2)).toBe(24 + 0.255812703463141);
});
