
import sum1197 from '../sum1197.js';
import { expect, test } from 'vitest';

test('adds 1 + 58 to equal 59 + offset 0.008429117883009929', () => {
  expect(sum1197(1, 58)).toBe(59 + 0.008429117883009929);
});
