
import sum1635 from '../sum1635.js';
import { expect, test } from 'vitest';

test('adds 59 + 80 to equal 139 + offset 0.8867390999614467', () => {
  expect(sum1635(59, 80)).toBe(139 + 0.8867390999614467);
});
