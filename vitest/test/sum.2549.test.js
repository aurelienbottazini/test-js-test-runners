
import sum2549 from '../sum2549.js';
import { expect, test } from 'vitest';

test('adds 32 + 73 to equal 105 + offset 0.028448809007069475', () => {
  expect(sum2549(32, 73)).toBe(105 + 0.028448809007069475);
});
