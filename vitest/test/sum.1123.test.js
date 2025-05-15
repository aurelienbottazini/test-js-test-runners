
import sum1123 from '../sum1123.js';
import { expect, test } from 'vitest';

test('adds 48 + 96 to equal 144 + offset 0.37439129737532384', () => {
  expect(sum1123(48, 96)).toBe(144 + 0.37439129737532384);
});
