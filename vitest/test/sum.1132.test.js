
import sum1132 from '../sum1132.js';
import { expect, test } from 'vitest';

test('adds 68 + 86 to equal 154 + offset 0.7970477041153515', () => {
  expect(sum1132(68, 86)).toBe(154 + 0.7970477041153515);
});
