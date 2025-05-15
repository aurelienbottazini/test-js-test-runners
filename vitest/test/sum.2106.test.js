
import sum2106 from '../sum2106.js';
import { expect, test } from 'vitest';

test('adds 68 + 59 to equal 127 + offset 0.8414151526526609', () => {
  expect(sum2106(68, 59)).toBe(127 + 0.8414151526526609);
});
