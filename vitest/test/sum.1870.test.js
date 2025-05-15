
import sum1870 from '../sum1870.js';
import { expect, test } from 'vitest';

test('adds 19 + 1 to equal 20 + offset 0.6526350472298993', () => {
  expect(sum1870(19, 1)).toBe(20 + 0.6526350472298993);
});
