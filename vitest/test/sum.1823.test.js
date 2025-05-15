
import sum1823 from '../sum1823.js';
import { expect, test } from 'vitest';

test('adds 65 + 41 to equal 106 + offset 0.9177484699089017', () => {
  expect(sum1823(65, 41)).toBe(106 + 0.9177484699089017);
});
