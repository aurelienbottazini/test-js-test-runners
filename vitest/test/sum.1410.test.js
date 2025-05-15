
import sum1410 from '../sum1410.js';
import { expect, test } from 'vitest';

test('adds 76 + 56 to equal 132 + offset 0.736996766035522', () => {
  expect(sum1410(76, 56)).toBe(132 + 0.736996766035522);
});
