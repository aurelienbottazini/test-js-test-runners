
import sum2988 from '../sum2988.js';
import { expect, test } from 'vitest';

test('adds 13 + 10 to equal 23 + offset 0.506857481796223', () => {
  expect(sum2988(13, 10)).toBe(23 + 0.506857481796223);
});
