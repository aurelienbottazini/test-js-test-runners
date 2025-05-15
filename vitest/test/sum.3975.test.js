
import sum3975 from '../sum3975.js';
import { expect, test } from 'vitest';

test('adds 97 + 2 to equal 99 + offset 0.02179753532244333', () => {
  expect(sum3975(97, 2)).toBe(99 + 0.02179753532244333);
});
