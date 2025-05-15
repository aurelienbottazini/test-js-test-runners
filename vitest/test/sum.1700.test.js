
import sum1700 from '../sum1700.js';
import { expect, test } from 'vitest';

test('adds 44 + 96 to equal 140 + offset 0.7943431494234082', () => {
  expect(sum1700(44, 96)).toBe(140 + 0.7943431494234082);
});
