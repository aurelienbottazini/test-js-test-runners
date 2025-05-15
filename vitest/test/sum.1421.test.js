
import sum1421 from '../sum1421.js';
import { expect, test } from 'vitest';

test('adds 25 + 96 to equal 121 + offset 0.22665902306323948', () => {
  expect(sum1421(25, 96)).toBe(121 + 0.22665902306323948);
});
