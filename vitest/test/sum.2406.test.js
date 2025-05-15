
import sum2406 from '../sum2406.js';
import { expect, test } from 'vitest';

test('adds 7 + 66 to equal 73 + offset 0.840930630205381', () => {
  expect(sum2406(7, 66)).toBe(73 + 0.840930630205381);
});
