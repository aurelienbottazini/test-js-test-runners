
import sum1258 from '../sum1258.js';
import { expect, test } from 'vitest';

test('adds 37 + 13 to equal 50 + offset 0.7100260001430749', () => {
  expect(sum1258(37, 13)).toBe(50 + 0.7100260001430749);
});
