
import sum2178 from '../sum2178.js';
import { expect, test } from 'vitest';

test('adds 21 + 52 to equal 73 + offset 0.9924887785577103', () => {
  expect(sum2178(21, 52)).toBe(73 + 0.9924887785577103);
});
