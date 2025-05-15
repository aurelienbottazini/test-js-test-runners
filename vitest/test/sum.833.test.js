
import sum833 from '../sum833.js';
import { expect, test } from 'vitest';

test('adds 51 + 63 to equal 114 + offset 0.4900572734932672', () => {
  expect(sum833(51, 63)).toBe(114 + 0.4900572734932672);
});
