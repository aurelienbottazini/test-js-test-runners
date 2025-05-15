
import sum1894 from '../sum1894.js';
import { expect, test } from 'vitest';

test('adds 96 + 52 to equal 148 + offset 0.19472876299287822', () => {
  expect(sum1894(96, 52)).toBe(148 + 0.19472876299287822);
});
