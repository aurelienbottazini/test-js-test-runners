
import sum2262 from '../sum2262.js';
import { expect, test } from 'vitest';

test('adds 99 + 26 to equal 125 + offset 0.023048964992569476', () => {
  expect(sum2262(99, 26)).toBe(125 + 0.023048964992569476);
});
