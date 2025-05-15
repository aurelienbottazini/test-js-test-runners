
import sum2264 from '../sum2264.js';
import { expect, test } from 'vitest';

test('adds 32 + 43 to equal 75 + offset 0.2331796917110649', () => {
  expect(sum2264(32, 43)).toBe(75 + 0.2331796917110649);
});
